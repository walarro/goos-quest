var goosePos = 10;
let goosePosY = 340;
var twX = 300;
var knife = 0;
var knifeX = 0;
var knifeY = 0;

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

  // Knife functionality
  if (knife > 600) {
    knife = "n/a";
  }
  if (keyIsDown(75)) {
    for (let i = 0; i < 2.5; i = i + 0.25) {
      knifeX = 40;
      knifeY = 10;
      knife = knife + 0.75;
    }
  }

  if (knife>twX-20 && knife<twX-10) {
    twX = "n/a";
    knife = "n/a";
  }

  // makes sure the goose don't get too high

  if (goosePosY < 340) {
    goosePosY = goosePosY + 0.8;
  }
  
  // giving the trash legs
  
  // boring stuff that I don't care about but should
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

  // violent flying objects
  fill("white");
  rect(knife + goosePos, 340, knifeX, knifeY);

  // goose
  rect(goosePos, goosePosY, 30, 30);
}

// The goose jumps higher than a kindergartener who had 1 grain of sugar
function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (goosePosY > 322) {
      goosePosY = goosePosY - 30;
    }
  }
}

function keyReleased(){
  if (keyCode === 75){
    knife = "n/a"
  }
}
