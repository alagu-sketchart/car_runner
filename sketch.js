const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var world, engine;

var car1, car2, car3, wall;
var speed, weight;
function setup() {
  createCanvas(1500,400);
  
  car1= createSprite(200, 75, 80, 40);
  car2= createSprite(200, 175, 80, 40);
  car3= createSprite(200, 275, 80, 40);
  speed=random(55,90);
  weight=random(400,1500);
  wall=createSprite(1500,200,50,height);

  

}

function draw() {
  background(125,255,125); 
  
  car1.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;
  

  drawSprites();
}
