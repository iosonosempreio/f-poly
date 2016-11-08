var polyAmount = 5,
  position = {}

function setup() {
  createCanvas(800,600)
  frameRate(30)
  position.x = mouseX
  position.y = mouseY
}

function draw() {
  background(0,0,0,50)
  
  var k = 10
  var points=random()*k + 2
  if(mouseX != pmouseX) {
    noStroke();
    fill(255);
    position.x = mouseX
    position.y = mouseY
    ellipse(position.x,position.y,50)
  }
  for (var i=1; i<=polyAmount; i++) {
    position.x += random(-k,k)*i
    position.y += random(-k,k)*i
    stroke(255)
    noFill()
    polygon(position.x, position.y, 50*random()/2, points)
  }
  
  
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}