use std::error::Error;

use api::{files::file_api::FileApi, session_data::SessionData};
use printable::Printable;

pub mod api;
pub mod printable;
fn main() -> Result<(), Box<dyn Error>> {
    // Load the service account JSON file
    let sa_file = include_str!("service_account.json");
    let sa_json: serde_json::Value = serde_json::from_str(&sa_file).unwrap();
    let private_key = sa_json["private_key"].as_str().unwrap();
    let client_email = sa_json["client_email"].as_str().unwrap();

    let result = SessionData::new(client_email, private_key)?;
    result
        .file_find_by_name("first.json")?
        .iter()
        .for_each(|file| {
            file.mime_type.print();
        });

    Ok(())
}
