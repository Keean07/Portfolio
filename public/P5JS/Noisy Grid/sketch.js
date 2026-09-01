var stepSize = 20;
var green, red, purple, blue, cyan;
var gridStep = 25 * stepSize;
var colorOffset, rotationOffset;
var frames;

function setup() {
  createCanvas(500, 500);
  green = color(0,255,0);
  red = color(255,0,0);
  purple = color(255, 0, 255);
  blue = color(0, 0, 255);
  cyan = color(0, 255, 255);
}
///////////////////////////////////////////////////////////////////////
function draw() {
  background(125);
  frameRate(60);
  colorGrid();
  compassGrid();
}
///////////////////////////////////////////////////////////////////////
function colorGrid(){
  // your code here
  for (var x = 0; x < gridStep; x += stepSize) {
    for (var y = 0; y < gridStep; y += stepSize) {
      var colorChange = map(mouseX, 0, width, 0, 600);
      frames = frameCount/colorChange;
      var noise3D = noise(x/1000, y/1000, frames);
      var col1 = lerpColor(green, red, noise3D);
      fill(col1);
      stroke(0);
      strokeWeight(0); // Change strokeWeight to 1 to display grid
      rect(x, y, 25, 25);
    }
  }
}
///////////////////////////////////////////////////////////////////////
function compassGrid(){
  // // your code here
  for (var x = 0; x < gridStep; x += stepSize){
    for (var y = 0; y < gridStep; y += stepSize) {
      var rotationChange = map(mouseX, 0, 500, 600, 1500);
      frames = frameCount/rotationChange;
      var noise3D = noise(x/5000, y/5000, frames/2);
      var thickNoise = noise(x/100, y/100, frames)
      var lengthNoise = noise(x/1000, y/1000, frames);
      var angle = map(noise3D, 0, 1, 0, 720);
      var thickness = map(thickNoise, 0, 1, 1, 8);
      var lineLength = map(lengthNoise, 0, 1, 0.3, 1.5);
      var color3D = noise(x/100, y/100, frames);
      var lineColor = lerpColor(purple, cyan, color3D);

      push();
        translate(x + 10, y + 10);
        rotate(angle/2);
        scale(lineLength);
        stroke(lineColor);
        strokeWeight(thickness);
        line(0, 0, 0, 20);

        fill(lineColor);
        stroke(0);
        strokeWeight(1);
        ellipse(0, 20, 6 * lineLength);
      pop();
    }
  }
}
