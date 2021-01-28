const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send(`Hello World! port ==> ${port}`);
});

app.get("/somedata", (req, res) => {
  res.status(200).json({ error: "message", qty: 3, who: ["aa", "bb", 3] });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
