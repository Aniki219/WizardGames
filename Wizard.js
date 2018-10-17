class Wizard {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 25;
    this.h = 25;
    this.z = 0;
    this.zspeed = 0;

    this.dir = 0;
    this.speed = 2;
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

  jump() {
    if (this.z < 0) {
      this.z = 0;
      this.zspeed = 0;
      if (register.getKey(" ")) {
        this.zspeed = 2;
      }
    } else {
      this.z += this.zspeed
      this.zspeed -= .1;
    }
  }

  fall() {
    this.z--;
    if (this.z<-20) {
      this.x=50;
      this.y=50;
      this.z = 0;
      this.canmove = true;
    }
  }

  draw() {
    fill(100,100,250);
    rect(this.x-this.z/4, this.y-this.z/4, this.w+this.z/2, this.h+this.z/2);
  }

  update() {
    if (canMove) {
      this.move();
      this.jump();
  }

    this.draw();
  }
}
