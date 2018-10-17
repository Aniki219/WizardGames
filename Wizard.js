class Wizard {
  constructor(x, y) {
    this.setup(x, y);
    this.w = 22;
    this.h = 22;

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

    for (var xvel = this.speed;  xvel >= 0; xvel--) {
      for (var yvel = this.speed;  yvel >= 0; yvel--) {
        var dX = xvel * xdir;
        var dY = yvel * ydir;
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
    this.z += this.zspeed;
    this.zspeed -= .1;

    if (this.z <= 0) {
      this.z = 0;

      if (register.getKey(" ")) {
        this.zspeed = 2;
      }
    }
  }

  draw() {
    let scale = this.z/2;

    fill(100,100,250);
    rect(this.x - scale/2, this.y - scale/2, this.w + scale, this.h + scale);
  }

  update() {
    if (this.canMove) {
      this.move();
      this.jump();
      this.checkHazards();
    }
    this.effects();
    this.draw();
  }

  checkHazards() {

    //grounded hazards
    if (this.z > 0) {return;}

    for(var h of holes) {
      if (collision(this, h.collider)) {
        this.falling = true;
        this.canMove = false;
        this.x = h.x;
        this.y = h.y;

        setTimeout(() => this.setup(), 750);
        return;
      }
    }
  }

  effects() {
    if (this.falling && this.z > this.w*-2) {
      this.z-=1;
    }
  }

  setup(x, y) {
    this.x = x || 50;
    this.y = y || 50;

    this.z = 0;
    this.zspeed = 0;

    this.dir = 0;

    this.canMove = true;
    this.falling = false;
  }
}
