use serde::{Deserialize, Serialize};

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
    pub id: String,
    pub name: String,
    #[serde(
        alias = "mimeType",
        deserialize_with = "deserialize_file_data_mime_type"
    )]
    pub mime_type: FileDataMimeType,
    pub parents: Option<Vec<String>>,
}
