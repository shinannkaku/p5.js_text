var stem_length=160;
var branch_deg=10;
var reduced_rate=0.7;
var theta;

let slider; // 樹的角度

function setup() {
    // put setup code here
    createCanvas(800, 600);

    let p = createP('輸入樹枝的角度.');
    p.position(680, 20);
    // Set its default value to 30.
    slider = createSlider(0, 60, 30, 3);
    slider.position(685, 55);
    slider.size(100);

    frameRate(30);
    stroke('rgba(0, 145, 30, 0.5)');
}

function draw() {
  // put drawing code here
  c = color('hsla(160, 100%, 50%, 0.5)');
  background(c);

  let g = slider.value();
  theta = radians(g);
  // Start the tree from the bottom of the screen
  translate(width/2,height);
  // Draw a line 120 pixels
  strokeWeight(stem_length/20);
  line(0,0,0,-stem_length);
  // Move to the end of that line
  translate(0,-stem_length);
  // Start the recursive branching!
  branches(stem_length);
}

function branches(h) {
  // Each branch will be 2/3rds the size of the previous one
  h *= reduced_rate;

  // All recursive functions must have an exit condition!!!!
  // Here, ours is when the length of the branch is 2 pixels or less
  if (h > 2) {
    push();    // Save the current state of transformation (i.e. where are we now)
    rotate(theta);
    strokeWeight(h/20);
    line(0, 0, 0, -h);
    translate(0, -h);
    branches(h);
    pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state

    // Repeat the same thing, only branch off to the "left" this time!
    push();
    rotate(-theta);
    strokeWeight(h/20);
    line(0, 0, 0, -h);
    translate(0, -h);
    branches(h);
    pop();
  }
}