var x;
var y;
let toggle = 0;
var toggleColor=8;
    
var numEdges = 5; // number of edges
var r = 150; // radius
var d = 180; // start angle 

function setup() {
    // put setup code here
    createCanvas(400, 400);
    angleMode(DEGREES);
    colorMode(HSB, 360, 100, 100, 1);
    x = width*0.5; // x coordinate of the center
    y = height*0.5; // y coordinate of the center
}
function draw() {
    // put drawing code here
    background(255);

    // 設定當前的顏色
    fill(toggle*360/toggleColor, 50, 70, 0.8);
    stroke(toggle*360/toggleColor, 50, 70, 0.8);
    // 以畫布中心為中心旋轉座標系統，(1/toggleColor)圓周
    translate(x, y);
    rotate(toggle*360/toggleColor);

    // 繪製正多邊形，中心點為目前的原點
    beginShape();
    for (i=0; i<=numEdges; i++) {
        sx = r*sin(d);
        sy = r*cos(d);
        vertex(sx, sy);
        d += (360/numEdges);
    }
    endShape();

    stroke('lightskyblue');
    noFill();
    circle(0, 0, 2*r);
}

function mouseClicked() {
    toggle = (toggle+1)%toggleColor;
}