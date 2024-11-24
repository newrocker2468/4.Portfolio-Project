const express = require("express");
const path = require("path");
const app = express();


app.get("/", (req, res) => {
  res.send("Nothing to Show ... Yet!")
} );
app.get("/health", (req, res) => {
  res.send("Server is up and running");
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
