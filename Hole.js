var holes =[];

class Hole {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 25;
    this.h = 25;

    this.collider = {x: this.x+10, y:this.y+10, w:(this.w-20)/2, h:(this.w-20)/2};

    holes.push(this);
  }

  draw() {
    fill(51);
    rect(this.x, this.y, this.w, this.h);
  }

  static update() {
    for (var hole of holes) {
      hole.draw();
    }
  }
}
