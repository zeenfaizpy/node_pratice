var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, 'utf8', function (err, contents) {
    var lines = contents.split('\n').length - 1
    console.log(lines)
})