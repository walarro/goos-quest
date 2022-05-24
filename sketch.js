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
var next=0;
var startingscreen;
var playbutton;
var goose;
var trash;
var sword;
var twX = [580, 600, 300, 200, 350];
var twY = 320;
var healthBar = 500;
var twRand;


function preload(){
  storyfont = loadFont("Ancient Medium.ttf");
  scroll = loadImage("scroll.png");
  goose = loadImage("right.png")
  trash = loadImage("trash.png")
}

function setup() {
  startingscreen = loadImage("Starting screen.png");
  playbutton = loadImage("Screen Shot 2022-05-23 at 10.40.53 AM.png");
  createCanvas(600, 400);
}

function draw() { 

  image(startingscreen, 0,0,650,400);
  if(play==true){
    image(playbutton, 220,300,150,60);     
  }
  if(play==false){
    image(scroll,20,20,530,330);
    textFont(storyfont);
    stroke("black");
    textSize(40)
    if(next==0||next==1||next==2)
    text("A long time ago there was...",90,110);
    if(next==1||next==2){
      text("A goose",90,150);   
    }
    if(next==2){
      text("One day it was minding it's",90,190);
      text("own business",90,240);
    }
    if(next==3){
      text("And it was goosenaped",90,110);
    }
    if(next==4){
      game();
    }
  }
  
}
function game(){
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

  //resets the trash warrior

  //healthbar
  if (healthBar > 500) {
    healthBar = 500;
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
  fill("rgb(46,45,45)");
  for (var i = 0; i <= 5; i++) {
    //trash warrior functionality
    image(trash,twX[i], twY, 50, 50);
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
    }
    // healthbar functionality
    if (twX[i] < goosePos + 60 && twX[i] + 60 > goosePos) {
      healthBar = healthBar - 1;
    }
  }
  // violent flying objects
  fill("green");
  rect(knife, 345, 15, 15);

  // goose
  fill("white");
  image(goose,goosePos, goosePosY, 70, 40);

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
  if(key == " "){
    if(next<4){
      next=next+1;      
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
function mouseClicked(){
  if (play == true && mouseX > 220 && mouseX < 370 && mouseY > 300 && mouseY < 360){
    play = false;
  } 
}
