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

    if (mouseY < y1) noFill(); //低於→小於  //如果滑鼠拉的第三個角的Y小於設定的兩角 圖形會填滿
    else if (mouseX <(X1+X2)/2) fill("yellow");  //如果滑鼠拉的第三個角的X在設定的兩角的X中間 圖形會填滿黃色
    else fill ("blue"); //字串要加引號  //否則就藍色
    
    triangle(x1, y1, x2, y2, mouseX, mouseY);
}