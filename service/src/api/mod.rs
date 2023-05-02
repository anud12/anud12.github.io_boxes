use self::session::SessionStruct;

pub mod session;

pub trait DriveApi {
    fn get_bearer(&self) -> String;

    fn list_files(&self) -> ureq::Response {
        ureq::get("https://www.googleapis.com/drive/v3/files")
        // .query("q", "'root' in parents") // change this to the query you need
        // .query("fields", "files(id,name,mimeType)") // change this to the fields you need
        .set("Authorization", &format!("Bearer {}", self.get_bearer()))
        .call()
        .unwrap()
    }
}


impl DriveApi for SessionStruct {
    fn get_bearer(&self) -> String {
        self.token.clone()
    }
}