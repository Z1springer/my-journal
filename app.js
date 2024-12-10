const express = require("express");
const mariadb = require("mariadb");

require("dotenv").config();

// const PORT = 3000;

const app = express();

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function connect() {
  try {
    const conn = await pool.getConnection();
    console.log("Connected to DB");
    return conn;
  } catch (err) {
    console.log("Error connecting to DB: " + err);
  }
}

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

app.post("/new-entry", async (req, res) => {
  const data = req.body;

  let isValid = true;
  let errors = [];

  if (data.name.trim() === "") {
    isValid = false;
    errors.push("Please Enter Your Name");
  }

  if (data.feeling === "none") {
    isValid = false;
    errors.push("Please Select Your Current Feeling");
  }

  if (data.newEntry === "") {
    isValid = false;
    errors.push("Please do not leave the Entry blank");
  }

  if (!isValid) {
    res.render("new-entry", { data: data, errors: errors });
  }

  const conn = await connect();

  conn.query(`
    INSERT INTO entrys (
        name,
        feeling,
        newEntry
    ) VALUES (
        '${data.name}',
        '${data.feeling}',
        '${data.newEntry}'
    );`);

  res.render("entry-confirm", { details: data });
});

app.get("/entry-confirm", (req, res) => {
  const data = req.body;

  res.render("entry-confirm", { details: data });
});

app.get("/prev-entries", async (req, res) => {
  const conn = await connect();

  const rows = await conn.query(`SELECT * FROM entrys;`);

  res.render("prev-entries", { data: rows });
});

//Connect to Server
app.listen(process.env.APP_PORT, () => {
  console.log(
    `Server running on port http://localhost:${process.env.APP_PORT}`
  );
});
