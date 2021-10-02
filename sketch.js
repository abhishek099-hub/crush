
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var ball;
var groundObj,ground1,g2,g3;


function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
  rectMode(CENTER);
  ellipseMode(RADIUS);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   var ball_options={
		restitution:0.5,
   
		isStatic:false,
		friction:0,
   density:0.3
   } 
     groundObj = {
       isStatic:true
     }
    ground1 = Bodies.rectangle(400,450,800,10,groundObj);
    World.add(world,ground1)
    g2 = Bodies.rectangle(500,420,10,70,groundObj);
    World.add(world,g2);
    g3 = Bodies.rectangle(700,420,10,70,groundObj);
    World.add(world,g3)
	  ball = Bodies.circle(140,220,30,ball_options);
    World.add(world,ball);
  
	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  Engine.update(engine);
   push()
   fill("blue")
  rect(ground1.position.x,ground1.position. y,800,10);
  rect(g2.position.x,g2.position.y,10,70);
 rect(g3.position.x,g3.position.y,10,70);
 // drawSprites();
  pop()
  push()
  fill("yellow")
  ellipse(ball.position.x,ball.position.y,30);
  pop ()
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:30,y:-30})
  }
}


