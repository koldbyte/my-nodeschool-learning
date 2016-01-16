function sum(){
    var result = 0;
    for(var i = 2;i < process.argv.length;i++){
        result += Number(process.argv[i]);
    }
    return result;
}

console.log(sum());
