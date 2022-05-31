var play = true;
var goosePos = 10;
let goosePosY = 340;
var twJump = true;
var knife = 0;
var gravity = 0;
var jumping = false;
var jump = 20;
var knifeLeft = 10;
var throwing = false;
var twRand;
var storyfont;
var scroll;
var next = 0;
var startingscreen;
var playbutton;
var goose;
var trash;
var sword;
var twX = [580, 600, 300, 200, 350];
var twY = 320;
var healthBar = 100;
var healthGraph;
var twRand;
var killed = 0;
var level = 1;
var boss;
var bossKilled = 0;
var bossX = 600;
var tree;
var grass;
var grassPos;
var grass2;
var grass2Pos;
var thealth;

function preload() {
  storyfont = loadFont("Ancient Medium.ttf");
  scroll = loadImage("scroll.png");
  goose = loadImage("right.png");
  trash = loadImage("trash.png");
  healthGraph = loadImage("health/5.png");
  boss = loadImage("trashboss.png");
  tree = loadImage("tree.png");
  grass = loadImage("grass.png");
  grassPos = [random(0, 100), random(200, 400), random(500, 600)];
  grass2 = loadImage("grass2.png");
  grass2Pos = 50;
  thealth = loadImage("thealth6.png");
}

function setup() {
  startingscreen = loadImage("Starting screen.png");
  playbutton = loadImage("Screen Shot 2022-05-23 at 10.40.53 AM.png");
  createCanvas(600, 400);
}

function draw() {
  image(startingscreen, 0, 0, 650, 400);
  if (play == true) {
    strokeWeight(5);
    stroke("black");
    fill("white");
    textSize(40);
    text("GOOSE QUEST", 150, 100);
    image(playbutton, 220, 300, 150, 60);
  }
  if (play == false) {
    image(scroll, 20, 20, 530, 330);
    textFont(storyfont);
    noStroke();
    fill("black");
    textSize(40);
    if (next == 0 || next == 1 || next == 2)
      text("A long time ago there was...", 90, 110);
    if (next == 1 || next == 2) {
      text("A goose", 90, 150);
    }
    if (next == 2) {
      text("One day it was minding it's", 90, 190);
      text("own business in the pond", 90, 240);
    }
    if (next == 3) {
      text("And it was goosenaped", 90, 110);
    }
    if (next == 4) {
      text("The goose woke up to find", 90, 110);
      text("that it's worst enemy had", 90, 150);
      text("goosenaped it.", 90, 190);
    }
    if (next == 5) {
      text("The Golden Trash", 90, 110);
    }
    if (next == 6) {
      text("Use the arrow keys to move", 90, 110);
      text("Hold the L key to shoot", 90, 150);
      text("the bazooka", 90, 190);
    }
    if (next == 7) {
      text("fight off the enemy trash to", 90, 110);
      text("survive", 90, 150);
    }
    if (next == 8) {
      game();
    }
    if (next == 9) {
      text("Congratulations on killing", 90, 110);
      text("the trash goons", 90, 150);
    }
    if (next == 10) {
      text("Now it's time to beat", 90, 110);
      text("The Golden Trash", 90, 150);
    }
    if (next == 11) {
      game();
    }
    if (next == 12) {
      text("Congratulations.", 90, 110);
      text("You have beaten the", 90, 150);
      text("Golden Trash", 90, 190);
    }
    if (next == 13) {
      text("You may now return to the pond", 90, 110);
    }
    if (next == 15) {
      text("You Died...", 90, 150);
    }
  }
}
function game() {
  textFont(storyfont);
  stroke("black");
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

  if (throwing === false) {
    knife = -200;
  }

  //healthbar
  if (healthBar > 100) {
    healthBar = 100;
  }
  // makes sure the goose don't get too high

  if (goosePosY < 340) {
    goosePosY = goosePosY + 0.8;
  }

  // boring stuff that I don't care about but should
  frameRate(60);
  background("#69EEFF");

  //floor
  noStroke();
  fill("rgb(33,204,94)");
  rect(0, 350, 600, 50);
  noFill();

  // Background props
  image(tree, 300, 140, 871 / 5, 1062 / 5);
  for (let n = 0; n < 7; n++) {
    image(grass, grassPos[n], 325, 319 / 5, 170 / 5);
  }
  image(grass2, grass2Pos, 325, 319 / 5, 170 / 5);

  // health bar
  image(healthGraph, 40, 40, 100, 37.5);
  if (healthBar < 100 && healthBar > 80) {
    healthGraph = loadImage("health/5.png");
  }
  if (healthBar < 80 && healthBar > 60) {
    healthGraph = loadImage("health/4.png");
  }
  if (healthBar < 60 && healthBar > 40) {
    healthGraph = loadImage("health/3.png");
  }
  if (healthBar < 40 && healthBar > 20) {
    healthGraph = loadImage("health/2.png");
  }
  if (healthBar < 20 && healthBar > 10) {
    healthGraph = loadImage("health/1.png");
  }
  if (healthBar == 0) {
    healthGraph = loadImage("health/dead.png");
    next = 15;
    preload();
  }

  // knifes left
  text(knifeLeft, 560, 40);
  noStroke();

  // trash warriors
  fill("rgb(46,45,45)");
  for (var i = 0; i <= 5; i++) {
    //trash warrior functionality
    image(trash, twX[i], twY, 50, 50);
    if (twX[i] < 0) {
      twX[i] = 700;
    }
    twX[i] = twX[i] - 1;

    //knife functionality
    if (knife > twX[i] - 20 && knife < twX[i] - 10) {
      twX[i] = random(600, 700);
      knife = goosePos;
      healthBar = healthBar + 25;
      knifeLeft--;
      killed++;
    }
    // healthbar functionality
    if (twX[i] < goosePos + 60 && twX[i] + 60 > goosePos) {
      healthBar = healthBar - 1;
    }
  }
  if (level == 1) {
    if (killed > 8) {
      next = 9;
      killed = 0;
      level = level + 1;
      preload();
    }
  }
  if (level == 2) {
    twX = "n/a";
    knifeLeft = 40;
    image(boss, bossX, 300, 90, 90);
    bossX = bossX - 0.5;
    if (knife > bossX - 20 && knife < bossX - 10) {
      knife = goosePos;
      healthBar = healthBar + 35;
      knifeLeft--;
      bossKilled++;
    }
    // healthbar functionality
    if (bossX < goosePos + 60 && bossX + 60 > goosePos) {
      healthBar = healthBar - 2;
    }
    image(thealth, 460, 40, 100, 37.5);
    if(bossKilled < 30 && bossKilled > 25){
      thealth = loadImage("thealth1.png")
    }
    if(bossKilled < 25 && bossKilled > 20){
      thealth = loadImage("thealth2.png")
    }
    if(bossKilled < 20 && bossKilled > 15){
      thealth = loadImage("thealth3.png")
    }
    if(bossKilled < 15 && bossKilled > 10){
      thealth = loadImage("thealth4.png")
    }
    if(bossKilled < 10 && bossKilled > 5){
      thealth = loadImage("thealth5.png")
    }
    if(bossKilled < 5 && bossKilled > 0){
      thealth = loadImage("thealth6.png")
    }
    if (bossKilled > 30) {
      bossX = 0;
      next = next + 1;
      preload();
    }
  }

  // violent flying objects
  fill("green");
  rect(knife, 345, 15, 15);

  // goose
  fill("white");
  image(goose, goosePos, goosePosY, 70, 40);

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
  if (key == " ") {
    if (next < 8) {
      next = next + 1;
    }
    if (next > 8 && next < 11) {
      next = next + 1;
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
function mouseClicked() {
  if (
    play == true &&
    mouseX > 220 &&
    mouseX < 370 &&
    mouseY > 300 &&
    mouseY < 360
  ) {
    play = false;
  }
}
