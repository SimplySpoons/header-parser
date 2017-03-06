// 'use strict'; // enable 'strict' mode

// var app = require('express')(); // call express

// app.get('/api/whoami', (req, res) => {

//   var userinfo = {
//     "ipaddress": req.ip, // request user IP Address
//     "language": req.headers["accept-language"].split(",")[0], // request user language
//     "software": req.headers["user-agent"].split("(")[1].split(")")[0] // request user OS
//   };

//   console.log(JSON.stringify(userinfo) + "\n");

//   res.set('Content-Type', 'application/json');
//   res.json(userinfo);
  
// });

var server = require('express');
var app = server();
var useragent = require('useragent');

var port = process.env.PORT || 3500;

app.listen(port, function(){
  console.log("App is listening on port: " + port);
});

app.get('/', function(req, res) {
  var agent = useragent.parse(req.headers['user-agent']);

  var ipAddr = req.headers["x-forwarded-for"];
  if (ipAddr){
    var list = ipAddr.split(",");
    ipAddr = list[list.length-1];
  } else {
    ipAddr = req.connection.remoteAddress;
  }

  res.json({
    ip: ipAddr,
    "language": req.headers['accept-language'].split(',')[0],
    OS: agent.os.family
  });
});