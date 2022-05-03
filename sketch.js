var goosePos = 10;
let goosePosY = 340;
var twX = 300;
var twY = 320;
var twJump = true;
var knife = 0;
var knifeX = 0;
var knifeY = 0;
var gravity = 0;
var jumping = false;
var jump = 20;
var healthBar = 100;

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
  if (keyIsDown(76)) {
    for (let i = 0; i < 2.5; i = i + 0.25) {
      knifeX = 40;
      knifeY = 10;
      knife = knife + 0.75;
    }
  }

  if (knife > twX - 20 && knife < twX - 10) {
    twX = 650;
    knife = goosePos;
    healthBar = healthBar + 25;
  }

  if (healthBar > 100) {
    healthBar = 100;
  }
  // makes sure the goose don't get too high

  if (goosePosY < 340) {
    goosePosY = goosePosY + 0.8;
  }

  // giving the trash legs
  twX = twX - 1;

  // trash jump
  if (twY > 322) {
    twY = twY - 35;
  }
  if (twY < 340) {
    twY = twY + 0.8;
  }

  // boring stuff that I don't care about but should
  frameRate(60);
  background("#69EEFF");

  //floor
  noStroke();
  fill("#8BC34A");
  rect(0, 350, 600, 50);
  noFill();

  // health bar
  fill("white");
  stroke("white");
  text(healthBar, 40, 40);
  noStroke();

  // trash warriors
  fill("rgb(46,45,45)");
  rect(twX, twY, 50, 50);

  // violent flying objects
  fill("red");
  rect(knife, goosePosY, knifeX, knifeY);

  // goose
  fill("white");
  rect(goosePos, goosePosY, 30, 30);

  if (jumping == true) {
    if (goosePosY > 340) {
      if (jump < 1) {
        jump = 20;
        jumping = false;
      }
    }
    goosePosY = goosePosY - jump;
    jump = jump - 2;
  }

  // healthbar functionality
  if (twX < goosePos + 60 && twX + 60 > goosePos) {
    healthBar = healthBar - 1;
  }
}

// The goose jumps higher than a kindergartener who had 1 grain of sugar
function keyPressed() {
  if (keyCode == UP_ARROW) {
    jumping = true;
  }
}

function keyReleased() {
  if (keyCode == 76) {
    knife = "n/a";
  }
} 
