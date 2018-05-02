var fs = require('fs')

var contents = fs.readFileSync(process.argv[2])
var buf = contents.toString()
var lines = buf.split('\n').length - 1
console.log(lines)