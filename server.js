// var express = require("express");
// var app = express();
// app.use(express.json());
// app
//   .use(express.static(__dirname + "./dist/index"))
//   .listen(process.env.PORT || 5500);

var express = require("express");
var path = require("path");
var PORT = process.env.PORT || 5500;

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("dist/index"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
