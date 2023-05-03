use std::fmt::Debug;

pub trait Printable {
    fn print(&self);
}

impl<T: Debug> Printable for T {
    fn print(&self) {
        println!("{:?}", &self);
    }
}
