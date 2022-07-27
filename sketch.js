var sea,sea_waves;
var boat,boat_tide;
function preload(){
sea_waves = loadAnimation("sea.png")
boat_tide = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,400,400)
  sea.addAnimation("waves", sea_waves)
  sea.scale = 0.25;
  sea.addAnimation(sea.png)
  boat = createSprite(70,170,60,60)
  boat.addAnimation("tide", boat_tide)
  boat.scale = 0.27;

}

function draw() {
  background("lightblue");
  sea.velicityX = 5;
  
  if (sea.x <100) {
    sea.x=sea.width/2;
  }
  
  
  
  drawSprites();
 
}