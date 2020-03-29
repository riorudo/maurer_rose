/* export SVG
DDF 2019
need to have p5.svg.js in project and in index.html
see -https://github.com/zenozeng/p5.js-svg
this will save an SVG file in your download folder
*/
// Maurer Rose
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingInTheCabana/002-collatz-conjecture.html
// https://youtu.be/4uU9lZ-HSqA
// https://editor.p5js.org/codingtrain/sketches/qa7RiptE9

// Adapted by riorudo

let n = 0;
let d = 0;
let rColor = 255;
let gColor = 255;
let bColor = 255;
let nSlider;
let dSlider;
let canvasWidth = 800;
let canvasHeight = 800;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    angleMode(DEGREES);
    nSlider = createSlider(1, 259, 3, 1);
    nSlider.position(5, 810);
    dSlider = createSlider(1, 180, 1, 1);
    dSlider.position(410, 810);
    nSlider.style('width', (canvasWidth / 2) - 10 + 'px');
    dSlider.style('width', (canvasWidth / 2) - 10 + 'px');
}

function draw() {
    background(0);
    n = nSlider.value();
    d = dSlider.value();
    noFill();
    beginShape();
    strokeWeight(1);
    stroke(rColor, gColor, bColor);
    text('Doubble click on image to export SVG', 10, 35);
    for (let i = 0; i < 361; i++) {
        let k = i * d;
        let r = (canvasWidth / 2.5) * sin(n * k);
        let x = r * cos(k);
        let y = r * sin(k);
        vertex(x + (width / 2), y + (height / 2));
    }
    endShape();
    textSize(32);
    text('n: ' + n + '', 10, canvasHeight - 25);
    text('d: ' + d + '', 410, canvasHeight - 25);


    // Blue Mauter Rose
    noFill();
    stroke(0, 0, 255);
    beginShape();
    strokeWeight(2);
    for (let j = 0; j < 361; j++) {
        let k = j;
        let r = (canvasWidth / 2.5) * sin(n * k);
        let x = r * cos(k);
        let y = r * sin(k);
        vertex(x + (width / 2), y + (height / 2));
    }
    endShape();
}

function doubleClicked() {
    if (mouseX > canvasWidth || mouseY > canvasHeight) {
        return;
    }
    const pg = createGraphics(canvasWidth, canvasHeight, SVG);
    pg.angleMode(DEGREES);
    pg.background(0);
    pg.stroke(rColor, gColor, bColor);
    n = nSlider.value();
    d = dSlider.value();
    pg.noFill();
    pg.beginShape();
    pg.strokeWeight(1);
    for (let i = 0; i < 361; i++) {
        let k = i * d;
        let r = (canvasWidth / 2.5) * sin(n * k);
        let x = r * cos(k);
        let y = r * sin(k);
        pg.vertex(x + (width / 2), y + (height / 2));
    }
    pg.endShape();
    pg.noFill();
    pg.stroke(0, 0, 255);
    pg.beginShape();
    pg.strokeWeight(2);
    for (let j = 0; j < 361; j++) {
        let k = j;
        let r = (canvasWidth / 2.5) * sin(n * k);
        let x = r * cos(k);
        let y = r * sin(k);
        pg.vertex(x + (width / 2), y + (height / 2));
    }
    pg.endShape();
    pg.save("maurer_rose_n_" + n + "_d_" + d + ".svg");
    pg.remove();
}
