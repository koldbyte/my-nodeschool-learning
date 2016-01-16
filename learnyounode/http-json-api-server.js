var http = require('http');
var querystring = require('querystring');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function(request, response){
    if(request.method == 'GET'){
        var querydata =  querystring.parse(url.parse(request.url).query);
        var pathname = url.parse(request.url).pathname;
        var date = new Date(Date.parse(querydata.iso));

        console.log('Date- ', date);
        if(pathname == '/api/parsetime'){
            var ret = {
                "hour": date.getHours(),
                "minute": date.getMinutes(),
                "second": date.getSeconds()
            };
            response.write(JSON.stringify(ret));
        }else if(pathname == '/api/unixtime'){
            var ret = { "unixtime" : date.getTime()};
            response.write(JSON.stringify(ret));
        }
        response.end();
    }
}).listen(port);

