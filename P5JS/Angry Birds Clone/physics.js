////////////////////////////////////////////////////////////////
function setupGround(){
  ground = Bodies.rectangle(500, 600, 1000, 40, {
    isStatic: true, angle: 0
  });
  World.add(engine.world, [ground]);
}

////////////////////////////////////////////////////////////////
function drawGround(){
  push();
  fill(128);
  drawVertices(ground.vertices);
  pop();
}
////////////////////////////////////////////////////////////////
function setupPropeller(){
  propeller = Bodies.rectangle(150, 480, 200, 15, {isStatic: true, angle: angle});
  World.add(engine.world, [propeller]);
}
////////////////////////////////////////////////////////////////
//updates and draws the propeller
function drawPropeller(){
  push();
    fill(255);
    Body.setAngle(propeller, angle);
    Body.setAngularVelocity(propeller, angleSpeed);
    angle += angleSpeed;
    drawVertices(propeller.vertices);
  pop();
}
////////////////////////////////////////////////////////////////
function setupBird(){
  var bird = Bodies.circle(mouseX, mouseY, 20, {friction: 0,
      restitution: 0.95 });
  Matter.Body.setMass(bird, bird.mass*10);
  World.add(engine.world, [bird]);
  birds.push(bird);
}
////////////////////////////////////////////////////////////////
function drawBirds(){
  push();
    for (var i = 0; i < birds.length; i++) {
      fill(255, 100, 0);
      imageMode(CENTER);
      // image is used instead of draw birds :)
      image(OrangeBird, birds[i].position.x, birds[i].position.y, 50, 50);
      if (isOffScreen(birds[i])) {
        removeFromWorld(birds[i]);
        birds.splice(i, 1);
        i -= 1;
      }
    }
  pop();
}
////////////////////////////////////////////////////////////////
//creates a tower of boxes
function setupTower(){
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 6; j ++) {
      box = Bodies.rectangle(650 + 80*i, (height-60) - 80*j, 80, 80);
      World.add(engine.world, [box]);
      boxes.push(box);
      colors.push(color(0, random(100, 255), 0));
    }
  }
}
////////////////////////////////////////////////////////////////
//draws tower of boxes
function drawTower(){
  push();
    for (var i = 0; i < boxes.length; i++) {
      fill(colors[i]);
      drawVertices(boxes[i].vertices);

      if (isOffScreen(boxes[i])) {
        removeFromWorld(boxes[i]);
        colors.splice(i, 1);
        boxes.splice(i, 1);
        i--;
      }
    }
  pop();
}
////////////////////////////////////////////////////////////////
function setupSlingshot(){
  slingshotBird = Bodies.circle(250, 250, 20, {
    friction: 0, 
    restitution: 0.95
  });
  Matter.Body.setMass(slingshotBird, slingshotBird.mass*10);

  slingshotConstraint = Constraint.create({
    pointA: { x: 250, y: 150},
    bodyB: slingshotBird,
    pointB: {x: 0, y: 0},
    stiffness: 0.01,
    damping: 0.0001
  });

  originalDist = dist(250, 150, slingshotBird.position.x, slingshotBird.position.y);

  World.add(engine.world, [slingshotBird, slingshotConstraint]);

  loaded = true;
}
////////////////////////////////////////////////////////////////
//draws slingshot bird and its constraint
function drawSlingshot(){
  imageMode(CENTER);
  image(poleImage, poleX, poleY, 300, 200);
  push();
    fill(255, 0, 0);
    imageMode(CENTER);
    image(AngryBird, slingshotBird.position.x, slingshotBird.position.y, 80, 80);
    if (!ropeSnapped){
      drawConstraint(slingshotConstraint); 
    }
  pop();
}
/////////////////////////////////////////////////////////////////
function setupMouseInteraction(){
  var mouse = Mouse.create(canvas.elt);
  var mouseParams = {
    mouse: mouse,
    constraint: { stiffness: 0.05 }
  }
  mouseConstraint = MouseConstraint.create(engine, mouseParams);
  mouseConstraint.mouse.pixelRatio = pixelDensity();
  World.add(engine.world, mouseConstraint);
}

function setUpSpecialBall() {
  superChargerBall = Bodies.circle(730, 50, 20, {friction: 0, restitution: 0, isStatic: true});
}

function drawSpecialBall() {
  if (!collected) {
    push();
      // fill(255, 255, 0);
      // drawVertices(superChargerBall.vertices);
      imageMode(CENTER);
      image(GoldenCoin, superChargerBall.position.x, superChargerBall.position.y, 50, 50);
    pop();
  }
}