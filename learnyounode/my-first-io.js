var fs = require('fs');

var countLines = function(filename){
    var data = fs.readFileSync(filename,{encoding: 'utf8'});
    var count = data.split('\n').length -1;
    return count;
}
console.log(countLines(process.argv[2]));
