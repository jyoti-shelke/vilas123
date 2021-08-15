var fireworks = [];
var gravity;
var song,song1;
function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  
  stroke(255);
  strokeWeight(4);
  
}
function preload()
{
  song= loadSound("happysong.mp3");
  song1=loadSound("song11.mp3")
}

function draw() {
  colorMode(RGB)
  
  textSize(20);

  
  text("Happy birthday dear Aho",110,100);
  background(0, 0, 0, 25);
  
  if (random(1) < 0.03) {
    fireworks.push(new Firework());
     
   }
  for (var i = fireworks.length-1; i >= 0; i--) {
    // song.play();
     fireworks[i].update();
     fireworks[i].show();
     if (fireworks[i].done()) {
       
       //fireworks.spilce(i, 1);
     }
   }
   console.log(fireworks.length);
  // song1.play();
}