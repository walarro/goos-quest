var goose;
var goosePos = 10;
let goosePosY = 300;

function setup() {
  createCanvas(600, 400);
  goose = loadImage("goose.png");
}

function draw() {
  // Controls Goose Position
  if (keyIsDown(LEFT_ARROW)) {
    goosePos = goosePos - 2.5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    goosePos = goosePos + 2.5;
  }

  // Moving the jump function down to line 44 for better functionality
  /* if(keyIsDown(UP_ARROW)){
    goosePosY = goosePosY + 10
  } */

  frameRate(60);
  background("#69EEFF");
  //floor
  noStroke();
  fill("#8BC34A");
  rect(0, 350, 600, 50);
  noFill();
  //goose
  image(goose, goosePos, goosePosY, 75, 75);

  // makes sure the goose don't get too high
  if (goosePosY < 300) {
    goosePosY = goosePosY + 0.8;
  }
}

// The goose jumps higher than a kindergartener who had 1 grain of sugar
function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (goosePosY > 282){
      goosePosY = goosePosY - 20
    }
  }
}
