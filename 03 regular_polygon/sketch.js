function setup() {
    // put setup code here
    createCanvas(400, 400);
    background(0);
    angleMode(DEGREES);

    fill(255);
    text("輸入多邊形的邊數.", 280, 345); 

    inputInt = createInput();
    inputInt.position(290, 360);
    inputInt.size(70);

    buttonSubmit = createButton("輸入");
    buttonSubmit.position(360, 360);
    buttonSubmit.mousePressed(drawPolygon);
   

    fill(255);
    text("輸入多邊形的顏色.", 280, 300);

    inputInt = createInput();
    inputInt.position(290, 360);
    inputInt.size(70);

    buttonSubmit = createButton("輸入");
    buttonSubmit.position(360, 310);
    buttonSubmit.mousePressed(drawPolygon);

    stroke('yellow')
    noFill();    
}
function drawPolygon() {
    // put drawing code here
    background(0);

    x = width*0.5;
    y = height*0.5;
    var numEdges = int(inputInt.value());
    var polygoncolor = int(Color.value());
    r = 150;
    d = 180;

    stroke(polygoncolor);

    beginShape();
    for (i=0; i<=numEdges; i++) {
        sx = x + r*sin(d);
        sy = y + r*cos(d);
        vertex(sx, sy);
        d += (360/numEdges);
    }
    endShape();

    stroke(255);
    text("輸入多邊形的邊數.", 280, 345);
    text("輸入多邊形的顏色.", 280, 300);
}