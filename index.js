//import * as PIXI from "pixi/pixi.min.js";
const PIXI = require("pixi.js");

const app = new PIXI.Application ({
	width: 800,
	height: 600,
	antialias: true,
	transparent: false,
	resolution: 1,
});

document.body.appendChild(app.view);

app.renderer.backgroundColor = 0x000000;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoDensity = true;
app.resizeTo = window;

PIXI.Loader.shared
	.add("images/sample.png")
	.load(setup);

    function setup() {
    	const sample = new PIXI.Sprite(
    	    PIXI.Loader.shared.resources["images/sample.png"].texture
    	);
    	app.stage.appChild(sample);
    }
