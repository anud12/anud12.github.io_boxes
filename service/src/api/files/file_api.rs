use super::file_query_api::{FileQueryTrailt, FILE_API_URL};
use crate::api::session::SessionData;
use serde::{Deserialize, Serialize};
use ureq::Request;

#[derive(Debug, Deserialize, Serialize, Clone)]
pub enum FileDataMimeType {
    JSON,
    Folder,
    Unknown(String),
}

fn deserialize_file_data_mime_type<'de, D>(deserializer: D) -> Result<FileDataMimeType, D::Error>
where
    D: serde::Deserializer<'de>,
{
    let s = String::deserialize(deserializer)?;
    match s.as_str() {
        "application/json" => Ok(FileDataMimeType::JSON),
        "application/vnd.google-apps.folder" => Ok(FileDataMimeType::Folder),
        _ => Err(serde::de::Error::custom(format!(
            "unknown mime type: {}",
            s
        ))),
    }
}

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct FileData {
    id: String,
    name: String,
    #[serde(
        alias = "mimeType",
        deserialize_with = "deserialize_file_data_mime_type"
    )]
    mime_type: FileDataMimeType,
    permissions: serde_json::Value,
    parents: Option<Vec<String>>,
}
#[derive(Debug, Clone)]
pub struct FileApi {
    session_data: SessionData,
    file_data: FileData,
}
impl FileApi {
    pub fn new(session_data: SessionData, file_data: &FileData) -> FileApi {
        FileApi {
            session_data,
            file_data: file_data.clone(),
        }
    }
    pub fn move_to(&self, file: &FileApi) -> Result<(), Box<dyn std::error::Error>> {
        match &self.file_data.parents {
            None => return Err("No parents found".into()),
            Some(parents) => {
                ureq::patch(
                    format!(
                        "https://www.googleapis.com/upload/drive/v3/files/{}?removeParents={}&addParents={}",
                        self.file_data.id,
                        parents.get(0).unwrap(),
                        file.file_data.id,
                    )
                    .as_str(),
                )
                .set(
                    "Authorization",
                    &format!("Bearer {}", self.session_data.get_token()),
                )
                .call()?;
            }
        }

        Ok(())
    }
    pub fn download_body(&self) -> Result<serde_json::Value, Box<dyn std::error::Error>> {
        let response: serde_json::Value = ureq::get(
            format!(
                "https://www.googleapis.com/drive/v3/files/{}?alt=media",
                self.file_data.id,
            )
            .as_str(),
        )
        .set(
            "Authorization",
            &format!("Bearer {}", self.session_data.get_token()),
        )
        .call()?
        .into_json::<serde_json::Value>()?;

        Ok(response)
    }
}

fn prepare_request(token: String) -> Request {
    ureq::get(FILE_API_URL)
        .query("fields", "files(id,name, mimeType, parents, permissions)") // change this to the fields you need
        .set("Authorization", &format!("Bearer {}", token))
}
impl Into<SessionData> for FileApi {
    fn into(self) -> SessionData {
        self.session_data
    }
}

impl FileQueryTrailt for FileApi {
    fn list_all(&self) -> Result<Vec<FileApi>, Box<dyn std::error::Error>> {
        let session: SessionData = self.clone().into();

        let response = prepare_request(session.get_token())
            .query("q", format!("'{}' in parents", self.file_data.id).as_str())
            .call()?;
        let body = response.into_json::<serde_json::Value>()?;
        let files_string = match body.get("files") {
            Some(value) => value.to_string(),
            None => return Err(format!("files value does not exist on body {:?}", body).into()),
        };
        let file_list: Vec<FileData> = serde_json::from_str(&files_string)?;
        let file_list = file_list
            .iter()
            .map(|file| FileApi::new(session.clone(), file))
            .collect();
        Ok(file_list)
    }

    fn find_by_name<T: Into<String>>(
        &self,
        name: T,
    ) -> Result<Vec<FileApi>, Box<dyn std::error::Error>> {
        let session: SessionData = self.clone().into();
        let response = prepare_request(session.get_token())
            .query(
                "q",
                format!(
                    "'{}' in parents and name='{}'",
                    self.file_data.id,
                    name.into()
                )
                .as_str(),
            )
            .call()?;
        let body = response.into_json::<serde_json::Value>()?;
        let files_string = match body.get("files") {
            Some(value) => value.to_string(),
            None => return Err(format!("files value does not exist on body {:?}", body).into()),
        };
        let file_list: Vec<FileData> = serde_json::from_str(&files_string)?;
        let file_list = file_list
            .iter()
            .map(|file| FileApi::new(session.clone(), file))
            .collect();
        Ok(file_list)
    }
}
