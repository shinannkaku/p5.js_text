var granularity;

function setup() {
    // put setup code here
    createCanvas(400, 400);
    rectMode(CENTER);
    fill('rgba(100, 255, 255, 10)');
    stroke('rgb(250, 100, 100)');
    max_depth = 5;
    granularity = width/(4*max_depth);
}

function draw() {
    // put drawing code here
    background(255);
    len = width/2;
    drawSquare(width/2, height/2, len, granularity);
}

function drawSquare(x, y, len){
    square(x, y, len);
    if (len > granularity) {
        drawSquare(x, y-len/2, len/2);
        drawSquare(x+len/2, y, len/2);
        drawSquare(x, y+len/2, len/2);
        drawSquare(x-len/2, y, len/2);
    }
}