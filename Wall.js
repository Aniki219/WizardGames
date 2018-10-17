var walls =[];

class Wall {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 25;
    this.h = 25;

    walls.push(this);
  }

  draw() {
    fill(100,80,50);
    rect(this.x, this.y, this.w, this.h);
  }

  static update() {
    for (var wall of walls) {
      wall.draw();
    }
  }
}
