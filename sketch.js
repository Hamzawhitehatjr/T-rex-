var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obstical1,obstical2,obstical3,obstical4,obstical5,obstical6
var cloudImage

function preload(){
  obstical1=loadImage("obstacle1.png")  
  obstical2=loadImage("obstacle2.png")
  obstical3=loadImage("obstacle3.png")
  obstical4=loadImage("obstacle4.png")
  obstical5=loadImage("obstacle5.png")
  obstical6=loadImage("obstacle6.png")
  cloudImage=loadImage("cloud.png")
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
}
 
function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(255);
  
  if(keyDown("space")&&trex.y>160) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  spawnClouds();
  spawnObstacles();
  
  
  trex.collide(invisibleGround);
  drawSprites();
}




function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(610,129,40,10);
    cloud.y = random(280,320);
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 134;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
  
}




function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand){
      case 1:    obstacle.addImage(obstical1);
    break;
    case 2:    obstacle.addImage(obstical2);
    break;
    case 3:    obstacle.addImage(obstical3);
    break;
    case 4:    obstacle.addImage(obstical4);
    break;
    case 5:    obstacle.addImage(obstical5);
    break;
    case 6:    obstacle.addImage(obstical6);
    break;
    default:break
    }
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
  }
  }