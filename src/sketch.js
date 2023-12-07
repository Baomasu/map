var sample;
let x,y

function setup() {
  createCanvas(500,700);
  sample = new SampleSystem();
  x=0;
  y=0;

  background(255);

  sample.draw();
}

function draw() {
  background(255);
  sample.draw();
}

function mousePressed(){
  sample.create(mouseX,mouseY);
}

function keyTyped() {
  if (key === "n") {
    setup();
  }
}