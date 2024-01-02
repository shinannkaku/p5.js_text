let Snowflakes = [];
let Ornaments = [];
let numOrnaments = 30;
let numSnowflakes = 50;
var radius = 30;

function setup() {
    // put setup code here
    createCanvas(1200, 650);
    colorMode(HSB);//顏色定義:色相（Hue）、飽和度（Saturation）和亮度（Brightness） 創建漸變色彩效果 cf. colorMode(RGB);
    drawChristmasTree();
    createOrnaments(); //直接在setup中生成裝飾品和雪花
    creatSnowflakes();
}
      
function draw() {
    // Optional: you can leave this blank as all drawing is done in setup
    background('black');
    drawMoon(); 
    drawChristmasTree();
    drawOrnaments();
    drawSnowflakes(); //加入繪製雪花的函式呼叫     
}

function drawMoon() {
    var d;
    var x = width/2;
    var y = height/2; //宣告圓圈的中心座標:畫布水平中央和垂直中央
         
    d = dist(mouseX, mouseY, x, y); //dist()函式計算滑鼠游標位置和圓圈中心的距離
    if (d < radius) //滑鼠游標是否在圓圈內部
      {
          radius--;
          hueValue = 240 - (1-d/radius)*50; //依據新的半徑計算出新的色相值hueValue
          if (hueValue<0) hueValue = 0;
          fill(hueValue, 75, 95); //飽和度 //亮度 //函式以hueValue&飽和度和亮度繪製圓圈
      }
      else { //滑鼠在圓圈外部
              radius++;
              hueValue = 0 + (1-radius/d)*50;
              if (hueValue>240) hueValue = 240;
              fill(hueValue, 75, 95);
    }
    circle(x, y, radius);
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
    triangle(width / 2, triangleTop, width / 2 + 80, height - 80, width / 2 - 80, height - 80);
    /*(x1,y1):三角形頂點 x在畫布的中心 y是計算得到的等腰三角形頂點的y座標
    (x2,y2): 右下 x在畫布中心向右偏移60像素 y於畫布底部80像素
    (x3,y3): 左下 x在畫布的中心像左偏移60像素 y於畫布底部80像素*/

          
    // Change color when the mouse is pressed (or clicked)
    if (mouseIsPressed) 
    {
      fill(random(255),random(255),random(255)); 
    } else {
            fill('#228B22'); // Default green color
           }

    // Draw the green triangle
      triangle(width / 2, height - 80 - 200, width / 2 + 80, height - 80, width / 2 - 80, height - 80);
  } 

// Draw ornaments 
function createOrnaments() {
    for (let i = 0; i < numOrnaments; i++) {
      const x = random(0, width); //寬度在畫布的範圍內隨機生成X座標
      const y = random(120, height - 80); //(120:y座標最小值,確保裝飾品不會在樹幹下)
      const radius = random(3, 6); //隨機半徑
      Ornaments.push({x, y, radius});
    }
  }

// Draw snowflakes
function creatSnowflakes() {
    for (let i = 0; i < numSnowflakes; i++) {
      let snowflake = {
      x: random(width),
      y: random(120, height), //120:避免雪花出現在畫布的頂部
      radius: random(14,16),
      speedX: random(-0.5,0.5), //雪花的水平速度
      speedY: random(0.5,1.5) //雪花的垂直速度 
      };
        Snowflakes.push(snowflake); //將物件放入陣列中
    }
  }


function drawOrnaments() {
    for (let i = 0; i < Ornaments.length; i++) {
      let ornament = Ornaments[i];
      fill(random(255),random(255),random(255));
      noStroke();
      ellipse(ornament.x, ornament.y, ornament.radius * 2);
      /*ornament.x & ornament.y 是裝飾品的中心座標
        ornament.radius * 2 是裝飾品的直徑
        ellipse()函式繪製橢圓形的裝飾品*/
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
        for (let j = 0; j < 12; j++) { // 五邊形的點數為5 for迴圈用來創建多邊形的各個頂點
          let angle = TWO_PI * j / 12; //計算每個頂點的角度 TWO_PI:360度(將其分成了12份 每份為30度)
          let sx = x + cos(angle) * radius; //計算每個頂點的X座標 利用三角函數 
          let sy = y + sin(angle) * radius;
          vertex(sx, sy); //將每個頂點的座標傳遞到beginShape()中 用來定義多邊形的各個頂點
          }
          endShape(CLOSE); //連接第一個頂點和最後一個:形成封閉的多邊形
        
          // 移動雪花的位置(用來更新雪花的位置)
          snowflake.x += snowflake.speedX;
          snowflake.y += snowflake.speedY; 
        
          // 如果雪花超出畫布，重新放置到畫布上方
          if (snowflake.y > height) {
            Snowflakes.splice(i, 1); // 從陣列中移除超出畫布的雪花

            //重新設置雪花位置到畫布上方，隨機水平位置
            snowflake.y = random(-50, 0); //重新設置在畫布上方的位置
            snowflake.x = random(width); //隨機水平位置
          }
        }
      }
    
     

      
      


      

