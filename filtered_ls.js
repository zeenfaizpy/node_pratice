const fs = require('fs');
const path = require('path');

const dirpath = process.argv[2];
const ext = "." + process.argv[3];

fs.readdir(dirpath, Callback)

function Callback(err, filepaths){
    for(var filepath of filepaths){
        if(path.extname(filepath) == ext){
            console.log(path.basename(filepath))
        }
    }
}
