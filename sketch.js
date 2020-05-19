const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var ball, slingshot;
var ground,ground2,platform;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    ball = new Ball(200,50,35);
    slingshot = new SlingShot(ball.body,{x:200, y:240});
    ground2 = new Ground(722,300,298,20);
    box1 = new Box(760,275,70,70);
    box2 = new Box(832,275,70,70);
    box3 = new Box(687,275,70,70);
    box4 = new Box(620,275,70,70);
    box5 = new Box(650,155,70,70);
    box6 = new Box(722,155,70,70);
    box7 = new Box(794,155,70,70);
    box8 = new Box(686,95,70,70);
    box9 = new Box(758,95,70,70);
    box10 = new Box(725,35,70,70);
    platform = new Ground(200,550,400,300);
  



}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(2);
    push();
    fill("blue");
    stroke("orange");
    textSize(20);
    text("PRESS SPACEBAR TO GET THE BALL BACK",80,50);
    pop();
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
    platform.display();


    ground.display();
    ball.display();
    slingshot.display();    
    ground2.display();
}

function mouseDragged(){
   Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
       slingshot.attach(ball.body); 
    }
}