var Line = function(d, seed, base) {
    this.d = d;
    this.seed = seed
    this.base = base;
  
  }
  
  Line.prototype.show = function() {
    xoff += xInc;
    noiseSeed(this.seed);
    if (this.base == true) {
      this.angle = map(noise(xoff, yoff), 0, 1, -360, 360);
    } else {
      this.angle = map(noise(xoff, yoff), 0, 1, -90, 90);
    }
    count++;
  
    stroke(map(count, 0 , 12, 0, 100));
    strokeWeight(2);
    rotate(this.angle);
    strokeWeight(map(count, 0, 19, 50, 2));
    line(0, 0, 0, this.d);
    translate(0, this.d);
    if (count < 20) {
      new Line(this.d * 0.95, this.seed, false).show();
    }
  }