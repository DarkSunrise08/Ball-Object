function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(ball.color[2]);
  ellipse(ball.x,ball.y,ball.radius,ball.radius);
  ball.x+=ball.xSpeed;
  ball.y+=ball.ySpeed;
}

var ball = {
  color:["red","blue","green"],
  x:200,
  y:200,
  xSpeed:5,
  ySpeed:4,
  radius:15,
}