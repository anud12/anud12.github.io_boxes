use ureq::Request;

use crate::api::session::SessionData;

use super::file_api::{FileApi, FileData};

pub const FILE_API_URL: &str = "https://www.googleapis.com/drive/v3/files";

fn prepare_request(token: String) -> Request {
    ureq::get(FILE_API_URL)
        .query("fields", "files(id,name, mimeType, parents, permissions)") // change this to the fields you need
        .set("Authorization", &format!("Bearer {}", token))
}

#[derive(Debug, Clone)]
pub struct FileQueryApi {
    session: SessionData,
}

impl FileQueryApi {
    pub fn new(session: SessionData) -> FileQueryApi {
        FileQueryApi { session: session }
    }
    pub fn to_session(&self) -> SessionData {
        return self.session.clone();
    }

    pub fn list_all(&self) -> Result<Vec<FileApi>, Box<dyn std::error::Error>> {
        let response = prepare_request(self.session.get_token()).call()?;
        let body = response.into_json::<serde_json::Value>()?;
        let files_string = match body.get("files") {
            Some(value) => value.to_string(),
            None => return Err(format!("files value does not exist on body {:?}", body).into()),
        };
        let file_list: Vec<FileData> = serde_json::from_str(&files_string)?;
        let file_list = file_list
            .iter()
            .map(|file| FileApi::new(self.session.clone(), file))
            .collect();
        Ok(file_list)
    }

    pub fn find_by_name<T: Into<String>>(
        &self,
        name: T,
    ) -> Result<Vec<FileApi>, Box<dyn std::error::Error>> {
        let response = prepare_request(self.session.get_token())
            .query("q", format!("name='{}'", name.into()).as_str())
            .call()?;
        let body = response.into_json::<serde_json::Value>()?;
        let files_string = match body.get("files") {
            Some(value) => value.to_string(),
            None => return Err(format!("files value does not exist on body {:?}", body).into()),
        };
        let file_list: Vec<FileData> = serde_json::from_str(&files_string)?;
        let file_list = file_list
            .iter()
            .map(|file| FileApi::new(self.session.clone(), file))
            .collect();
        Ok(file_list)
    }

    pub fn find_one_by_name<T: Into<String>>(
        &self,
        name: T,
    ) -> Result<FileApi, Box<dyn std::error::Error>> {
        let name: String = name.into();
        let file_list = self.find_by_name(name.clone())?;
        match file_list.len() {
            1 => {
                let element = file_list.get(0).unwrap();
                return Ok(element.clone());
            }
            0 => Err(format!("No file found for {}", name).into()),
            _ => Err(format!("Multiple files found for {}", name).into()),
        }
    }
}
