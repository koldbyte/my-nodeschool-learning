var listFiles = require('./list-directory-module');

var dir = process.argv[2];
var ext = process.argv[3];

listFiles(dir, ext, function(err, data){
    if(err)
        console.log(err);
    else{
        for(var i=0;i<data.length;i++)
            console.log(data[i]);
    }
});
