"use strict";

var express =require("express");
var routes = require("./app/routes/index.js");

var app = express();

routes(app);

app.listen(process.env["PORT"]);
console.log("server is running on "+process.env["PORT"]);