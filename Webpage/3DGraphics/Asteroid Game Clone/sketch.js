var spaceship;
var asteroids;
var atmosphereLoc;
var atmosphereSize;
var earthLoc;
var earthSize;
var starLocs = [];
var score;
var level;
var lives;
var cooldownFill;
var overheating;
var heatLimit;
var overHeatThreshold;
var cooldownFillColorRed;
var cooldownFillColorGreen;
var alive;
var explosionGif;
var planet;

//////////////////////////////////////////////////
function setup() {
  createCanvas(1200,800);

  // Initialize score, lives, level, weapon state, and ship state
  score = 0;
  level = 1;
  lives = 3;
  cooldownFill = 0;
  overheating = false;
  heatLimit = width/8;
  overHeatThreshold = heatLimit/4;
  alive = true;

  // Load explosion GIF
  imageMode(CENTER);
  explosionGif = loadImage("Assets/explosion.gif");
  planet = loadImage("Assets/planet.png");
  spaceship = new Spaceship();
  asteroids = new AsteroidSystem();

  //location and size of earth and its atmosphere
  atmosphereLoc = new createVector(width/2, height*2.9);
  atmosphereSize = new createVector(width*3, width*3);
  earthLoc = new createVector(width/2, height*3.1);
  earthSize = new createVector(width*3, width*3);
}

//////////////////////////////////////////////////
function draw() {
  background(0);
  image(planet, width/10 * 8, height/8, 200, 200);
  sky();

  // If alive, draw spaceship
  if (alive) {
    spaceship.run();
  }

  // Toggle asteroids
  asteroids.run();

  // Draw Earth
  drawEarth();

  // Checks collision between various elements
  checkCollisions(spaceship, asteroids);

  // Alter asteroid behaviour if in atmosphere
  enterAtmosphere(asteroids);

  push();
  stroke(0);
  textSize(20);
  textAlign(CENTER);
  fill(0,255,255);
  text("SCORE: " + score, 60, 50);
  text("LEVEL: " + level, 60, 80);
  text("WEAPON COOLDOWN: ", 130, 110);
  pop();

  // Checking weapon is temperate
  if (cooldownFill >= heatLimit) {
    overheating = true;
  }

  // Set weapon to cooldown
  if (overheating == true) {
    overHeating();
  }

  // Draw Weapon Heat bar
  drawCooldown(20, 140, cooldownFill);

  // Passively reduce cooldown
  if (cooldownFill > 0) {
    cooldownFill -= 0.1;
    // Reset cooldown state
    if (overheating == true && cooldownFill < overHeatThreshold) {
      overheating = false;
    }
  }

  // Level Changes
  if (score < 10) {
    level = 1;
    asteroids.changeLevel(1);
  } else if (10 <= score  && score < 30) {
    level = 2;
    asteroids.changeLevel(2);
  } else if (30 <= score && score < 80) {
    level = 3;
    asteroids.changeLevel(3);
  } else if (80 <= score) {
    level = 4;
    asteroids.changeLevel(4);
  }
}

//////////////////////////////////////////////////
//draws earth and atmosphere
function drawEarth(){
  noStroke();
  //draw atmosphere
  fill(0,0,255, 50);
  ellipse(atmosphereLoc.x, atmosphereLoc.y, atmosphereSize.x,  atmosphereSize.y);
  //draw earth
  fill(0,100,255);
  ellipse(earthLoc.x, earthLoc.y, earthSize.x, earthSize.y);
  fill(100,200,100);
  ellipse(earthLoc.x/2, earthLoc.y/2 - earthSize.x/12, earthSize.x/8, earthSize.y/8);
  ellipse(earthLoc.x + earthLoc.x/2, earthLoc.y/2 - earthSize.x/12, earthSize.x/8, earthSize.y/8);
  fill(40,10,20);
  ellipse(earthLoc.x, earthLoc.y/2 - earthSize.x/12, earthSize.x/8, earthSize.y/8);
}

//////////////////////////////////////////////////
//checks collisions between all types of bodies
function checkCollisions(spaceship, asteroids){

    //spaceship-2-asteroid collisions
    //YOUR CODE HERE (2-3 lines approx)
    for (var i = 0; i < asteroids.locations.length; i++) {
      if (isInside(asteroids.locations[i], asteroids.diams[i], spaceship.location, spaceship.size)) {
        image(explosionGif,spaceship.location.x, spaceship.location.y);
        alive = false;
        setTimeout(function(){
          gameOver();
        }, 1000);
      }
    }

    //asteroid-2-earth collisions
    for (var i = 0; i < asteroids.locations.length; i++) {
      if (isInside(earthLoc, earthSize.x, asteroids.locations[i], asteroids.diams[i])) {
        gameOver();
      }
    }

    //spaceship-2-earth
    if (isInside(spaceship.location, spaceship.size, earthLoc, earthSize.x)) {
      image(explosionGif,spaceship.location.x, spaceship.location.y);
      alive = false;
      gameOver();
    }

    //spaceship-2-atmosphere
    if (isInside(spaceship.location, spaceship.size, atmosphereLoc, atmosphereSize.x)) {
      spaceship.setNearEarth();
    }

    //bullet collisions
    for (var i = 0; i < asteroids.locations.length; i++) {
      for (var j = 0; j < spaceship.bulletSys.bullets.length; j++) {
        if (isInside(spaceship.bulletSys.bullets[j], spaceship.bulletSys.diam, asteroids.locations[i], asteroids.diams[i])) {
          asteroids.destroy(i);
          score += 1;
          break;
        }
      }
    }
}

//////////////////////////////////////////////////
//helper function checking if there's collision between object A and object B (size is radius)
function isInside(locA, sizeA, locB, sizeB){
  if (dist(locA.x, locA.y, locB.x, locB.y) < sizeA/2 + sizeB/2) {
    return true;
  }
}

//////////////////////////////////////////////////
function keyPressed(){
  if (keyIsPressed && keyCode === 32 && overheating == false){ // if spacebar is pressed, fire!
    spaceship.fire();
    if (cooldownFill < width/8){
      cooldownFill += 4;
    }
  }
}

//////////////////////////////////////////////////
// function that ends the game by stopping the loops and displaying "Game Over"
function gameOver(){
    fill(255);
    textSize(80);
    textAlign(CENTER);
    fill(255,0,0);
    text("GAME OVER", width/2, height/2)
    noLoop();
}

//////////////////////////////////////////////////
// function that creates a star lit sky
function sky(){
  push();
  while (starLocs.length<300){
    starLocs.push(new createVector(random(width), random(height)));
  }
  fill(255);
  for (var i=0; i<starLocs.length; i++){
    rect(starLocs[i].x, starLocs[i].y,2,2);
  }

  if (random(1)<0.3) starLocs.splice(int(random(starLocs.length)),1);
  pop();
}

function enterAtmosphere(asteroids) {
  for (var i = 0; i < asteroids.locations.length; i++) {
    if (isInside(asteroids.locations[i], asteroids.diams[i], atmosphereLoc, atmosphereSize.x)) {
      asteroids.colors[i] = asteroids.burningColor;
      asteroids.locations[i].add(new createVector(random(-1, 1), 0));
    } else {
      asteroids.colors[i] = asteroids.passiveColor;
    }
  }
}

function drawCooldown(x, y, cooldownFill) {
  // Map fill colors
  cooldownFillColorRed = map(cooldownFill, 20, heatLimit, 0, 255);
  cooldownFillColorGreen = map(cooldownFill, 20, heatLimit, 255, 0);
  push();
  noFill();
  strokeWeight(1);
  stroke(cooldownFillColorRed,0,cooldownFillColorGreen);
  // Draw cooldown bar
  rect(x, y, heatLimit, height/22)
  fill(cooldownFillColorRed,0,cooldownFillColorGreen);
  // Fill cooldown bar
  rect(x, y, cooldownFill, height/22);
  pop();
}

function overHeating() {
  push();
  textAlign(CENTER);
  textSize(30);
  strokeWeight(0);
  fill(255,0,0); 
  text("Weapon overheating!", width/2, height/4);
  pop();

  cooldownFill -= 1;
}