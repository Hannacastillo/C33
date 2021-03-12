const World=Matter.World;
const Engine= Matter.Engine;
const Bodies=Matter.Bodies;

var myengine,myworld;
var box1, box2,box3,box4,box5
var ground
var pig1,pig2
var log1,log2,log3,log4,log5
var bird1
var back
var platform,chain
var rope,rope2

var Gamestate="start"

var score=0

function preload(){

//back=loadImage("sprites/bg.png")
BackgroundImage()

birdFly=loadSound("sprites/sounds_bird_flying.mp3")
birdSelect=loadSound("sprites/sounds_bird_select.mp3")
pigSound=loadSound("sprites/sounds_pig_snort.mp3")

}

function setup() {
  createCanvas(1000,600);
  myengine=Engine.create();
  myworld=myengine.world;

 box1=new Box(700,550,60,60);
 box2=new Box(900,550,60,60)
 box3=new Box(700,450,60,60);
 box4=new Box(900,450,60,60)
 box5=new Box(800,250,60,60)
 
 pig1=new Pig(800,570)
 pig2=new Pig(800,470)

log1=new Log(800,500,260,PI/2)
log2=new Log(800,300,260,PI/2)
log3=new Log(750,250,130,PI/4)
log4=new Log(830,250,130,-PI/4)
//log5=new Log(250,250,130,-PI/2)

bird1=new Bird(150,330)

ground=new Ground(500,590,1000,20)

platform=new Ground(100,480,200,200)

rope=new SlingShot(bird1.body,{x:150,y:200})

//rope2=new Chain(pig1.body,log2.body)

//BackgroundImage()

}

function draw() {

  if (back!=null){

  background(back);
  }  

textSize(30)
fill("blue")

text("score-"+score,99,25)

  Engine.update(myengine);
 
//imageMode(CENTER)
//image(back,500,300,1000,600)


  box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
pig1.display()
pig2.display()
log1.display()
log2.display()
log3.display()
log4.display()
//log5.display()
bird1.display()

ground.display()

platform.display()

rope.display()
//rope2.display()

pig1.score()
pig2.score()

}



function mouseDragged(){

  if (Gamestate==="start"){
Matter.Body.setPosition(bird1.body,{x:mouseX,y:mouseY})
  }

}


function mouseReleased(){

birdFly.play()

  Gamestate="launched"
rope.fly()

}

function keyPressed(){

if (keyCode===32 && bird1.body.speed<1){
bird1.position=[]
birdSelect.play()


  Gamestate="start"

  Matter.Body.setPosition(bird1.body,{x:150,y:330})
  rope.attach(bird1.body)
}

}

async function BackgroundImage(){

var Data=await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles")
var Datajson=await Data.json()
console.log(Datajson)

var Time=Datajson.datetime
console.log(Time)

var hour=Time.slice(11,13)
console.log(hour)

if (hour>=06 && hour<=17){
bg=loadImage("sprites/bg.png")
}
else {bg=loadImage("sprites/bg2.jpg")}
back=bg

}




