var player;

function setup() {
  createCanvas(500, 500);
  player = new Wizard(50,50);
}

function draw() {
  background(0, 0, 0);
  player.update();
}

//freeze enemy with magic
//array of spells
//collect objects?
//collect potions
