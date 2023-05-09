use std::error::Error;
pub use job_base::{GoogleSession, RootQuery, FolderQuery, FileMetadata};
fn main() -> Result<(), Box<dyn Error>> {
    // Load the service account JSON file
    // let sa_file = include_str!("service_account.json");
    // let sa_json: serde_json::Value = serde_json::from_str(&sa_file).unwrap();
    // let private_key = sa_json["private_key"].as_str().unwrap();
    // let client_email = sa_json["client_email"].as_str().unwrap();
    let private_key = "";
    let client_email = "";
    let global_fs = GoogleSession::new(client_email, private_key)?.drive();
    let boxes = global_fs.find_one_by_name("boxes")?;
    let boxes_trash = global_fs.find_one_by_name("boxes_trash")?;
    let first = boxes.find_by_name("first.json")?.remove(0);
    //
    // first.get_body_json().print();
    // global_fs.find_all()?.print();
    Ok(())
}
