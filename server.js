const express = require("express");
const path = require("path");

const PORT = 8000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.listen(PORT, () => {});
