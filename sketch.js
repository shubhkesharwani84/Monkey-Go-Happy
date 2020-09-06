var banana, bananaIMage
var foodGroup
var player, PlayerAnimation
var obstacleImage, obstacle
var obstaclesGroup
var backGround, backGroundImage
var score = 0;
var ground

function preload(){
bananaImage = loadImage("banana.png")
backGroundImage = loadImage("jungle.jpg")
obstacleImage = loadImage("stone.png")
playerAnimation = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png") 


}



function setup() {
  createCanvas(600, 400);
 backGround = createSprite(0,0,800,400)
 backGround.scale = 1.5
  backGround.addImage(backGroundImage)
  backGround.velocityX = -5

player = createSprite(50,320,10,10) 
  player.scale = 0.1
   player.addAnimation("running",playerAnimation)
  player.setCollider("rectangle",1,1,500,600) 
  player.debug = false;
  

  ground = createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;

foodGroup = createGroup();
obstaclesGroup = createGroup();  
  
}

function draw() {
  background(225);
 if(backGround.x<100){
    backGround.x=backGround.width/2;
  }
   
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
  player.velocityY = -12
  
  }
   
 player.velocityY = player.velocityY+0.8

  if(player.isTouching(foodGroup)){
    score = score+2;
    foodGroup.destroyEach();
    }
 
  switch(score){
        case 10: player.scale=0.12;
                break;
        case 20: player.scale=0.14;
                break;
        case 30: player.scale=0.16;
                break;
        case 40: player.scale=0.18;
                break;
        default: break;
    }
  
    if(obstaclesGroup.isTouching(player)){ 
        player.scale=0.08;} 
  
  
  

  player.collide(ground);
  obstacles();
  food();
  drawSprites();
  fill("white")
  textSize(20)
  text("score:"+score,290,20)
 
}

function food(){
var rand2 = (100,200)
  if (frameCount%80 === 0){
var banana = createSprite(400,rand2,40,40)
 banana.scale = 0.05;
  banana.addImage("banana",bananaImage)
  banana.velocityX = -4;
  foodGroup.add(banana);
  }
  
}

function obstacles(){
if(frameCount % 100 === 0){
 var obstacle = createSprite(800,340,10,10)
  obstacle.velocityX = -6
  obstacle.addImage(obstacleImage)
  obstacle.scale = 0.2
  obstacle.collide(ground)
  obstacle.setCollider("rectangle",10,8,350,200)
  obstacle.debug = false;
  obstaclesGroup.add(obstacle);
}}