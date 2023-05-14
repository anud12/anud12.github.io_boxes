use job_base::PostPrintable;
pub use job_base::{FileMetadata, FolderQuery, GoogleSession, RootQuery};
use std::error::Error;
fn main() -> Result<(), Box<dyn Error>> {
    let global_fs = GoogleSession::new()?.into_drive();
    let boxes = global_fs.find_one_by_name("boxes")?;
    let boxes_trash = global_fs.find_one_by_name("boxes_trash")?;
    let first = boxes.find_by_name("first.json")?.remove(0);
    Ok(())
}
