
var trex ,trex_running;
var edges;
var ground,groundImage;

function preload(){
  // to load animation
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

groundImage = loadImage("ground1.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,140,20,50)
trex.addAnimation("running",trex_running);
trex.scale = 0.5
edges =  createEdgeSprites()

//create ground

ground = createSprite(300,180,600,20)
ground.addImage("groungImg",groundImage)
ground.velocityX= - 4
ground.x = ground.width/2

}



function draw(){
  background(240);

  drawSprites();
//making trex jump
  if(keyDown("space")){
    trex.velocityY=-13
  }

  //adding gravity
   trex.velocityY = trex.velocityY + 0.5;

//resetting the ground
  if(ground.x < 0){
    ground.x = ground.width/2
  }
// stopping the trex going downwards
   trex.collide(ground)
}
