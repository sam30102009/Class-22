const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var ground;
var ground_option;
var b;
var bo;

function setup() {
createCanvas(400,400);
engine = Engine.create();
world = engine.world;
ground_option = {
  isStatic : true
}

ground= Bodies.rectangle(200,390,50,50,ground_option);

World.add(world,ground);
bo = {
  restitution : 1
  }

b = Bodies.circle(200,200,10,bo);

World.add(world,b);

}


function draw() {
background(0);
Engine.update(engine);
rectMode(CENTER);
rect (ground.position.x,ground.position.y,400,10);

ellipseMode(RADIUS);
ellipse(b.position.x,b.position.y,10,10)
}