var http = require('http');

http.get(process.argv[2], function(response){
    var collected = '';
    response.on('data',function(data){
        collected += data;
    });
    response.on('end',function(){
        console.log(collected.length);
        console.log(collected);
    })
});
