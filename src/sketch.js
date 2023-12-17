var sample;
let x;
let y;
let mapImg;
let pinIcon;
let velX = 0;
let velY = 0;
let doa = 1;
let pinPosX;
let pinPosY;
let wiW;
let wiH;
let imgW;
let imgH;
let nm;
let ab;

function preload() {
  mapImg = loadImage('../assets/Map.png');
  pinIcon = loadImage('../assets/Icons/pin.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  sample = new SampleSystem();
  ab = 0;
  while (mapImg.width / (windowWidth / ab) <= windowWidth + windowWidth / 8
    || mapImg.height / (windowHeight / ab) <= windowHeight + windowHeight / 8) ++ab;
  wiW = windowWidth;
  wiH = windowHeight;
  imgW = mapImg.width;
  imgH = mapImg.height;
  nm = 0;
  mapImg.resize(imgW / (windowWidth / ab), 0);
  ab = 0;
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  if (wiW != windowWidth || wiH != windowHeight) {
    while (nm <= 1) {
      while (imgW / (windowWidth / ab) <= windowWidth + windowWidth / 8
        || mapImg.height / (windowHeight / ab) <= windowHeight + windowHeight / 8) ++ab;
      mapImg.resize(imgW / (windowWidth / ab), 0);
      ab = 0;
      ++nm;
    }
  }
  else{nm = 0;}
  searchMap(0, 0, 2, mapImg.width, mapImg.height, windowWidth, windowHeight);
}

function searchMap(x, y, acel) {
  push();
  translate(-10, -10);
  x = x + velX;
  y = y + velY;
  image(mapImg, x, y);
  if (mouseX < windowWidth / 2 - windowWidth / 4) {
    if (x >= 0) {
      velX = velX;
      image(mapImg, x, y);
    } else {
      velX = velX + acel;
      image(mapImg, x, y);
    }
  }
  if (mouseX > windowWidth / 2 + windowWidth / 4) {
    if (x + mapImg.width <= windowWidth) {
      velX = velX;
      image(mapImg, x, y);
    } else {
      velX = velX - acel;
      image(mapImg, x, y);
    }
  }
  if (mouseY < windowHeight / 2 - windowHeight / 4) {
    if (y >= 0) {
      velY = velY;
      image(mapImg, x, y);
    } else {
      velY = velY + acel;
      image(mapImg, x, y);
    }
  }
  if (mouseY > windowHeight / 2 + windowHeight / 4) {
    if (y + mapImg.height <= windowHeight) {
      velY = velY;
      image(mapImg, x, y);
    } else {
      velY = velY - acel;
      image(mapImg, x, y);
    }
  }
  sample.draw(x, y);
  pinPosX = x;
  pinPosY = y;
  pop();
}

function mousePressed() {
  sample.create(mouseX - pinPosX, mouseY - pinPosY)
}

function keyTyped() {
  if (key === "n") {
    setup();
  }
}