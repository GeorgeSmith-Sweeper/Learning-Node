var fs = require('fs');
// output from buffer converted into a string and split by newline chars
var buffList = fs.readFileSync(process.argv[2]).toString().split("\n");

var counter = 0;

for (var i = 1; i < buffList.length; i++) {
	counter++;
};

console.log(counter);
