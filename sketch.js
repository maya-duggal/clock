function setup() {
  ellipseMode(CENTER);
  createCanvas(600,600);

  angleMode(DEGREES);

}

function draw() {
  background("black");

  let hr = hour();
  let mn = minute();
  let sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);

  

  translate(300, 300);
  
 //the second hand
  push ();
  rotate(scAngle);
  
  stroke(255, 20, 147);
  strokeWeight(7);
  line(0, 0, 100, 150);
  pop(); 
  
  //the minute hand
  push ();
  rotate(mnAngle);

  stroke(0, 206, 209);
  strokeWeight(7);
  line(0, 0, 100, 125);
  pop(); 

  //the hour hand
  push ();
  rotate(hrAngle);
  stroke(148, 0, 211);
  strokeWeight(7);
  line(0, 0, 100, 100);
  pop(); 

  drawSprites();
}