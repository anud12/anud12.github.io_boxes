use std::{error::Error, fmt::Debug};

use crate::login::Session;

pub mod login;

trait Printable {
    fn print(&self);
}

impl<T: Debug> Printable for T {
    fn print(&self) {
        println!("{:?}", &self);
    }
}

fn main() -> Result<(), Box<dyn Error>> {
    let _session = Box::new(Session {});
    login::Session::login()
}
