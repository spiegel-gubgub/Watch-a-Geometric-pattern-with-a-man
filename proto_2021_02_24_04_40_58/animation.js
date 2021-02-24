// Animation A
function Anim_a() {
  this.x = 0;
  this.y = 0;
  this.d = 0;
}

Anim_a.prototype.draw = function() {
        for (let i = 0; i < 10; i += 1) {
    fill(200 * sin(frameCount * i), 80 * sin(frameCount * i), 100 * sin(frameCount * i));
    rect(10 + i * 10, 15 + i * 15, 400 - (20 + 20 * i), 800 - (30 + 30 * i));}
  for (let i = 0; i < 40; i += 1) {
    pg.fill(random(0, 255), random(110, 255), random(0, 255));
    if (i % 2 == 0) {
      this.x = random(0, pg.width);
      this.y = random(0, pg.height);
      this.d = random(10, 50);
      pg.ellipse(this.x, this.y, this.d, this.d);
    } else {
      this.x = random(0, pg.width);
      this.y = random(0, pg.height);
      this.d = random(10, 50);
      pg.rect(this.x, this.y, this.d, this.d);
    }

  }
};

function Stop_a() {
  this.x = Anim_a.x;
  this.y = Anim_a.y;
  this.d = Anim_a.d;
  
}
Stop_a.prototype.draw = function() {
         for (let i = 0; i < 10; i += 1) {
    fill(50 * sin(frameCount * i));
    rect(10 + i * 10, 15 + i * 15, 400 - (20 + 20 * i), 800 - (30 + 30 * i));}
    for (let i = 0; i < 40; i += 1) {
      if (i % 2 == 0) {
      pg.ellipse(this.x, this.y, this.d, this.d);
    } else {
      pg.rect(this.x, this.y, this.d, this.d);
    }
    }
};