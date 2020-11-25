
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,box1,box2,box3;
var dustbinImage;
function preload()
{
	dustbinImage = loadImage("dustbingreen.png");	
}

function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(200,200,10);
	ground = new Ground(750,height,1500,20);
	box1 = new Dustbin(1415,690,70,20);
	box2 = new Dustbin(1450,650,20,100);
	box3 = new Dustbin(1390,650,20,100);

	//keyPressed ();

	Engine.run(engine);
  
}


function draw() {
//rectMode(CENTER);
background(0);
box1.display();
box2.display();
box3.display();
ground.display();
ball.display();
image(dustbinImage,1420,650,100,100);
 
}
function keyPressed (){
	if (keyCode === UP_ARROW){
		//Matter.Body.applyForce(paperObject.Body,paperObject.Body.position,{x:85,y:-85});
		Matter.Body.applyForce(ball.body,ball.body.position,{x:33,y:-15});
	}
}