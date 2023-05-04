use super::files::file_query_api::FileQueryApi;

pub trait Session<SessionDataType = SessionData> {
    fn new<T: Into<String>>(
        client_email: T,
        private_key: T,
    ) -> Result<SessionDataType, Box<dyn std::error::Error>>;
    fn into_session(&self) -> SessionData;

    fn into_file_query_api(&self) -> FileQueryApi {
        FileQueryApi::new(self.into_session())
    }
}
#[derive(Debug, Clone)]
pub struct SessionData {
    pub token: String,
    pub expiration_unix_seconds: u64,
}

impl SessionData {
    pub fn get_token(&self) -> String {
        return self.token.clone();
    }
}
