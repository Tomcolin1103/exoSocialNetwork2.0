const express = require("express");
const path = require("path");
const router = require("./routers/router");
const sessions = require("./routers/router.js");

const PORT = 8000;
const app = express();

// app.use(
// 	sessions({
// 		cookieName: "session",
// 		secret: "cléserète",
// 		duration: 3600000, //1h
// 		activeDuration: 3600000,
// 	})
// );

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(router);

app.listen(PORT, () => {});
