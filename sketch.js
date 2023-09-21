function setup(){
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

}

function draw(){
  background(0);
  
  translate(windowWidth/2,windowHeight/2);
  rotate(-90);
  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(10);
  stroke( 255, 90, 150);
  noFill();
  let secondAngle = map( sc, 0, 60, 0, 360);
  arc( 0, 0, 500, 500, 0 , secondAngle);
  push();
  rotate(secondAngle);
  line( 0, 0, 200, 0)
  pop();

  stroke(  150, 100, 255);
  let minuteAngle = map( mn, 0, 60, 0, 360);
  arc( 0 , 0, 470, 470 , 0, minuteAngle);
  push();
  rotate(minuteAngle);
  line( 0, 0, 150, 0)
  pop();


  stroke ( 150, 255, 100);
  let hourAngle = map( hr % 12, 0, 12, 0, 360);
  arc( 0, 0, 440, 440, 0, hourAngle);
  push();
  rotate(hourAngle);
  line( 0, 0, 100, 0)
  pop();

}

