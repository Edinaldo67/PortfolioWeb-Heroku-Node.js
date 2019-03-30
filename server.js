var express = require("express");
var app = express()
  .use(express.static(__dirname + "dist/index.html"))
  .listen(process.env.PORT || 5500);
