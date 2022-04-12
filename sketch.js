var goose;
var goosePos = 10;

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

  frameRate(60);
  background("#69EEFF");
  //floor
  noStroke();
  fill("#8BC34A");
  rect(0, 350, 600, 50);
  noFill();
  //goose
  image(goose, goosePos, 300, 75, 75);

  //
}
