pub trait Session {
    fn get_token(&self) -> String;
}
