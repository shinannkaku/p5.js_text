function setup() {
    // put setup code here
    createCanvas(1200, 650);
    background('black');
    drawChristmasTree();
}
      
      function draw() {
        // Optional: you can leave this blank as all drawing is done in setup
        drawline();
        //drawSnow(); //呼叫繪製雪花的函數
      }
      
      function drawChristmasTree() {
        // Draw trunk
        fill('#8B4513');
        rect(width / 2 - 20, height - 80, 40, 80); //rect矩形(矩形X座標，矩形Y座標，矩形寬，矩形高)
      
        // Draw tree
        fill('#228B22');
        const triangleHeight = 200; // Define the height of the triangle 200像素
        const triangleTop = height - 80 - triangleHeight; 
        // Calculate the top point of the triangle/ 80:三角形底邊距離畫布底部80個像素
        triangle(width / 2, triangleTop, width / 2 + 60, height - 80, width / 2 - 60, height - 80);
        /*(x1,y1):三角形頂點 x在畫布的中心 y是計算得到的等腰三角形頂點的y座標
        (x2,y2): 右下 x在畫布中心向右偏移60像素 y於畫布底部80像素
        (x3,y3): 左下 x在畫布的中心像左偏移60像素 y於畫布底部80像素*/

        // Draw ornaments (circles)
        const numOrnaments = 50; //定義紅圈的數量
        for (let i = 0; i < numOrnaments; i++) {
          const x = random(0, width); //寬度在畫布的範圍內
          const y = random(120, height - 80); //(120:y座標最小值,確保裝飾品不會在樹幹下)
          const radius = random(3, 9); //隨機半徑
          fill(random(255), random(255), random(255)); //圓圈填充色
          noStroke(); //圓圈不要有邊框
          ellipse(x, y, radius * 2); //繪製圓圈
        }
      

        // Draw Circles(snow)
        const numCircles = 30; //定義白圈(雪)的數量
        for (let i = 0; i < numCircles; i++) {
          const x = random (0, width); //寬度在畫布的範圍內
          const y = random(120, height);
          const radius = random(10, 12);
          fill('white');
          stroke('white');
          ellipse(x, y, radius * 2);
        }
      }
     

      function drawline() { 
        r = random(255); 
        g = random(255);
        b = random(255);
        strokeColor = color(r, g, b);  //rgb隨機的顏色
        //x1 = random(0, width/2);
        //y1 = random(height/2, height);
        x1 = width/5; //固定起點X座標
        y1 = height/5; //固定起點Y座標
        x2 = random(0, width-1); //終點X座標(width-1:畫布最右邊的點/畫布的寬:0~widht-1)
        y2 = random(0, height-1); //終點Y座標(height-1:畫布最下方的點/height:超出畫布的範圍)
        stroke(strokeColor); //line55
        line(x1, y1, x2, y2); //線條起點+終點座標
        strokeWeight(random);  //線條粗細  
      }

