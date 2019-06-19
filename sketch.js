function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  // fill(255);
  // noStroke();
  // text(hr + ":" + mn + ":" + sc, 10, 200);

  // strokeWeight(8);
  // stroke(255);
  // noFill();
  // ellipse(200, 200, 300, 300);
  noFill();
  strokeWeight(4);
  // stroke(60, 60, 60);
  // arc(0, 0, 50, 50, 0);

  stroke(255, 255, 50);
  let secAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secAngle);

  push();
  rotate(secAngle);
  stroke(255, 255, 50);
  line(0, 0, 100, 0);
  pop();

  stroke(0, 0, 255);
  let minAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minAngle);

  push();
  rotate(minAngle);
  stroke(0, 0, 255);
  line(0, 0, 75, 0);
  pop();

  stroke(255, 50, 50);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(hourAngle);
  stroke(255, 50, 50);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);
}
