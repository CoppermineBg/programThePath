/**
 * Created by Juri on 12.3.2016 ã..
 */

var mapsLibrary = [
	[
		[3,0,0,0],
		[1,1,1,0],
		[2,0,1,0],
		[0,0,0,0]
	]
]

var main;

$(function() {
	main = $("main");
	initLevel(mapsLibrary[0]);
});

function initLevel(map) {
	main.empty();
	main.css({width: "400px"});
	for (var i in map) {
		var row = map[i];
		for (var j in row) {
			main.append(createBlock(row[j]));
		}
	}
}

function createBlock(type)
{
	var block = $(document.createElement("div"));
	switch (type)
	{
		case 1:
			block.addClass("wall");
			break;

		case 2:
			block.addClass("exit");
			break;

		case 3:
			block.addClass("player");
			break;
	}

	return block;
}


