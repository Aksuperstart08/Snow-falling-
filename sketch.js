var bgImg;
var boyAni, boyAni2, boy, boyImg;
var rightEdgeSprite, leftEdgeSprite;
var snowBigImg, snowSmallImg, snowflake;
var rdom, rdomX; 

function setup() {

  createCanvas(800,400);

  bgImg = loadImage("snow1.jpg");
  boyAni = loadAnimation("1.png","2.png", "3.png","4.png","5.png");
  boyAni2 = loadAnimation("1b.png","2b.png", "3b.png","4b.png","5b.png");
  boyImg = loadImage("3.png");

  boy = createSprite(100,280,100,200); 
  boy.addAnimation("walking", boyImg);

  rightEdgeSprite = createSprite(790,200,20,400);
  rightEdgeSprite.visible = false; 
  leftEdgeSprite = createSprite(10,200,20,400);
  leftEdgeSprite.visible = false; 

  snowBigImg = loadImage("snowflake big.png")
  snowSmallImg = loadImage("snowflake small .png")

 
}

function draw() {

  background(bgImg);  
  drawSprites();

  //to make the boy move if the user presses the space bar
  if(keyDown("SPACE")){
    boy.addAnimation("walking", boyAni)
    boy.velocityX = 2;
  }

  //to make the boy stop if the user presses 's'
  if(keyDown("S")){
    boy.addAnimation("walking",boyImg)
    boy.velocityX = 0;
  }

  //to make sure th boy does not go out of the frame and make him move the otherside
  if(boy.velocityX === 2 && boy.isTouching(rightEdgeSprite)) {
    boy.velocityX = -2
    boy.addAnimation("walking", boyAni2)
  }

  if(boy.velocityX === -2 && boy.isTouching(leftEdgeSprite)) {
    boy.velocityX = 2
    boy.addAnimation("walking", boyAni)
  }

  rdom = Math.round(random(1,3))
  rdomX = Math.round(random(30,770))

  if(rdom === 1 && frameCount % 40 === 0) { 
    snowflake = createSprite(rdomX,20,5,5)
    snowflake.addAnimation("falling", snowBigImg); 
    snowflake.velocityY = 2
    snowflake.lifetime = 170;
  } else if(rdom > 1 && frameCount % 40 === 0) { 
    snowflake = createSprite(rdomX,20,5,5)
    snowflake.addAnimation("falling", snowSmallImg); 
    snowflake.velocityY = 2
    snowflake.lifetime = 170;
  } else {

  }





}