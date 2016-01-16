var fs = require('fs'),
    path = require('path');

var listFiles = function(dir, ext, callback){
    fs.readdir(dir, function(err,list){
        if(err){
            return callback(err);
        }
        var mylist = [];
        for(var i=0;i<list.length;i++){
            if(path.extname(list[i]) == '.'+ext){
                mylist.push(list[i]);
            }
        }
        callback(null,mylist);
    });
};

module.exports = listFiles;
