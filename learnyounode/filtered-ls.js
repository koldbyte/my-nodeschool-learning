var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

var files = fs.readdir(dir, function(err,list){
    for(var i=0;i<list.length;i++){
        var extname = path.extname(list[i]);
        if(extname == '.'+ext){
            console.log(list[i]);
        }
    }
});
