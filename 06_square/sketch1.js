var granularity;

function setup() {
    // put setup code here
    createCanvas(400, 400);
    rectMode(CENTER);
    fill('rgba(100, 255, 255, 10)');
    stroke('rgb(250, 100, 100)');
    max_depth = 5;
    granularity = width/(4*max_depth);

    let p1 = createP('輸入正方形的層數.');
    p1.position(480, 20);

    // Set its default value to 30.
    slider = createSlider(1, 5, max_depth, 1);
    slider.position(485, 55);
    slider.size(100);
    slider.input(recursiveSquare);
    recursiveSquare();
}

function recursiveSquare() {
    background(255);
    granularity = width/(4*slider.value());
    drawSquare(width/2, height/2, width/2);
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
