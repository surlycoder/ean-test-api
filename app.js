var express = require("express");
var app = express();

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

var routes = require("./routes/routes.js")(app);
   
var server = app.listen(3000, () => {
    console.log("Listening on port %s...", server.address().port);
});