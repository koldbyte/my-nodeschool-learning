var fs = require('fs'),
    http = require('http');

var port = process.argv[2];
var filepath = process.argv[3];

http.createServer(function(req,resp){
    var filestream = fs.createReadStream(filepath, {encoding: 'utf8'});

    filestream.on('data', function(data){
        resp.write(data);
    });

    filestream.on('end',function(){
        resp.end();
    })
}).listen(port);
