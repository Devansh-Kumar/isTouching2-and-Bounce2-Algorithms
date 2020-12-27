var fixedRect,movingRect;
var rect1,rect2;
function setup() {
  createCanvas(800,400);

fixedRect =createSprite(400,250,30,10);
fixedRect.shapeColor = ("green");
movingRect =createSprite(300,250,50,15);
movingRect.shapeColor = ("green");
movingRect.velocityX = 5;
fixedRect.velocityX = -5;
rect1 =createSprite(200,200,100,15);
rect1.shapeColor = ("green");
rect2 =createSprite(200,300,50,15);
rect2.shapeColor = ("green");
rect1.velocityY = 5;
rect2.velocityY = -5;
}

function draw() {
  background(0); 

  console.log(movingRect.x-fixedRect.x);
  if (isTouching(rect1,rect2)){
  rect1.shapeColor = ("red");
  rect2.shapeColor = ("red");  
  }

  else{
  rect1.shapeColor = ("green");
  rect2.shapeColor = ("green");   
  }
  bounce(rect1,rect2);

  drawSprites();
}


