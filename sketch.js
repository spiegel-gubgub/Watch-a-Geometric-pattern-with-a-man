let man;
let sound;


function preload() {
  man = loadImage('man.png');
  sound = loadSound('sound.wav')
  sound2 = loadSound('uhnn.wav')
}

function setup() {
  createCanvas(400, 800);
  frameRate(30);
  background(200);
  pg = createGraphics(140, 400);
  pg.background(100);
  pg.textSize(32);
  pg.textAlign(CENTER)
  pg.text('Please Click!', 0, pg.height / 3.5, 140, 400);
  pg.text('Or', 5, pg.height / 2, 140, 400);
  pg.text('Touch!', 5, pg.height / 1.7, 140, 400);

}

function draw() {
  for (let i = 0; i < 10; i += 1) {
    fill(100 * sin(frameCount * i));
    rect(10 + i * 10, 15 + i * 15, 400 - (20 + 20 * i), 800 - (30 + 30 * i));
  }

  if (mouseIsPressed) {
    if (mouseButton == LEFT && mouseX >= 130 && mouseX <= 270 && mouseY >= 200 && mouseY < 600) {
      for (let i = 0; i < 40; i += 1) {
        pg.fill(random(0, 255), random(110, 255), random(0, 255));
        if (i % 2 == 0) {
          let x = random(0, pg.width);
          let y = random(0, pg.height);
          let d = random(10, 50);
          pg.circle(x, y, d, d);
        } else {
          let x = random(0, pg.width);
          let y = random(0, pg.height);
          let d = random(20, 80);
          pg.rect(x, y, d, d);
        }

      }
    }
  }

  image(pg, 130, 200);
  image(man, 20, 550, man.width / 1.5, man.height / 1.5);
  fill(102 + 10 * sin(frameCount / 10), 51 + 10 * sin(frameCount / 10), 0);
  rect(130, 620, 155, 200, 20);
  fill(255);
  textSize(20);
  text("Don't touch!", 145, 720);


}

function mousePressed() {
  if (mouseButton == LEFT && mouseX >= 130 && mouseX <= 270 && mouseY >= 200 && mouseY < 600) {
    sound.amp(0.3);
    sound.play();
  } else if (mouseButton == LEFT && mouseX >= 130 && mouseX <= 285 && mouseY >= 620 && mouseY < 800) {
    sound2.play();
  }
}

function mouseReleased() {
  sound.amp(0.5);
  sound.stop();
}