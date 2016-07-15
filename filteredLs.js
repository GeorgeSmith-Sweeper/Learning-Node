var fs = require('fs');
var path = require("path");

fs.readdir(process.argv[2], function(err, list) {

	for (var i = 0; i < list.length; i++) {
		// if path returns a match for regex .md$, log that value
		if ((path.extname(list[i])).match(/.md$/)) {
			console.log(list[i]);
		}		
	}
});

