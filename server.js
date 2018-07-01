// DEPENDENCIES -----------------------
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//-------------------------------------

//EXPRESS CONFIG -------------------------------------

//creating express server
var app = express;

//sets up port for listener
var PORT = process.env.PORT || 8080;

//allows Express to handle data parsing as middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
//----------------------------------------------------

//ROUTER ---------------------
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})