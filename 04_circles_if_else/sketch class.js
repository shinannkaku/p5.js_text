let toggle = 0;
const toggleColor = 5;

function setup() {
    // put setup code here
    createCanvas(480, 360);
    angleMode(DEGREES);
    colorMode(HSB, 360, 100, 100, 1);
    rectMode(CENTER); //++ //是一個 Processing 程式語言中用來設置矩形定位模式的函式。當你使用這個函式後，矩形的位置參數會改變
    noStroke();
}
function draw() {
    // put drawing code here
    if (mouseIsPressed) {
        fill(toggle*360/toggleColor, 100, 100, 0.1); //0~1的值代表透明度(阿法);一個toggle的值 有5種 將360度等分成5等分;設定亮度等值
        circle(mouseX, mouseY, 30);

    }
}

function mouseClicked() {
    toggle = (toggle+1) % toggleColor;  //toggle+1取toggleColor的餘數
}