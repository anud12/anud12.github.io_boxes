use std::error::Error;

use api::{google_session::GoogleSession, session::Session};
use printable::{Printable, PrintableAnd};
pub mod api;
pub mod printable;
fn main() -> Result<(), Box<dyn Error>> {
    // Load the service account JSON file
    let sa_file = include_str!("service_account.json");
    let sa_json: serde_json::Value = serde_json::from_str(&sa_file).unwrap();
    let private_key = sa_json["private_key"].as_str().unwrap();
    let client_email = sa_json["client_email"].as_str().unwrap();

    let fs = GoogleSession::new(client_email, private_key)?.into_file_query_api();
    let boxes_trash = fs
        .find_one_by_name("boxes_trash")?
        .print_pre_and("Boxes trash file: ");
    let deleteMe = fs.find_one_by_name("deleteMe")?;
    deleteMe.print_pre_and("DeleteMe file: ");
    deleteMe.move_to(&boxes_trash)?;
    Ok(())
}
