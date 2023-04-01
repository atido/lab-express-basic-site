const express = require("express");

const app = express();

app.use(express.static("public"));

app.set("view engine", "hbs");

app.get("/", (request, response, next) => response.render("index", { name: "John" }));
app.get("/about", (request, response, next) => response.render("about"));
app.get("/gallery", (request, response, next) => response.render("gallery"));

app.listen(4200, () => console.log("App listening on port 4200!"));
