'use strict'; // 'strict' mode

module.exports = function(app) {
  app.get('/', (req, res) => {
      var ipaddr = req.headers['x-forwarded-for'] || 
    
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress ||
     req.connection.remoteAddress;
     
     var userinfo = {
         "software": req.headers["user-agent"].split("(")[1].split(")")[0],
         'ip-address': ipaddr,
         "language": req.headers["accept-language"].split(",")[0]
     };
     
     console.log(JSON.stringify(userinfo) + "\n");

     res.set('Content-Type', 'application/json');
     res.send(userinfo);
    });
}; 