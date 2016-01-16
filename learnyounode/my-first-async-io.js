var fs = require('fs');

var countLinesAsync = fs.readFile(process.argv[2], {encoding: 'utf8'}, function(err,data){
        var count = data.split('\n').length - 1;
        console.log(count);
});
