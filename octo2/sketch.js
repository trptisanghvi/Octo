 let sound, amplitude, cnv;

function preload(){
  sound = loadSound('music.mp3');
}
   // start / stop the sound when canvas is clicked
  cnv.mouseClicked(function() {
    if (sound.isPlaying() ){
      sound.stop();
    } else {
      sound.play();
    }
  });
 
 
 
  let yInc = amplitude //time
  let xInc = 0.05; //angles
  let xoff = 0;
  let yoff = 0;
  let count = 12;
  
  var Line = function(d, seed, base) {
    this.d = d;
    this.seed = seed
    this.base = base;
  
  }
  
  Line.prototype.show = function() {
    xoff += xInc;
    noiseSeed(this.seed);
    if (this.base == true) {
      this.angle = map(noise(xoff, yoff),  1, -360, 360);
    } else {
      this.angle = map(noise(xoff, yoff), 0, 1, -90, 90);
    }
    count++;
  
    stroke( 255,135,0,100);
    strokeWeight();
    rotate(this.angle);
    strokeWeight(map(count, 0, 19, 50, 2));
    line(0, 0, 0, this.d);
    translate(0, this.d);
    if (count < 20) {
      new Line(this.d * 0.95, this.seed, false).show();
    }
  }
  let num = 8;
  
  let arms = [];
  
  function setup() {
    angleMode(DEGREES);
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < num; i++) {
      arms[i] = new Line(30, random(-1000,1000), true);
    }
    zoff = 0;
  }
  
  function draw() {
    background(112,179,255);
    translate(width /2 , height /2);
    for (let i = 0; i < arms.length; i++) {
      push();
      arms[i].show();
      count = 0;
      pop();
    }
  
    yoff += yInc;
    xoff = 0;
    count = 0;
  
  }
