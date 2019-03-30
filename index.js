var port = process.env.PORT || 5500;
var express = require("express");
var app = express();

var http = require("http");
var server = http.Server(app);

app.use(express.static("dist"));

server.listen(port);
