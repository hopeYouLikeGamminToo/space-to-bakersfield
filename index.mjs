import * as PIXI from './node_modules/pixi.js/dist/browser/pixi.mjs';

const app = new PIXI.Application ();

document.body.appendChild(app.view);

app.renderer.backgroundColor = 0x000000;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoDensity = true;
app.resizeTo = window;