use std::{fs, path::Path};
// const ROOT_PATH: &'static str = r"C:\Users\RadiumPCs\melodycatt.github.io\server\";
const ROOT_PATH: &'static str = r"/Users/edwardlenzner/melodycatt.github.io/server/";

fn main() {
    //let wall = " ".repeat(1000).repeat(1000);
    let wall = "\u{2060}\u{00A0}".repeat(1000).repeat(667);
    fs::write(Path::new(ROOT_PATH).join(r"static/wall.txt"), wall).expect("ARG");
    // fs::write(Path::new(ROOT_PATH).join(r"static\wall.txt"), wall).expect("ARG");
}