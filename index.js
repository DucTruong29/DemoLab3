var http = require('http');

http.createServer(function (reg, res){
    res.end('Xin chao moi nguoi');
}).listen(process.env.PORT || 3000);