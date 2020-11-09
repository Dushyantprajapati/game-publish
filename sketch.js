const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;

var Alex;
var Steve;
var franklin; 
var back_img;
var ground1;

function preload(){

  back_img = loadImage("bg.jpeg");
}
function setup() {
  engine=Engine.create();
  world=engine.world
  createCanvas(800,530);


  ground1=new Ground(400,520,800,10);
  
  Steve=new Friend(400,480,10,50);
  franklin=new Gangsters(600,480,10,50);
  Alex=new Alex1(90,480,10,50);
}

function draw() {
  
  Engine.update(engine);
  background(back_img);

 
  Alex.display();
  Steve.display();
  franklin.display();
  Alex.display();
  ground1.display();


    drawSprites();
 
}

function keyPressed(){
  if(keyCode===65){
     Alex.moveBackward()
  }
  if(keyCode===68){
    Alex.moveForward();
}
  if(keyCode===87){
    Alex.Jump();
}
  if(keyCode===83){
    Alex.jump2();
} 
}
