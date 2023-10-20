// Example is based on examples from: http://brm.io/matter-js/, https://github.com/shiffman/p5-matter
// add also Benedict Gross credit

var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Body = Matter.Body;
var Constraint = Matter.Constraint;
var Mouse = Matter.Mouse;
var MouseConstraint = Matter.MouseConstraint;

var engine;
var propeller;
var boxes = [];
var birds = [];
var colors = [];
var ground;
var slingshotBird, slingshotConstraint;
var angle=0;
var angleSpeed=0;
var canvas;
var countdown;
var boxesRemaining;
var redBirdsRemaining;
var orangeBirdsRemaining;
var originalDist;
var superChargerBall;

var AngryBird;
var OrangeBird;
var GoldenCoin;

var collected = false;
var ropeSnapped = false;
var loaded;

var poleImage;
var poleX;
var poleY;

////////////////////////////////////////////////////////////
function setup() {
  canvas = createCanvas(1000, 600);

  engine = Engine.create();  // create an engine

  setupGround();

  setupPropeller();

  setupTower();

  setupSlingshot();

  setUpSpecialBall();

  setupMouseInteraction();

  countdown = 60;

  redBirdsRemaining = 5;

  orangeBirdsRemaining = 5;

  AngryBird = loadImage("Assets/AngryBird.png");

  OrangeBird = loadImage("Assets/OrangeBird.png");

  GoldenCoin = loadImage("Assets/GoldenCoin.png");

  poleImage = loadImage("Assets/pole.png");

  poleX = 260;
  poleY = 210;

}
////////////////////////////////////////////////////////////
function draw() {
  background(0);

  boxesRemaining = boxes.length;

  Engine.update(engine);

  drawGround();

  drawPropeller();

  drawTower();

  drawBirds();

  drawSlingshot();

  drawSpecialBall();

  powerState();

  birdCount();

  timer();

  push();
    strokeWeight(0);
    fill(255);
    text("Countdown: " + countdown, 50, 50);
    text("Boxes remaining: " + boxesRemaining, 50, 80);
    text("Red Birds remaining: " + redBirdsRemaining, 50, 110);
    text("Orange Birds remaining: " + orangeBirdsRemaining, 50, 140);
    // textAlign(CENTER);
    text("Objective: Get all boxes off the screen before timer runs out, with a limited amount of birds. Press R to reload and B to spawn bird pawns. Left and Right arrows activate Propeller.\n" +
         "If you get the SuperCharge ball, you will have a SuperCharge shot! If you stretch the slingshot too far, it will break!", 50, 20);
  pop();

  if (collected) {
    push();
    fill(0, 255, 0);
    textAlign(CENTER);
    text("SUPERCHARGED BIRD (100X MASS)", width/2, 50);
    pop();
  }
}

function timer() {
  if (frameCount % 60 == 0 && countdown > 0 && boxesRemaining > 0) {
    countdown --;
  } else if (countdown > 0 && boxesRemaining == 0) {
    push();
      fill(0, 255, 0);
      strokeWeight(0);
      textSize(20);
      textAlign(CENTER);
      text("You win!", width/2, height/2);
      noLoop();
    pop();
  } else if (countdown == 0 && boxesRemaining > 0) {
    push();
      fill(255, 0, 0);
      strokeWeight(0);
      textSize(20);
      textAlign(CENTER);
      text("GAME OVER", width/2, height/2);
      noLoop();
    pop();
  }
}

////////////////////////////////////////////////////////////
//use arrow keys to control propeller
function keyPressed(){
  if (keyCode == LEFT_ARROW){
    if (angleSpeed < 1){
      angleSpeed += 0.01;
    }
  }
  else if (keyCode == RIGHT_ARROW){
    if (angleSpeed > -1) {
      angleSpeed -= 0.01;
    }
  }
}
////////////////////////////////////////////////////////////
function keyTyped(){
  //if 'b' create a new bird to use with propeller
  if (key==='b'){
    if (orangeBirdsRemaining > 0) {
      setupBird();
      orangeBirdsRemaining--;
    }
  }

  //if 'r' reset the slingshot
  if (key==='r'){
    if (redBirdsRemaining > 0) {
      removeFromWorld(slingshotBird);
      removeFromWorld(slingshotConstraint);
      setupSlingshot();
      collected = false;
      ropeSnapped = false;
      redBirdsRemaining--;
    }
  }
}

//**********************************************************************
//  HELPER FUNCTIONS - DO NOT WRITE BELOW THIS line
//**********************************************************************

//if mouse is released destroy slingshot constraint so that
//slingshot bird can fly off
function mouseReleased(){
  setTimeout(() => {
    slingshotConstraint.bodyB = null;
    slingshotConstraint.pointA = { x: 0, y: 0 };
  }, 100);
  loaded = false;
}

////////////////////////////////////////////////////////////
//tells you if a body is off-screen
function isOffScreen(body){
  var pos = body.position;
  return (pos.y > height || pos.x<0 || pos.x>width);
}
////////////////////////////////////////////////////////////
//removes a body from the physics world
function removeFromWorld(body) {
  World.remove(engine.world, body);
}
////////////////////////////////////////////////////////////
function drawVertices(vertices) {
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
}
////////////////////////////////////////////////////////////
function drawConstraint(constraint) {
  push();
  var offsetA = constraint.pointA;
  var posA = {x:0, y:0};
  if (constraint.bodyA) {
    posA = constraint.bodyA.position;
  }
  var offsetB = constraint.pointB;
  var posB = {x:0, y:0};
  if (constraint.bodyB) {
    posB = constraint.bodyB.position;
  }

  var currentDist = dist(posA.x + offsetA.x, 
    posA.y + offsetA.y, 
    posB.x + offsetB.x, 
    posB.y + offsetB.y);
  
  if (currentDist > originalDist * 3) {
    ropeSnapped = true;
    loaded= false;
    removeFromWorld(constraint);
    Matter.Body.setMass(slingshotBird, slingshotBird.mass*10);
  }
  var filler = color( map(currentDist, 0, originalDist * 3, 0, 255), 
                      map(currentDist, 0, originalDist * 3, 100, 0), 
                      map(currentDist, 0, originalDist * 3, 100, 0));
  strokeWeight(5);
  stroke(filler);
  rope = line(
    posA.x + offsetA.x,
    posA.y + offsetA.y,
    posB.x + offsetB.x,
    posB.y + offsetB.y
  );
  pop();
  
}

function powerState() {
  var birdPos = slingshotBird.position;
  var superChargerPos = superChargerBall.position;

  if (dist(birdPos.x, birdPos.y, superChargerPos.x, superChargerPos.y) <= 20 && !collected) {
    powerUp();
    collected = true;
  }
}

function powerUp() {
  ropeSnapped = false;
  removeFromWorld(slingshotBird);
  removeFromWorld(slingshotConstraint);
  setupSlingshot();
  Matter.Body.setMass(slingshotBird, slingshotBird.mass*100);
}

function birdCount() {
  if (redBirdsRemaining == 0 && loaded == false && orangeBirdsRemaining == 0) {
    push();
    fill(255, 0, 0);
    textSize(20);
    textAlign(CENTER);
    text("You are out of birds!", width/2, height/3);
    pop();
  }
}