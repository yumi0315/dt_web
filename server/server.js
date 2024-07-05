const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "responsive")));

app.listen(8080, function () {
  console.log("8080포트에서 서버 실행 중");
});

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "index.html");
// });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "responsive", "index.html"));
});

app.get("/todos", (req, res) => {
  res.send("<h3>git...</h3><br><h3>...</h3>");
});
