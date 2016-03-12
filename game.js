/**
 * Created by Juri on 12.3.2016 ã..
 */

var mapsLibrary = [
	[
		[3,0,0,0],
		[1,1,1,0],
		[2,0,1,0],
		[0,0,0,0]
	],
	[
		[3,0,0,0,0],
		[1,1,1,0,0],
		[2,0,1,0,0],
		[0,0,0,0,0]
	]
]

var main;
var path;

const boxWidth = 80;
const boxMargin = 5;
const boxBorder = 1;

$(function() {
	main = $("main");
	path = $("nav.path");
	$("nav.controls").click(buttonPressed);
	initLevel(mapsLibrary[0]);
});

function initLevel(map) {
	main.empty();
	path.empty();
	var rowElements = map[0].length;
	var containerWidth = rowElements * (boxWidth + 2*boxBorder + 2*boxMargin);
	main.css({width: containerWidth + "px"});
	for (var i in map) {
		var row = map[i];
		for (var j in row) {
			main.append(createBlock(row[j]));
		}
	}
}

function createBlock(type) {
	var block = $(document.createElement("div"));
	switch (type) {
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

function buttonPressed(e) {
	var btn = $(e.target);
	var action = btn.data("action");
	var step = createPathStep(action);
	path.append(step);
}

function createPathStep(type) {
	var step = $(document.createElement("i"));
	step.data("action", type);

	switch (type) {
		case "left":
			step.addClass("fa fa-chevron-circle-left");
			break;

		case "up":
			step.addClass("fa fa-chevron-circle-up");
			break;

		case "down":
			step.addClass("fa fa-chevron-circle-down");
			break;

		case "right":
			step.addClass("fa fa-chevron-circle-right");
			break;

		case "go":
			step.addClass("fa fa-play-circle");
			$("nav.controls").off("click");
			tracePath();
			break;
	}

	return step;
}

function tracePath() {
	path.children().each(function(idx, step) {
		var move = $(step).data("action");
		console.log(move)
	});
}


