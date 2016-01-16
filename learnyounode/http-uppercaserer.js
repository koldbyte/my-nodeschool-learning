var http = require('http');

var port = process.argv[2];

http.createServer(function(req,resp){
    if(req.method == 'POST'){
        req.on('data', function(data){
            resp.write(data.toString().toUpperCase());
        });
        req.on('end', function(){
            resp.end();
        });

    }else{
        resp.end();
    }
}).listen(port);
