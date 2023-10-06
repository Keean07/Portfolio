class Spaceship {

  constructor(){
    this.velocity = new createVector(0, 0);
    this.location = new createVector(width/2, height/2);
    this.acceleration = new createVector(0, 0);
    this.maxVelocity = 5;
    this.bulletSys = new BulletSystem();
    this.size = 50;
    this.passiveThrust = color(125, 125, 125, 0);
    this.activeThrust = color(255, 0, 0);
    this.forwardCol = this.passiveThrust;
    this.backCol = this.passiveThrust;
    this.rightCol = this.passiveThrust;
    this.leftCol = this.passiveThrust;
  }

  run(){
    this.bulletSys.run();
    this.draw();
    this.move();
    this.edges();
    this.interaction();
  }

  draw() {
    push();
    fill(0, 255, 0);
    // Ship Body
    triangle(this.location.x - this.size/2, this.location.y + this.size/2,
        this.location.x + this.size/2, this.location.y + this.size/2,
        this.location.x, this.location.y - this.size/2);
    
    // Pilot Window
    push();
    fill(125);
    stroke(0);
    strokeWeight(2);
    triangle(this.location.x - this.size/4, this.location.y,
        this.location.x + this.size/4, this.location.y,
        this.location.x, this.location.y - this.size/2);
    pop();
    
    // Bottom left thruster
    fill(this.forwardCol);
    triangle(this.location.x - this.size/3, this.location.y + this.size/2, 
    this.location.x - this.size/3 - this.size/6, this.location.y + this.size,
    this.location.x - this.size/3 + this.size/6 , this.location.y + this.size)
    // Bottom right thruster
    fill(this.forwardCol);
    triangle(this.location.x + this.size/3, this.location.y + this.size/2, 
    this.location.x + this.size/3 - this.size/6, this.location.y + this.size,
    this.location.x + this.size/3 + this.size/6 , this.location.y + this.size)
    // Right thruster
    fill(this.leftCol);
    triangle(this.location.x - this.size/4, this.location.y,
    this.location.x - this.size/1.5, this.location.y + this.size/6,
    this.location.x - this.size/1.5, this.location.y - this.size/6);
    // Left thruster
    fill(this.rightCol);
    triangle(this.location.x + this.size/4, this.location.y,
    this.location.x + this.size/1.5, this.location.y + this.size/6,
    this.location.x + this.size/1.5, this.location.y - this.size/6);
    // Top thruster
    fill(this.backCol);
    triangle(this.location.x, this.location.y - this.size/2, 
    this.location.x - this.size/6, this.location.y - this.size,
    this.location.x + this.size/6 , this.location.y - this.size)

    pop();
  }

  move() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
    this.velocity.limit(this.maxVelocity);
  }

  applyForce(f){
    this.acceleration.add(f);
  }

  interaction(){
      if (keyIsDown(LEFT_ARROW)) {
        this.applyForce(createVector(-0.1, 0));
        this.rightCol = this.activeThrust;
      }
      else {
        this.rightCol = this.passiveThrust;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.applyForce(createVector(0.1, 0));
        this.leftCol = this.activeThrust;
      }
      else {
        this.leftCol = this.passiveThrust;
      }
      if (keyIsDown(UP_ARROW)) {
        this.applyForce(createVector(0, -0.1));      
        this.forwardCol = this.activeThrust;
      } else { 
        this.forwardCol = this.passiveThrust;
      }
      if (keyIsDown(DOWN_ARROW)) {
        this.applyForce(createVector(0, 0.1));      
        this.backCol = this.activeThrust;
      } else { 
        this.backCol = this.passiveThrust;
      }
  }

  fire(){
    this.bulletSys.fire(this.location.x, this.location.y);
  }

  edges(){
    if (this.location.x<0) this.location.x=width;
    else if (this.location.x>width) this.location.x = 0;
    else if (this.location.y<0) this.location.y = height;
    else if (this.location.y>height) this.location.y = 0;
  }

  // Display warning if earth enters atmosphere and increase gravitational pull if in atmosphere
  setNearEarth(){
    this.friction = this.velocity.copy();
    this.friction.mult(-1);
    this.friction.mult(1/30);
    this.applyForce(this.friction);
    this.gravity = new createVector(0, 0.05);
    this.applyForce(this.gravity);

    push();
    textSize(40);
    textAlign(CENTER);
    fill(255, 0, 0);
    text("WARNING: ENTERING EARTH ATMOSPHER!", width/2, height/4*3)
    pop();
  }
}
