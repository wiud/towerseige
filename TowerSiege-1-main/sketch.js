const Engine = Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,stand1;
var sling,polygon;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
function setup(){
    var canvas = createCanvas(1500,750);
    engine = Engine.create();
    world = engine.world;
    text("drag the hexagonal stone to shoot at coloured blocks",750,50);
    fill(255,255,255);
    ground = new Ground(750,750,2000,20);
    stand=new Ground(900,600,375,10);
    block1=new Box(759.375,571.5625,46.875,46.875);
    block2=new Box(806.25,571.5625,46.875,46.875);
    block3=new Box(853.12,571.5625,46.875,46.875);
    block4=new Box(900,571.5625,46.875,46.875);
    block5=new Box(946.875,571.5625,46.875,46.875);
    block6=new Box(993.75,571.5625,46.875,46.875);
    block7=new Box(1040.625,571.5625,46.875,46.875);
    block8=new Box(806.25,524.6875,46.875,46.875);
    block9=new Box(853.12,524.6875,46.875,46.875);
    block10=new Box(900,524.6875,46.875,46.875);
    block11=new Box(946.875,524.6875,46.875,46.875);
    block12=new Box(993.75,524.6875,46.875,46.875);
    block13=new Box(853.12,477.8125,46.875,46.875);
    block14=new Box(900,477.8125,46.875,46.875);
    block15=new Box(946.875,477.8125,46.875,46.875);
    block16=new Box(900,430.9375,46.875,46.875);
    polygon=new Polygon(200,600,50,50);
    sling = new SlingShot(polygon.body,{x:200, y:600});
}
function draw(){
    background(0,0,0);
    Engine.update(engine);
    ground.display();
    stand.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    sling.display();
    polygon.display();
}

function mouseDragged(){
Matter.Body.setPosition(polygon.body, {x:mouseX,y:mouseY});
}
function mouseReleased(){
    sling.fly();
}