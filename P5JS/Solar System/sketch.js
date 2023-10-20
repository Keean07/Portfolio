var speed;

function setup() {
    createCanvas(1200, 1200);
}

function draw() {
    background(0);
    speed = frameCount;

    push();
        translate(width/2, height/2);
        // Sun Label
        push();
            fill(255,255,255);
            strokeWeight(0);
            textAlign(CENTER);
            text("SUN", 0, -105);
        pop();
        // Sun Orbits 
        push();
            noFill();
            stroke(100,100,100);
            strokeWeight(1);
            ellipse(0, 0, 200 + 60);
            ellipse(0, 0, 200 + 140);
        pop();
        rotate(radians(speed/3));
        celestialObj(color(255,150,0), 200); // Draw Sun
        push();
            rotate(radians(speed/5));
            translate(0, 130);
            // Mercury Label
            push();
                fill(255,255,255);
                strokeWeight(0);
                textAlign(CENTER);
                rotate(radians(-speed/3 - speed/5)); // Counter the suns rotation to maintain upright
                text("Mercury", 0, -20);
            pop();
            rotate(radians(-speed*2));
            celestialObj(color(200,150,100), 25); // Draw Mercury
        pop();
        push();
            rotate(radians(speed/3));
            translate(0, 170);
            // Venus Label
            push();
                fill(255,255,255);
                strokeWeight(0);
                textAlign(CENTER);
                rotate(radians(-speed/3 - speed/3));
                text("Venus", 0, -20);
            pop();
            rotate(radians(speed*2));
            celestialObj(color(50, 200, 10), 30); // Draw Venus
        pop();
        push();
            translate(0, 300);
            // Earth Label
            push();
                fill(255,255,255);
                strokeWeight(0);
                textAlign(CENTER);
                rotate(radians(-speed/3)); // Counter the suns rotation to maintain upright
                text("Earth", 0, -50);
            pop();
            // Earth Orbits
            push();
                noFill();
                stroke(100,100,100);
                strokeWeight(1);
                ellipse(0, 0, 100);
                ellipse(0, 0, 200);
                ellipse(0, 0, 280);
            pop();
            rotate(radians(speed));
            celestialObj(color(0, 0, 200), 80); // Draw Earth
            push();
                rotate(radians(-speed*2));
                translate(0, 100);
                // Moon Label
                push();
                    fill(255,255,255);
                    strokeWeight(0);
                    textAlign(CENTER);
                    rotate(radians(-speed/3 - -speed*2 - speed)); // Counter the suns rotation to maintain upright
                    text("Moon", 0, -20);
                pop();
                // Moon Orbit
                push();
                    noFill();
                    stroke(100,100,100);
                    strokeWeight(1);
                    ellipse(0, 0, 60);
                pop();
                celestialObj(color(255,255,255), 30); // Draw Moon 1
                push();
                    rotate(radians(speed));
                    translate(0, 30);
                    // Asteroid Label
                    push();
                        fill(255,255,255);
                        strokeWeight(0);
                        textAlign(CENTER);
                        rotate(radians(-speed/3)); // Counter the suns rotation to maintain upright
                        text("Asteroid", 0, -20);
                    pop();
                    celestialObj(color(255,100,100), 10); // Draw Moon Asteroid
                pop();
            pop();
            push();
                rotate(radians(-speed));
                translate(0, 140);
                // Moon 2 Label
                push();
                    fill(255,255,255);
                    strokeWeight(0);
                    textAlign(CENTER);
                    rotate(radians(-speed/3 - speed - -speed)); // Counter the suns rotation to maintain upright
                    text("Moon 2", 0, -30);
                pop();
                celestialObj(color(200, 200, 200), 40); // Draw Moon 2
            pop();
            push();
                rotate(radians(-speed*1.5));
                translate(0, 50);
                // Satellite Label
                push();
                    fill(255,255,255);
                    strokeWeight(0);
                    textAlign(CENTER);
                    rotate(radians(-speed/3 - -speed*2 - speed*1.5)); // Counter the suns rotation to maintain upright
                    text("Satellite", 0, -20);
                pop();
                strokeWeight(0);
                fill(255, 0, 0);
                triangle(0, 5, -5, -5, 5, -5); // Draw Satellite
            pop();
        pop();
    pop();
}

function celestialObj(c, size){
    strokeWeight(2);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
}
