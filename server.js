var express = require("express");
var bodyParser = require("body-parser");
var methodoverride = require("method-override");
var expshndlbrs = require("express");
var routes = require("./controllers/burgers_controller.js")

var PORT = process.env.JAWSDB_URL || 8080;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodoverride("_method"));

app.engine("handlebars", expshndlbrs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use("/", routes);

app.listen(PORT, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });