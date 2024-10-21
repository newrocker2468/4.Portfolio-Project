const express = require("express");
const path = require("path");
const app = express();

app.get("/download", (req, res) => {
  const file = path.join(__dirname, "docs", "Resume.pdf");
  res.download(file);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
