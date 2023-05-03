use serde::{Deserialize, Serialize};
use serde_json::json;
use ureq::Request;

use crate::{
    api::session::{self, SessionData},
    printable::PrintableAnd,
};

use super::file__query_api::FILE_API_URL;

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
}
