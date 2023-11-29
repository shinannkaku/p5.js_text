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
    step = 360/6; // increasing angle //斜線後方放入頂點數(X邊形)
 
    stroke('yellow'); // draw the pentagon with yellow line //畫筆顏色

    beginShape(); //開始
    

    sx = x + r*sin(d);
    sy = y + r*cos(d);
    d += step; //72度
    vertex(sx, sy);
  
    sx = x + r*sin(d);
    sy = y + r*cos(d);
    d += step;
    vertex(sx, sy);
  
    sx = x + r*sin(d);
    sy = y + r*cos(d);
    d += step;
    vertex(sx, sy);

    sx = x + r*sin(d);
    sy = y + r*cos(d);
    d += step;
    vertex(sx, sy);
    
    sx = x + r*sin(d);
    sy = y + r*cos(d);
    d += step;
    vertex(sx, sy);

    sx = x + r*sin(d);
    sy = y + r*cos(d);
    d += step;
    vertex(sx, sy);

    sx = x + r*sin(d);
    sy = y + r*cos(d);
    d += step;
    vertex(sx, sy); //有幾邊形就要有幾個公式:可以用迴圈來做

    endShape(); //結束

    stroke('lightskyblue');
    circle(x, y, 2*r);
}