'use strict'; // enable 'strict' mode

var app = require('express')(); // call express

app.get('/api/whoami', (req, res) => {

  var userinfo = {
    "ipaddress": req.ip, // request user IP Address
    "language": req.headers["accept-language"].split(",")[0], // request user language
    "software": req.headers["user-agent"].split("(")[1].split(")")[0] // request user OS
  };

  console.log(JSON.stringify(userinfo) + "\n");

  res.set('Content-Type', 'application/json');
  res.json(userinfo);
  
});