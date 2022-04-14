var goosePos = 10;
let goosePosY = 340;
var twX = 300;
var knife = 0

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // Controls Goose Position
  if (keyIsDown(LEFT_ARROW)) {
    goosePos = goosePos - 2.5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    goosePos = goosePos + 2.5;
  }
  
  if (keyIsDown(75)) {
    if (knife < 200){
      knife = knife + 4
    }
  }

  // Moving the jump function down to line 44 for better functionality
  /* if(keyIsDown(UP_ARROW)){
    goosePosY = goosePosY + 10
  } */
  // makes sure the goose don't get too high
  
  if (goosePosY < 340) {
    goosePosY = goosePosY + 0.8;
  }
  frameRate(60);
  background("#69EEFF");
  
  //floor
  noStroke();
  fill("#8BC34A");
  rect(0, 350, 600, 50);
  noFill();
  
  // trash warriors
  fill("rgb(46,45,45)");  
  rect(twX, 320, 50, 50);
  
  // goose
  fill("white");
  rect(goosePos, goosePosY, 30, 30);
  
  // violent flying objects
  rect(knife,320,40,10)
}

// The goose jumps higher than a kindergartener who had 1 grain of sugar
function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (goosePosY > 322) {
      goosePosY = goosePosY - 20;
    }
  }
}
