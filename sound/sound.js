let sound,cnv,play;

function preload(){
  sound = loadSound('music2.mp3');
}



function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  button = createButton('click me to play/stop music');
  button.position(19, 19);
  button.mousePressed(play);
  
  // start / stop the sound when canvas is clicked
  play = button.mouseClicked(function() {
    if (sound.isPlaying() ){
      sound.stop();
    } else {
      sound.play();
    }
  });
}

