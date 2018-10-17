class Wizard {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50;

    this.dir = 0;
    this.speed = 4;
  }

  move() {
    var xdir = 0;
    var ydir = 0;

    if (register[LEFT_ARROW]) {
      xdir = -1;
    }
    if (register[RIGHT_ARROW]) {
      xdir = 1;
    }
    if (register[UP_ARROW]) {
      ydir = -1;
    }
    if (register[DOWN_ARROW]) {
      ydir = 1;
    }

    for (var xvel = this.speed;  xvel > 0; xvel--) {
      for (var yvel = this.speed;  yvel > 0; yvel--) {
        var dX = xvel * xdir;
        var dY = yvel * ydir
        var destRect = {x: this.x + dX, y: this.y + dY, w: this.w, h: this.h};

        if (placeFree(destRect)) {
          this.x += xvel * xdir;
          this.y += yvel * ydir;
          return;
        }
      }
    }
  }

  draw() {
    fill(255,0,0);
    rect(this.x, this.y, this.w, this.h);
  }

  update() {
    this.move();
    this.draw();
  }
}
