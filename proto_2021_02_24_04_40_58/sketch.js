let man;
let sound;
let animation;
let noAnimation;


function preload() {
  man = loadImage('man.png');
  sound = loadSound('sound.wav')
  sound2 = loadSound('uhnn.wav')
}

function setup() {
  createCanvas(400, 800);
  frameRate(30);
  background(10);
  pg = createGraphics(140, 400);
  pg.background(100);
  pg.textSize(20);
  pg.textAlign(CENTER);
  pg.text('Touch!',35,100);
  

}




function draw() {
          for (let i = 0; i < 10; i += 1) {
    fill(50 * sin(frameCount * i));
    rect(10 + i * 10, 15 + i * 15, 400 - (20 + 20 * i), 800 - (30 + 30 * i));}
  if (animation) {
    animation.draw();
  }
  image(pg, 130, 200);
  image(man, 20, 550, man.width / 1.5, man.height / 1.5);
  fill(102 + 10 * sin(frameCount / 10), 51 + 10 * sin(frameCount / 10), 0);
  strokeWeight(3);
  rect(130, 620, 155, 200, 20);
  fill(255);
  textSize(20);
  text("Don't Kick!", 155, 720);
  strokeWeight(1);
}

function touchStarted() {
  if (touchX >= 130 && touchX <= 270 && touchY >= 200 && touchY < 600) {
    loop();
      for (let i = 0; i < 10; i += 1) {
    fill(100 * sin(frameCount * i));
    rect(10 + i * 10, 15 + i * 15, 400 - (20 + 20 * i), 800 - (30 + 30 * i));}
    sound.amp(0.1);
    sound.play();
    animation = new Anim_a();
  }else if(touchX >= 130 && touchX <= 285 && touchY >= 620 && touchY < 800) {
     sound.amp(0.1);
    sound2.play()
  }
  return false;
}

function touchEnded() {
 
  sound.stop();
  animation = new Stop_a();
}