function setup() {
    // put setup code here
    createCanvas(400, 400);
    background(0); //黑色
    angleMode(DEGREES);
    noFill(); //畫出來的形狀中不要填顏色
}
function draw() {
    // put drawing code here
    x = width*0.5; // x coordinate of the center //寬
    y = height*0.5; // y coordinate of the center //高
    r = 150; // radius
    d = 180;  // start angle //圓的0度在正下方/180度在正上方(依此類推)
    numEdage = 8;
 
    stroke('yellow'); // draw the pentagon with yellow line //畫筆顏色

    beginShape(); //開始
    
    for(i=0; i <= numEdage; i++)
    {
        sx = x + r*sin(d);
        sy = y + r*cos(d);
        vertex(sx, sy);
        d += (360/numEdage);
    }


    endShape(); //結束

    stroke('lightskyblue');
    circle(x, y, 2*r);
}