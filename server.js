'use strict'; // 'strict' mode

var app = express();
var routes = require('./app/routing/index.js');
var express = require('express');        
    
var port = process.env.PORT || 8080;      

routes(app);

app.listen(port, function() {
    console.log('We are listening on ' + port);
});