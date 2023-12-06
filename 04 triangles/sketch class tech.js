function setup() {
    // put setup code here
    createCanvas(400, 300);
    background(0);
    strokeColor = 'yellow';
    stroke(strokeColor);
    noFill();
    x1 = width/3;
    y1 = height*4/5; //第一個座標
    x2 = width/3*2;
    y2 = height*4/5; //第二個座標 (未構成三角形)
}


function draw() {
    // put drawing code here
    background(0);

    fillcolor = 'yellow'; //
    if (mouseX < (X1+X2)) fillcolor = 'blue';

    if (mouseY < y1) noFill();
    else fill (fillColor);
    
    triangle(x1, y1, x2, y2, mouseX, mouseY);
}