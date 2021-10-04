var hr,mn,sc,scAngle,mnAngle,hrAngle;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  
  


    
  textSize(20)
  text("6",199,357)
  text("12",199,46)
  text("3",368,200)
  text("9",11,200)


  hr = hour()
  mn = minute()
  sc= second()

  angleMode(DEGREES)

  scAngle=map(sc,0,60,0,360);

  textSize(12)
  text("X:" + mouseX,210,210)
  text("Y:" + mouseY,220,220)

  translate(200,200)
  push()
  rotate(scAngle)
  stroke("red")
  line(0,0,80,70)
  pop()

  mnAngle=map(mn,0,60,0,360);
  push()
  rotate(mnAngle)
  stroke("blue")
  strokeWeight(3)
  line(0,0,100,100)
  pop()

  hrAngle=map(hr% 12,0,12,360)
  push()
  rotate(hrAngle)
  stroke("green")
  strokeWeight(5)
  line(0,0,80,80)
  pop()


  
  drawSprites();
}