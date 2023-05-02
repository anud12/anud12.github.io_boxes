use std::{error::Error, fmt::Debug};

use crate::login::Session;

pub mod login;

trait Printable {
    fn print(&self);
}

impl<T: Debug> Printable for T {
    fn print(&self) {
        println!("{:?}", &self);
    }
}

fn main2() -> Result<(), Box<dyn Error>> {
    let _session = Box::new(Session {});
    login::Session::login()
}

fn main3() {
    let client_id = "985280907031-ffvfnc8pi0ane99lso9dbl1m2l5oc9nn.apps.googleusercontent.com";
    let scope = "https://www.googleapis.com/auth/drive";
    let redirect_uri = "http://localhost:8080";
    let state = "your_state_value"; // optional
    let url = format!("https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id={}&scope={}&redirect_uri={}&state={}", client_id, scope, redirect_uri, state);
    let response = ureq::get(&url).call().unwrap();
    response.get_url().print();
    let url = url::Url::parse(response.get_url()).expect("Get consent url");
    url.print();
    let code = url
        .query_pairs()
        .find(|(key, _)| key == "access_token")
        .map(|(_, value)| value)
        .unwrap();

    code.print();

    // let agent = ureq::Agent::new();
    // let response = agent.post("https://oauth2.googleapis.com/token")
    //     .send_form(&[
    //         ("client_id", "985280907031-ffvfnc8pi0ane99lso9dbl1m2l5oc9nn.apps.googleusercontent.com"),
    //         ("client_secret", "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"),
    //         ("grant_type", scope),
    //         ("code", "your_code"),
    //         ("redirect_uri", "http://localhost:8080"),
    //     ])
    //     .unwrap();
    // let json = response.into_json().unwrap();
    // let access_token = json["access_token"].as_str().unwrap();
    // let refresh_token = json["refresh_token"].as_str().unwrap();
}

fn main() {
    use jsonwebtoken::{encode, Algorithm, EncodingKey, Header};
    use serde_json::json;
    use std::time::{SystemTime, UNIX_EPOCH};
    // Load the service account JSON file
    let sa_file = include_str!("service_account.json");
    let sa_json: serde_json::Value = serde_json::from_str(&sa_file).unwrap();

    // Get the private key and email from the JSON
    let private_key = sa_json["private_key"].as_str().unwrap();
    let client_email = sa_json["client_email"].as_str().unwrap();

    // Create a JWT with the required claims
    let now = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap()
        .as_secs();
    let claims = json!({
        "iss": client_email,
        "scope": "https://www.googleapis.com/auth/drive", // change this to the scope you need
        "aud": "https://oauth2.googleapis.com/token",
        "exp": now + 3600,
        "iat": now
    });
    let header = Header::new(Algorithm::RS256);
    let key = EncodingKey::from_rsa_pem(private_key.as_bytes()).unwrap();
    let jwt = encode(&header, &claims, &key).unwrap();

    // Send a POST request to get the access token
    let response = ureq::post("https://oauth2.googleapis.com/token")
        .send_form(&[
            ("grant_type", "urn:ietf:params:oauth:grant-type:jwt-bearer"),
            ("assertion", &jwt),
        ])
        .unwrap();
    let json = response.into_json::<serde_json::Value>().unwrap();
    let access_token = json["access_token"].as_str().unwrap();
    println!("The access token is: {}", access_token);

    let response = ureq::get("https://www.googleapis.com/drive/v3/files")
        // .query("q", "'root' in parents") // change this to the query you need
        // .query("fields", "files(id,name,mimeType)") // change this to the fields you need
        .set("Authorization", &format!("Bearer {}", access_token))
        .call()
        .unwrap();
    response.print();
    let json = response.into_json::<serde_json::Value>().unwrap();
    let files = json["files"].as_array().unwrap();
    println!("The files in root folder are:");
    for file in files {
        let id = file["id"].as_str().unwrap();
        let name = file["name"].as_str().unwrap();
        let mime_type = file["mimeType"].as_str().unwrap();
        println!("ID: {}, Name: {}, MIME type: {}", id, name, mime_type);
    }
}
