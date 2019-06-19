function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  let hr = hour();
  let mn = minute();
  let sc = second();

  // fill(255);
  // noStroke();
  // text(hr + ":" + mn + ":" + sc, 10, 200);
  strokeWeight(8);
  stroke(255);
  noFill();
  ellipse(200, 200, 300, 300);

  strokeWeight(4);
  stroke(255, 100, 150);
  let end = map(mouseX, 0, width, 0, 360);
  arc(200, 200, 300, 300, 0, end);
}
