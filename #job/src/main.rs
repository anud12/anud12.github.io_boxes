use job_base::{
    DecodeBase64, FileMetadata, FileQuery, GoogleSession, IntoTable, PrintableAnd, Table, TableRow,
};
use std::error::Error;
fn main() -> Result<(), Box<dyn Error>> {
    let global_fs = GoogleSession::new()?.into_drive();
    let boxes = global_fs.find_one_by_id("1DwTbUSWf5kzNq84Kc08bJ9Wyw9ijfBuS")?;
    let db = global_fs.find_one_by_name("db")?.into_table();
    let trash = boxes.find_one_by_id("1Ehz04RmJqPzmVtZtehYRsSnzOGDX-cXw")?;
    let images = boxes.find_one_by_name("images")?;
    let mut files = boxes.find_by_name("form-data.json")?;
    let rows = files
        .iter_mut()
        .map(|file| {
            let data = file.into_json().unwrap();
            let data = data.as_object().expect("form-data.json should be object");

            let file_string = data
                .get("image")
                .unwrap()
                .as_str()
                .unwrap()
                .print_and("Demo");
            let image_file = images
                .create(
                    file.get_id().as_str(),
                    "image/jpeg",
                    String::from(file_string).decode_base64().unwrap(),
                )
                .unwrap();
            TableRow::new()
                .insert("name", data.get("name").unwrap().as_str().unwrap())
                .insert("months", data.get("months").unwrap().as_str().unwrap())
                .insert("imageLink", image_file.get_link())
        })
        .collect();
    db.save_all(rows);
    Ok(())
}

#[cfg(test)]
mod tests_drive {
    #[test]
    fn drive_works() -> Result<(), Box<dyn std::error::Error>> {
        std::env::set_var("PRIVATE_KEY", include_str!("private_key"));
        std::env::set_var("CLIENT_EMAIL", include_str!("client_email"));
        crate::main()
    }
}
