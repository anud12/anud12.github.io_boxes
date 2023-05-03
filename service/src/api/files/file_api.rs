use ureq::Request;

use crate::api::session::Session;

use super::file_data::FileData;

const URL: &str = "https://www.googleapis.com/drive/v3/files";

fn prepare_request(token: String) -> Request {
    ureq::get(URL)
        .query("fields", "files(id,name,mimeType, parents)") // change this to the fields you need
        .set("Authorization", &format!("Bearer {}", token))
}

pub trait FileApi: Session {
    fn file_api_list(&self) -> Result<Vec<FileData>, Box<dyn std::error::Error>> {
        let response = prepare_request(self.get_token()).call()?;
        let body = response.into_json::<serde_json::Value>()?;
        let files_string = match body.get("files") {
            Some(value) => value.to_string(),
            None => return Err(format!("files value does not exist on body {:?}", body).into()),
        };
        let files_json: Vec<FileData> = serde_json::from_str(&files_string)?;
        Ok(files_json)
    }

    fn file_find_by_name<T: Into<String>>(
        &self,
        name: T,
    ) -> Result<Vec<FileData>, Box<dyn std::error::Error>> {
        let response = prepare_request(self.get_token())
            .query("q", format!("name='{}'", name.into()).as_str())
            .call()?;
        let body = response.into_json::<serde_json::Value>()?;
        let files_string = match body.get("files") {
            Some(value) => value.to_string(),
            None => return Err(format!("files value does not exist on body {:?}", body).into()),
        };
        let files_json: Vec<FileData> = serde_json::from_str(&files_string)?;
        Ok(files_json)
    }

    fn file_find_one_by_name<T: Into<String>>(
        &self,
        name: T,
    ) -> Result<FileData, Box<dyn std::error::Error>> {
        let files_json = self.file_find_by_name(name)?;
        match files_json.len() {
            1 => {
                let element = files_json.get(0).unwrap();
                return Ok(element.clone());
            }
            0 => Err("No file found".into()),
            _ => Err("Multiple files found".into()),
        }
    }
}
impl<T: Session> FileApi for T {}
