use std::{env, fs};

//const ROOT_PATH: &'static str = r"C:\Users\RadiumPCs\melodycatt.github.io\server\";
//const ROOT_PATH: &'static str = r"/Users/edwardlenzner/melodycatt.github.io/server/";
//const ROOT_PATH: &'static str = r"/app/";

use axum::{
    http::StatusCode, response::Html, routing::{get, post}, Json, Router
};
use serde::{Deserialize, Serialize};
use tower_http::services::ServeDir;

//#[tokio::main]
#[shuttle_runtime::main]
async fn main() -> shuttle_axum::ShuttleAxum {
    // initialize tracing
    
    //tracing_subscriber::fmt::init();
    println!("{:?}", env::temp_dir());
    // build our application with a route
    let app = Router::new()
        // `GET /` goes to `root`
        .route("/", get(root))
        // `POST /users` goes to `create_user`
        .route("/wall", get(get_wall).post(post_wall))
        .nest_service("/-", ServeDir::new("static"));

    // run our app with hyper, listening globally on port 3000
    //let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    Ok(app.into())
    //axum::serve(listener, app).await.unwrap();
}

// basic handler that responds with a static string
async fn root() -> Html<String> {
    println!("GETTING WALL");
    //println!("{:?}");env::temp_dir()
    //Html(fs::read_to_string(ROOT_PATH.to_owned() + r"static\wall.html").unwrap().to_owned())
    //Html(fs::read_to_string(ROOT_PATH.to_owned() + r"static/wall.html").unwrap().to_owned())
    Html(fs::read_to_string(env::temp_dir().join(r"static/wall.html")).unwrap().to_owned())
}
#[axum::debug_handler]
async fn get_wall(
    // this argument tells axum to parse the request body
    // as JSON into a `CreateUser` type
) -> Result<(StatusCode, String), StatusCode> {
    // insert your application logic here
    // this will be converted into a JSON response
    // with a status code of `201 Created`
    if let Some(text) = fs::read_to_string(env::temp_dir().join(r"static/wall.txt")).ok() {
    // if let Some(text) = fs::read_to_string(ROOT_PATH.to_owned() + r"static\wall.txt").ok() {
        //println!("{text} {:?}", Json(text));
        Ok((StatusCode::OK, text))
    } else {
        Err(StatusCode::INTERNAL_SERVER_ERROR)
    }
    
}
#[axum::debug_handler]
async fn post_wall(
    // this argument tells axum to parse the request body
    // as JSON into a `CreateUser` type
    Json(payload): Json<Vec<WallEdit>>
) -> Result<(StatusCode, String), StatusCode> {
    // insert your application logic here
    // this will be converted into a JSON response
    // with a status code of `201 Created`
    println!("{:?}",payload);

    // if let Some(text) = fs::read_to_string(ROOT_PATH.to_owned() + r"static\wall.txt").ok() {
    if let Some(text) = fs::read_to_string(env::temp_dir().join(r"static/wall.txt")).ok() {
        //println!("{text} {:?}", Json(text));

        println!("that worked");
        let mut chars: Vec<_> = text.chars().collect();
        for edit in payload {
            chars[edit.position] = edit.text.chars().next().expect("???");
        }
        let content: String = chars.into_iter().collect();
        // fs::write(ROOT_PATH.to_owned() + r"static\wall.txt", content.as_bytes()).map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;
        fs::write(env::temp_dir().join(r"static/wall.txt"), content.as_bytes()).map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;
        println!("so did that? {}", content.trim());
        Ok((StatusCode::OK, text))
    } else {
        Err(StatusCode::INTERNAL_SERVER_ERROR)
    }
    
}
#[derive(Deserialize, Debug)]
struct WallEdit {
    text: String,
    position: usize
}

#[derive(Deserialize)]
struct SetText {
    position: [i32; 2],
    text: char,
}

// the output to our `create_user` handler
#[derive(Serialize)]
struct User {
    id: u64,
    username: String,
}