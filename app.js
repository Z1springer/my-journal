const express = require("express");
const mariadb = require("mariadb");

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.set("view engine", "ejs");

//Default Route
app.get("/", (req, res) => {
  console.log("Hello World! Server!");

  res.render("home");
});

app.get("/new-entry", (req, res) => {
  res.render("new-entry");
});

//Connect to Server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
