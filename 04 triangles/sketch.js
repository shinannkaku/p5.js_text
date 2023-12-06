function setup() {
    // put setup code here
    createCanvas(400, 300);
    background(0);
    strokeColor = 'yellow';
    stroke(strokeColor);
    noFill();
    x1 = random(0, width-1);
    y1 = random(0, height-1); //第一個座標
    x2 = random(0, width-1);
    y2 = random(0, height-1); //第二個座標 (未構成三角形)
}



function draw() {
    // put drawing code here
    background(0);
    triangle(x1, y1, x2, y2, mouseX, mouseY);
}