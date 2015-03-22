define(function(require){
	var ionejs = require("ionejs");
	var el = document.getElementById("canvasHolder");
	var canvas = document.createElement("canvas");
	canvas.width =234;
	canvas.height = 300;
	el.appendChild(canvas);

	var stage = new ionejs.Stage();
	ionejs.instance.init(stage, canvas);

	stage.addEventListener("click", function(){
		console.log(1);
	});
});