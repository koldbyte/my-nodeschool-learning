var http = require('http');

var urls = [];
for(var i=0;i<3;i++){
    urls.push(process.argv[2+i]);
}

var printHttp = function(index){
    if(index < urls.length){
        http.get(urls[index], function(response){
            var collected = '';
            response.on('data', function(data){
                collected += data.toString();
            });

            response.on('end', function(){
                console.log(collected);
                printHttp(index+1);
            })
        })
    }
};

printHttp(0);
