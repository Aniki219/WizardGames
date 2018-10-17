var player;
var holes = [];

function setup() {
  noStroke();
  createCanvas(500, 500);
  player = new Wizard(50,50);

  while(holes.length < 100) {
    holes.push(new Hole(floor(random(20))*25,floor(random(20))*25));
  }

  while(walls.length < 100) {
    walls.push(new Wall(floor(random(20))*25,floor(random(20))*25));
  }
}

function draw() {
  background(150, 200, 150);
  Hole.update();
  Wall.update();
  player.update();
}

//freeze enemy with magic
//array of spells
//collect objects?
//collect potions
