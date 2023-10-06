class AsteroidSystem {

  //creates arrays to store each asteroid's data
  constructor(){
    this.locations = [];
    this.velocities = [];
    this.accelerations = [];
    this.diams = [];
    this.level = 1;
    this.interval = 0.01;
    this.maxSpeed = 1;
    this.colors = [];
    this.passiveColor = color(200, 200, 200);
    this.burningColor = color(255, 0, 0);
  }

  run(){
      this.spawn();
      this.move();
      this.draw();
  }

  // spawns asteroid at random intervals
  spawn() {
    if (this.level == 1) {
      this.interval = 0.01;
    } else if (this.level == 2) {
      this.interval = 0.1;
    } else if (this.level == 3) {
      this.interval = 0.2;
    } else if (this.level == 4) {
      this.interval = 0.5;
    }

    if (this.level == 1) {
      this.maxSpeed = 1;
    } else if (this.level == 2) {
      this.maxSpeed = 1.5;
    } else if (this.level == 3) {
      this.maxSpeed = 2;
    } else if (this.level == 4) {
      this.maxSpeed = 3;
    }

    if (random(1) < this.interval) {
      this.accelerations.push(new createVector(0,random(0.1,this.maxSpeed)));
      this.velocities.push(new createVector(0, 0));
      this.locations.push(new createVector(random(width), 0));
      this.diams.push(random(30,50));
    } 
  }

  //moves all asteroids
  move(){
    for (var i=0; i<this.locations.length; i++){
      this.velocities[i].add(this.accelerations[i]);
      this.locations[i].add(this.velocities[i]);
      this.accelerations[i].mult(0);
    }
  }

  applyForce(f){
    for (var i=0; i<this.locations.length; i++){
      this.accelerations[i].add(f);
    }
  }

  //draws all asteroids
  draw(){
    noStroke();
    fill(200);
    for (var i=0; i<this.locations.length; i++){
      if (this.colors[i] == this.burningColor){
        fill(this.burningColor);
        ellipse(this.locations[i].x, this.locations[i].y, this.diams[i], this.diams[i]);
        fill(100, 100, 0);
        ellipse(this.locations[i].x - this.diams[i]/5, this.locations[i].y, this.diams[i]/4);
        ellipse(this.locations[i].x + this.diams[i]/5, this.locations[i].y - this.diams[i]/5, this.diams[i]/4);
      } else if (this.colors[i] == this.passiveColor) {
        fill(this.passiveColor);
        ellipse(this.locations[i].x, this.locations[i].y, this.diams[i], this.diams[i]);
        fill(100);
        ellipse(this.locations[i].x - this.diams[i]/5, this.locations[i].y, this.diams[i]/4);
        ellipse(this.locations[i].x + this.diams[i]/5, this.locations[i].y - this.diams[i]/5, this.diams[i]/4);
      }
    }
  }

  //function that calculates effect of gravity on each asteroid and accelerates it
  calcGravity(centerOfMass){
    for (var i=0; i<this.locations.length; i++){
      var gravity = p5.Vector.sub(centerOfMass, this.locations[i]);
      gravity.normalize();
      gravity.mult(.001);
      this.applyForce(gravity);
    }
  }

  //destroys all data associated with each asteroid
  destroy(index){
    this.locations.splice(index,1);
    this.velocities.splice(index,1);
    this.accelerations.splice(index,1);
    this.diams.splice(index,1);
    this.colors.splice(index,1);
  }

  // Toggle level change
  changeLevel(level) {
    this.level = level;
  }
}
