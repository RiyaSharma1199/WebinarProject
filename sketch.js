const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,ball,ground,rope; 

function setup(){
    canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(400,355,50,50);
    box2 = new Box(350,355,50,50);
    box3 = new Box(300,355,50,50);
    box4 = new Box(250,355,50,50);
    box5 = new Box(200,355,50,50);
    box6 = new Box(150,355,50,50);
    box7 = new Box(350,305,50,50);
    box8 = new Box(300,305,50,50);
    box9 = new Box(250,305,50,50);
    box10 = new Box(200,305,50,50);
    box11 = new Box(300,255,50,50);
    box12 = new Box(250,255,50,50);
    box13 = new Box(275,205,50,50); 
    
    ball = new Ball(10,10);
 

}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();

    ball.display();
  }


