var x;
var y;
var px;
var py;
var easing = 0.05;
function setup() {
    // put setup code here
    createCanvas(480, 480);
    colorMode(HSB, 360, 100, 100, 1);
    x = width/2;
    y = height/2;
    px = width/2;
    py = height/2;
}
function draw() {
    // put drawing code here
    var weight;
    
    x += (mouseX - x) * easing;
    y += (mouseY - y) * easing;
    
    weight = dist(x, y, px, py)*3;
    strokeWeight(weight);
    if (mouseIsPressed) {
        if (mouseButton == LEFT) {
            stroke(255, 100, 100, 0.1);
            line(x, y, px, py);    
        }
        if (mouseButton == RIGHT) {
            background(255);
        }
    }
    py = y;
    px = x;
}