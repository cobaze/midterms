var currentFade;
var multiBubbles = [];
var firstNum = 12;
var boundBoxXLow;
var boundBoxXHigh;
var boundBoxYLow;
var boundBoxYHigh;

function setup() {
  createCanvas(1000, 500);
  boundBoxXLow = 40;
  boundBoxXHigh = width - 40;
  boundBoxYLow = 90;
  boundBoxYHigh = height - 40;
  //bubble0 = new bubbles(random(width), random(height), 100);
  for (var i = 0; i < 10; i++) {
    var newBubble = new bubbles(random(boundBoxXLow + 60, boundBoxXHigh), random(boundBoxYLow + 60, boundBoxYHigh), random(50, 60), random(1, firstNum));
    multiBubbles.push(newBubble);
  }
  noStroke();
}

function draw() {
  background(255);
  
  text("Find The Factor of " + firstNum + " Number", 400,50);
  fill(255);
  stroke(0);
  strokeWeight(4);
  rect(boundBoxXLow,boundBoxYLow, width - boundBoxXLow -2, height - boundBoxYLow -2);
  fill(0);
  noStroke();
  //ifMousIsClicked...
  //getClickPosition
  //Loop through bubble array
  //multiBubbles[i].isInBubble(x, y) <---- x and y is your click position
  //if YES, check if it is factor
  //if YES, delete it + add a point or w/e
  //if anything is NO, do nothing
  for (var i = 0; i < multiBubbles.length; i++) {

    multiBubbles[i].move();
    //multiBubbles[i].check(i);
    multiBubbles[i].display();

  }
}

function bubbles(tempX, tempY, tempDiameter, tempNum) {

  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.num = floor(tempNum);

  this.xspeed = random(0.6, 0.9);
  this.yspeed = random(0.6, 0.9);

  this.display = function() {
    fill('#BBBBBB');
    
    ellipse(this.x, this.y, this.diameter, this.diameter);
    fill('#000000');
    text(this.num, this.x - 3, this.y + 3);
  }

  this.update = function(runUpdate) {
    if (runUpdate == true) {
      this.x = int(random(width));
      this.y = int(random(height));
    }
  }
  
  this.isInBubble = function(x, y) {
    //Figure out if X and Y are within bubble (think trig) cos/sin of diameter for x and y
    //if(x > this.x - this.diameter etc)
    // if yes, "return true"
    // if no, "return false"
  } 

  this.move = function() {
    
    this.x += this.xspeed;
    this.y += this.yspeed;

    if (this.x > width - this.diameter / 2 || this.x < (this.diameter / 2) + boundBoxXLow) {
      this.xspeed = -this.xspeed;
    }

    if (this.y > height - this.diameter / 2 || this.y < (this.diameter / 2) + boundBoxYLow) {
      this.yspeed = -this.yspeed;
    }

  }

  this.check = function(currentIndex) {
    for (var i = 0; i < multiBubbles.length; i++) {

      if (i != currentIndex) {
        var bubbleDistance = dist(this.x + this.diameter / 2, this.y + this.diameter / 2, multiBubbles[i].x + this.diameter / 2, multiBubbles[i].y + this.diameter / 2);
        if (bubbleDistance < this.diameter) {
          this.update(true);
        }
      }
    }
  }

}