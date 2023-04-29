use base64::engine::general_purpose;
use base64::Engine;
use jwt::{AlgorithmType, Header, SignWithKey, Token};
use rsa::pkcs1::pem::Base64Encoder;
use rsa::pkcs8::DecodePrivateKey;
use rsa::pss::BlindedSigningKey;
use rsa::signature::RandomizedSigner;
use rsa::{Pkcs1v15Sign, Pss, RsaPrivateKey};
use serde_json::json;
use sha2::Sha256;
use std::error::Error;
use std::time::UNIX_EPOCH;
use std::{env, time};

use crate::Printable;

#[derive(Debug)]
pub struct Session {}

impl Session {
    pub fn temp(&self) {}
    pub fn login() -> Result<(), Box<dyn Error>> {
        let mut token = include_str!("./key");
        let header = json!({
            "alg":"RS256",
            "typ": "JWT",
        });

        let now: u64 = time::SystemTime::now()
            .duration_since(UNIX_EPOCH)?
            .as_secs();

        let claims = json!({
            "iss": "cloud-281@webapi-383718.iam.gserviceaccount.com",
            "scope": "https://www.googleapis.com/auth/drive",
            "aud": "https://oauth2.googleapis.com/token",
            "exp": now + 260,
            "iat": now
        });
        let key = rsa::RsaPrivateKey::from_pkcs8_pem(&token)?;
        let token = format!("{}.{}", header, claims);
        // let token = claims.to_string();

        let signing_key: BlindedSigningKey<Sha256> = BlindedSigningKey::<Sha256>::new(key);
        let mut rng = rand::thread_rng();
        let signature = signing_key.sign_with_rng(&mut rng, token.as_bytes());

        let header = general_purpose::STANDARD_NO_PAD.encode(header.to_string());
        let claims = general_purpose::STANDARD_NO_PAD.encode(claims.to_string());
        let token = format!("{}.{}.{}", header, claims, signature);
        let body = format!(
            "grant_type={}&assertion={}",
            "urn:ietf:params:oauth:grant-type:jwt-bearer", token
        );
        let _response = ureq::post("https://oauth2.googleapis.com/token")
            .set("Content-Type", "application/x-www-form-urlencoded")
            .send_string(body.as_str())
            .print();

        Ok(())
    }
}
