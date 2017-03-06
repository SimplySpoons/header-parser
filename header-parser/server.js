'use strict'; // enable 'strict' mode

var server = require('express');
var app = server();
var routes = require('./app/routing/index.js');

var port = process.env.PORT || 8080; //define port

app.listen(port, function(){
  console.log("App is listening on port: " + port); //log the port in console
});
