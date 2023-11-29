function setup() {
    // put setup code here
    createCanvas(400, 400);
    background(0);
    angleMode(DEGREES);

    fill(255);
    text("輸入多邊形的邊數.", 280, 345); 

    edgeInput = createInput();
    edgeInput.position(290, 360);
    edgeInput.size(70);

    edgebutton = createButton("輸入");
    edgebutton.position(360, 360);
    edgebutton.mousePressed(setEdges);
   

    fill(200);
    text("輸入多邊形的顏色.", 280, 300);

    colorInput = createInput();
    colorInput.position(290, 320);
    colorInput.size(70);

    colorbutton = createButton("輸入");
    colorbutton.position(360, 310);
    colorbutton.mousePressed(setcolor);

    stroke('yellow')
    noFill();    
}
function setEdges() {
    // put drawing code here
    background(0);

    x = width*0.5;
    y = height*0.5;
    var numEdges = int(inputInt.value());
    var setcolor = int(Color.value());
    r = 150;
    d = 180;

    stroke(setcolor);

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