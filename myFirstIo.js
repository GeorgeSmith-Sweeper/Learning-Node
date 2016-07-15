var fs = require('fs');

var buffList = fs.readFileSync(process.argv[2]).toString().split("\n");
//console.log(buffList);


var counter = 0;

for (var i = 1; i < buffList.length; i++) {
	counter++
};

console.log(counter);
//console.log(process.argv);