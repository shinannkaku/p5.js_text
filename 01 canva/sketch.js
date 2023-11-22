function setup() {
    // put setup code here
    createCanvas(480, 360);
    background('#ffaaee');
}
function draw() {
    // put drawing code here
    stroke(255);
    s = random(1, 10);
    x = random(0, width);
    y = random(0, height);
    strokeWeight(s);
    PointerEvent(x, y);
}