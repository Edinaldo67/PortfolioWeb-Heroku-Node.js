var express = require("express");
var app = express();
var port = process.env.PORT || 5500;
app.get("/", function(req, res) {
  //   res.send("Welcome to NodeJS app on Heroku");
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(port);
