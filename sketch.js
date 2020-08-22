
var min, sec, hr, minangle, secangle, hrangle;


function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background("black");  
  drawSprites();
  
  translate(200,200)
  rotate(-90)

  min = minute();
  sec = second();
  hr = hour();
  
  angleMode(DEGREES)

  secangle = map(sec,0,60,0,360)
  minangle = map(min,0,60,0,360)
  hrangle = map(hr %12,0,12,0,360)

  
  //sec
  push()
  rotate(secangle)
  stroke("purple")
  strokeWeight(7)
  line (0,0,75,0)
  pop()
  
  push()
  rotate(minangle)
  stroke("red")
  strokeWeight(7)
  line (0,0,75,0)
  pop()
  
  push()
  rotate(hrangle)
  stroke("yellow")
  strokeWeight(7)
  line (0,0,37,0)
  pop()
  
  stroke ("blue")
  strokeWeight (5)
  point(0,0)
  stroke("lightgreen")
  noFill()
  stroke ("purple")
  strokeWeight (7)
  arc (0,0,300,300,0,secangle)

  stroke("lightgreen")
  noFill()
  stroke ("red")
  strokeWeight (7)
  arc (0,0,280,280,0,minangle)

  stroke("lightgreen")
  noFill()
  stroke ("yellow")
  strokeWeight (7)
  arc (0,0,260,260,0,hrangle)
}