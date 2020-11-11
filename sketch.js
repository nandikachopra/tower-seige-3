const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand;
var slingShot;
var polygon_img;
var score=0;

function preload(){
  getTime();
  polygon_img=loadImage("polygon.png");
 }

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand = new Stand(390,300,250,10);
  
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //polygon holder with Slings
  polygon= Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw() {
  background(56,44,44);
  
  textSize(20);
  fill("black");
  text("Drag the Polygon to destroy the blocks",300,30);
  textSize(10);
  text("Press Space to get a second chance!",650,350);
  ground.display();
  stand.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
  
  slingShot.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  text("SCORE:"+score,750,40);
  Engine.update(engine);

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
    if(keyCode===32){
     slingShot.attach(this.polygon);
	}
}
async function getTime(){
    var response= await fetch("http://worldtimeapi.org/api/timezone/America/Vancouver");
    var js1= await response.json();

    var dt= js1.datetime;
    var hr= dt.slice(11,13);
        console.log(hr);
        if(hr>06 && hr<18){
         background("light blue");
        }else{
         background("dark blue"); 
		}
}