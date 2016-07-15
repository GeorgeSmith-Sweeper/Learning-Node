
var sum = 0;
//loop through and add each indexes value
for (var i = 2; i < process.argv.length; i++) {
	sum += Number(process.argv[i]);
}

console.log(sum);
