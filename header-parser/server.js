'use strict'; // enable 'strict' mode

var app = server();
var server = require('express')
var routes = require('./app/routes/index.js');

var port = process.env.PORT || 8080; //define port

routes(app);

app.listen(port, function(){
  console.log("App is listening on port: " + port); //log the port in console
});
