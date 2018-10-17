class Hole {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 25;
    this.h = 25;

    new DeathCollider(this.x + 10, this.y + 10, 5, 5);
  }

  draw() {
    fill(51);
    rect(this.x, this.y, this.w, this.h);
  }

  update() {
    this.draw();
  }
}
