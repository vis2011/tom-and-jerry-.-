var cat;
var mouse;
var garden,gImage;

function preload(){
  garden=loadImage("garden.png");
  mouseStarting=loadAnimation("mouse1.png");
  mouseTeasing=loadAnimation("mouse2.png" , "mouse3.png");
  mouseStopping=loadAnimation("mouse4.png");
  catSleeping=loadAnimation("cat1.png");
  catWalking=loadAnimation("cat2.png" , "cat3.png");
  catStopping=loadAnimation("cat4.png");
}

function setup() {
  createCanvas(800,400);
  mouse=createSprite(100, 310, 50, 50);
  mouse.addAnimation("mouseComing" , mouseStarting);
  mouse.scale=0.1;
  mouse.setCollider("rectangle",0,0,1,1);
  cat=createSprite(684 ,210 ,80 ,50);
  cat.addAnimation("catStarting" , catSleeping);
  cat.scale=0.1;
  cat.setCollider("rectangle",0,0,1,1);
}

function draw() {
  background(garden);  

  cat.addAnimation("catStarting" , catSleeping);
  mouse.addAnimation("mouseComing" , mouseStarting);

if(cat.x+80 - mouse.x <=mouse.width/2+cat.width/2){
  cat.addAnimation("cat_stopping",catStopping);
  cat.changeAnimation("cat_stopping",catStopping);
  mouse.addAnimation("mouse_stopping",mouseStopping);
  mouse.changeAnimation("mouse_stopping",mouseStopping);
  cat.velocityX=0;
  cat.velocityY=0;
  }
  else{
    mouse.changeAnimation("mouse_teasing",mouseTeasing);
    cat.changeAnimation("cat_walking",catWalking);
  }

  text(mouseX+", "+mouseY,mouseX,mouseY);

  drawSprites();
}

function keyPressed(){
  if(keyCode==DOWN_ARROW){
    cat.velocityY=2;
    cat.velocityX=0;
    cat.addAnimation("cat_walking",catWalking)
    cat.changeAnimation("cat_walking",catWalking);
    mouse.addAnimation("mouse_teasing",mouseTeasing);
    mouse.changeAnimation("mouse_teasing",mouseTeasing);
  }

  else if(keyCode==LEFT_ARROW){
    cat.velocityX=-2;
    cat.velocityY=0;
    cat.addAnimation("cat_walking",catWalking)
    cat.changeAnimation("cat_walking",catWalking);
    mouse.addAnimation("mouse_teasing",mouseTeasing);
    mouse.changeAnimation("mouse_teasing",mouseTeasing);
  }
}