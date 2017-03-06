'use strict'; // enable 'strict' mode

module.exports = function(app) {
  app.route('/')
    app.get('/', function(req, res) {
        
        var ipaddr = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        
        var userinfo = {
         'ip-address': req.ipaddr, // request IP Address
         'language': req.headers["accept-language"].split(",")[0], // request user language
         'software': req.headers['user-agent'].split("(")[1].split(")")[0] // request user OS
        };
        
     res.send(userinfo); // send user info
     
    });
}; 