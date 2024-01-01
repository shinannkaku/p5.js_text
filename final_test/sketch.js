let Snowflakes = [];

function setup() {
    // put setup code here
    createCanvas(1200, 650);
    background('black');
    frameRate(1);
    drawChristmasTree();
    creatSnowflakes();
}
      
      function draw() {
        // Optional: you can leave this blank as all drawing is done in setup
        drawMoon();   
        drawChristmasTree();
        drawSnowflakes(); //加入繪製雪花的函式呼叫  
   
      }

      function drawMoon() {
        // 左上角半月形月亮
        fill('yellow');
        ellipse(50, 50, 80, 80); // x座標為50，y座標為50，寬度80，高度80
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

          
        // Change color when the mouse is pressed (or clicked)
          if (mouseIsPressed) {
            fill(random(255),random(255),random(255)); // Change to a different color when the mouse is pressed
          } else {
            fill('#228B22'); // Default green color
          }

          // Draw the green triangle
          triangle(width / 2, height - 80 - 200, width / 2 + 60, height - 80, width / 2 - 60, height - 80);
       
      
      
        // Draw ornaments (circles)
        const numOrnaments = 15; //定義紅圈的數量
        for (let i = 0; i < numOrnaments; i++) {
          const x = random(0, width); //寬度在畫布的範圍內
          const y = random(120, height - 80); //(120:y座標最小值,確保裝飾品不會在樹幹下)
          const radius = random(3, 9); //隨機半徑
          fill(random(255), random(255), random(255)); //圓圈填充色
          noStroke(); //圓圈不要有邊框
          ellipse(x, y, radius * 2); //繪製圓圈
        }
      }

        // Draw snowflakes
        function creatSnowflakes() {
          const numSnowflakes = 20; //定義雪花的數量
          for (let i = 0; i < numSnowflakes; i++) {
            let snowflake = {
              x: random(width),
              y: random(120, height),
              radius: random(10,12),
              speedX: random(-0.5,0.5), //雪花的水平速度
              speedY: random(0.5,1.5) //雪花的垂直速度 
            };
            Snowflakes.push(snowflake);
        }
      }

        function drawSnowflakes() {
          for (let i = 0; i < Snowflakes.length; i++) {
            let snowflake = Snowflakes[i];
            let transparency = 200;
            fill(255 , transparency);
            noStroke();
            
            let x = snowflake.x;
            let y = snowflake.y;
            let radius = snowflake.radius;

            beginShape();
            for (let j = 0; j < 12; j++) { // 五邊形的點數為5
              let angle = TWO_PI * j / 5;
              let sx = x + cos(angle) * radius;
              let sy = y + sin(angle) * radius;
              vertex(sx, sy);
            }
            endShape(CLOSE);
        
            // 移動雪花的位置
            snowflake.x += snowflake.speedX;
            snowflake.y += snowflake.speedY;
        
            // 如果雪花超出畫布，重新放置到畫布上方
            if (snowflake.y > height) {
              Snowflakes.splice(i, 1); // 從陣列中移除超出畫布的雪花
          }
        }
      }
    
     

      
      


      

