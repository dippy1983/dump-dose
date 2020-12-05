
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;




function setup() {
	var createCanvas=(400, 300);


	engine = Engine.create();
	world = engine.world;

	
ground=new Ground(400,250,400,20)



	Engine.run(engine);
  
}


function draw() {
	background("black");
	Engine.update(engine)


	
  
ground.display()



  drawSprites();
 
}



