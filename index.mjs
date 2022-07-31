import * as PIXI from './node_modules/pixi.js/dist/browser/pixi.mjs';

const app = new PIXI.Application ();

document.body.appendChild(app.view);

app.renderer.backgroundColor = 0x000000;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoDensity = true;
app.resizeTo = window;

app.loader.add('sample', 'assets/sample.png').load((loader, resources) => {
    const sample = new PIXI.Sprite(resources.sample.texture);

    // Setup the position of the sample
    sample.x = app.renderer.width / 5;
    sample.y = app.renderer.height / 5;

    // Rotate around the center
    sample.anchor.x = 0.5;
    sample.anchor.y = 0.5;

    // Add the sample to the scene we are building
    app.stage.addChild(sample);

    // Listen for frame updates
    app.ticker.add(() => {
        // each frame we spin the sample around a bit
        sample.rotation += 0.01;
    });
});
