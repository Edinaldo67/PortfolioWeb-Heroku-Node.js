var express = require("express");
var app = express();
app.use(express.json());
app
  .use(express.static(__dirname + "./dist/index"))
  .listen(process.env.PORT || 5500);
