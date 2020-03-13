// Maurer Rose
// The Coding Train
// https://youtu.be/4uU9lZ-HSqA
// https://en.wikipedia.org/wiki/Maurer_rose

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
    nSlider = createSlider(1,180,1);
    dSlider = createSlider(1,180,1);
    nSlider.style('width', (canvasWidth / 2) + 'px');
    dSlider.style('width', (canvasWidth / 2) + 'px');
}

function draw() {
    background(0);
    stroke(rColor, gColor, bColor);
    n = nSlider.value();
    d = dSlider.value();
    noFill();
    beginShape();
    strokeWeight(1);
    for (let i = 0; i < 361; i++) {
        let k = i * d;
        let r = (canvasWidth / 2.5) * sin(n * k);
        let x = r * cos(k);
        let y = r * sin(k);
        vertex(x + (width / 2), y + (height / 2));
    }
    endShape();
    textSize(32);
    text('n: '+ n +'', 10, canvasHeight - 50);
    text('d: '+ d +'', 410, canvasHeight - 50);
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
    pg.save("maurer_rose_n_" + n + "_d_" + d +".svg");
    pg.remove();
}
