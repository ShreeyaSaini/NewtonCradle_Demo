const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//declaring variables
var bobObject1, bobObject2, bobObject3, bobObject4;
var roof;
var rope1, rope2, rope3, rope4;

function setup() {
	createCanvas(800, 700);

    engine = Engine.create();
	world = engine.world;
  
	//create the bobs
	 bobObject1 = new Bob(420,550);
   bobObject2 = new Bob(381,550);
   bobObject3 = new Bob(459,550);
   bobObject4 = new Bob(342,550);
   
   //create the roof
     roof = new Roof(400,350,160,30);

     //create the ropes to attach the bob to the roof
    rope1 = new Rope(roof.body, bobObject4.body);
    rope2 = new Rope(roof.body, bobObject2.body);
    rope3 = new Rope(roof.body, bobObject1.body);
    rope4 = new Rope(roof.body, bobObject3.body);
    
	Engine.run(engine);
}


function draw() {
  background(0);
  
  //display the bobs
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();

//display the roof
  roof.display();

//display the ropes
rope1.display();
rope2.display();
rope3.display();
rope4.display();

drawSprites();
}



