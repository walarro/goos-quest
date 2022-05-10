var goosePos = 10;
let goosePosY = 340;
var twX = 580;
var twY = 320;
var twJump = true;
var knife = 0;
var knifeX = 40;
var knifeY = 10;
var gravity = 0;
var jumping = false;
var jump = 20;
var healthBar = 100;
var knifeLeft = 10;
var throwing = false;
var twRand

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
  if (knife > 580) {
    knife = "n/a";
  }
  if (keyIsDown(76)) {
    for (let i = 0; i < 2.5; i = i + 0.25) {
      throwing = true;
      knife = knife + 0.75;
    }
  }
  if (knifeLeft === 0) {
    knife = "n/a";
  }

  if (knife > twX - 20 && knife < twX - 10) {
    twX = 700;
    knife = goosePos;
    healthBar = healthBar + 25;
    knifeLeft--;
  }
  if (throwing === false) {
    knife = -200;
  }

  //resets the trash warrior
  if (twX < 0) {
    twX = 700;
  }

  //healthbar
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

  // knifes left
  text(knifeLeft, 560, 40);
  noStroke();

  // trash warriors
   for (var i=0;i<=10;i++) {
    fill("rgb(46,45,45)");
    rect(twX, twY, 50, 50);
}

  // violent flying objects
  fill("grey");
  rect(knife, 345, knifeX, knifeY);

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
  if (keyCode == 76) {
    if (knifeLeft > 0) {
      knife = goosePos;
    } else {
      knife = "n/a";
      knifeLeft = 0;
    }
  }
}

function keyReleased() {
  if (keyCode == 76) {
    knife = -200;
    throwing = false;
    knifeLeft--;
  }
}
