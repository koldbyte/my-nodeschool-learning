var net = require('net');
var strftime = require('strftime');

var port = process.argv[2] || '8000';
net.createServer(function(socket){
    var date = new Date();
    var data = strftime('%Y-%m-%d %H:%M');
    socket.end(data + '\n');
}).listen(port);
