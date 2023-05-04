use std::error::Error;

use api::{
    files::file_query_api::FileQueryTrailt, google_session::GoogleSession, session::Session,
};
use printable::{Printable, PrintableAnd};
pub mod api;
pub mod printable;
fn main() -> Result<(), Box<dyn Error>> {
    // Load the service account JSON file
    let sa_file = include_str!("service_account.json");
    let sa_json: serde_json::Value = serde_json::from_str(&sa_file).unwrap();
    let private_key = sa_json["private_key"].as_str().unwrap();
    let client_email = sa_json["client_email"].as_str().unwrap();

    let global_fs = GoogleSession::new(client_email, private_key)?.into_file_query_api();
    let boxes = global_fs.find_one_by_name("boxes")?;
    let boxes_trash = global_fs
        .find_one_by_name("boxes_trash")?
        .print_pre_and("Boxes trash file: ");
    // let deleteMe = fs.find_one_by_name("deleteMe")?;
    // deleteMe.print_pre_and("DeleteMe file: ");
    // deleteMe.move_to(&boxes_trash)?;

    // fs.find_one_by_name("boxes")?
    //     .find_one_by_name("deleteMe")?
    //     .move_to(&boxes_trash)?;
    let first = boxes
        .find_by_name("first.json")?
        .get(0)
        .unwrap()
        .download_body()?;

    first.print();
    Ok(())
}
