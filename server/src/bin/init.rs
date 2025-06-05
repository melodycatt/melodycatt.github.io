use std::{fs, path::Path};
const ROOT_PATH: &'static str = r"C:\Users\RadiumPCs\melodycatt.github.io\server\";

fn main() {
    let wall = "\u{00A0}".repeat(1000).repeat(1000);
    fs::write(Path::new(ROOT_PATH).join(r"static\wall.txt"), wall).expect("ARG");
}