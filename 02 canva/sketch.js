function setup() {
    // put setup code here
    createCanvas(400, 300);
    background(0);

    frameRate(10);
}
function draw() {
    // put drawing code here
    r = random(255);
    g = random(255);
    b = random(255);
    strokeColor = color(r, g, b);
    //x1 = random(0, width/2);
    //y1 = random(height/2, height);
    x1 = width/2;
    y1 = height/2;
    x2 = random(0, width-1);
    y2 = random(0, height-1);
    stroke(strokeColor);
    line(x1, y1, x2, y2);
    //線條粗細
    strokeWeight(random);    
}