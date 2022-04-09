const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var mowglimowglianim;
var bg,bgimg;
var tiger,tigeranim;
var vine,vineimg1,vineimg2,vineimg3,vineimg4,vineimg5,vineimg6,vineimg7,vineimg8,vineimg9,vineselect,vinegrp;
var swing;
function preload() {
  //mowglianim=loadAnimation("assets/Mowgli/mowgli2.png","assets/Mowgli/mowgli3.png","assets/Mowgli/mowgli4.png","assets/Mowgli/mowgli5.png","assets/Mowgli/mowgli6.png","assets/Mowgli/mowgli7.png","assets/Mowgli/mowgli8.png","assets/Mowgli/mowgli9.png","assets/Mowgli/mowgli10.png","assets/Mowgli/mowgli11.png");
  tigeranim=loadAnimation("assets/Sher khan/tiger1.png","assets/Sher khan/tiger2.png","assets/Sher khan/tiger3.png","assets/Sher khan/tiger4.png","assets/Sher khan/tiger5.png","assets/Sher khan/tiger6.png","assets/Sher khan/tiger7.png","assets/Sher khan/tiger8.png","assets/Sher khan/tiger9.png","assets/Sher khan/tiger10.png","assets/Sher khan/tiger11.png","assets/Sher khan/tiger12.png");
  bgimg=loadImage("assets/Background/bg1.jpg");
  vineimg1=loadImage("assets/vines/vine1.png");
  vineimg2=loadImage("assets/vines/vine2.png");
  vineimg3=loadImage("assets/vines/vine3.png");
  vineimg4=loadImage("assets/vines/vine4.png");
  vineimg5=loadImage("assets/vines/vine5.png");
  vineimg6=loadImage("assets/vines/vine6.png");
  vineimg7=loadImage("assets/vines/vine7.png");
  vineimg8=loadImage("assets/vines/vine8.png");
  vineimg9=loadImage("assets/vines/vine9.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  bg=createSprite(1000,600,1300,20)
  bg.addImage(bgimg);
  bg.scale=1.4;

  /*mowgli=createSprite(400,170,30,50);
  mowgli.addAnimation("swinging",mowglianim);
  mowgli.scale=0.8;*/
  mowgli=new Mowgli(400,170);

  tiger=createSprite(150,600,40,25);
  tiger.addAnimation("running",tigeranim);
  tiger.scale=2.3;

  vinegrp=new Group();

  swing = new Swing(mowgli,{x:1600,y:100});
}

function draw() {
  background(255,255,255); 
  //background(bg);
  Engine.update(engine);
  runningBg();
  Vines();
  //mowgli.display();
  drawSprites();
  mowgli.display();
  swing.display();
}

function runningBg(){
 bg.velocityX=-5;
 if (bg.x < 500){
  bg.x = 950;
}
}

function Vines(){
  if(frameCount%50===0){
    //vine=createSprite(1600,100,30,20);
    vine=new VineClass(1600,100);
    var vineselect=Math.round(random(1,9));
    switch (vineselect){
      case 1: vine.addImage(vineimg1);
              vine.position.y=100;
             break;
      case 2: vine.addImage(vineimg2);
             break;
      case 3: vine.addImage(vineimg3);
             break;
      case 4: vine.addImage(vineimg4);
             vine.position.y=80;
             break;
      case 5: vine.addImage(vineimg5);
             vine.position.y=126;
             break;
      case 6: vine.addImage(vineimg6);
             vine.position.y=60;
             break;
      case 7: vine.addImage(vineimg7);
             vine.postition.y=60;
             break;
      case 8: vine.addImage(vineimg8);
             vine.position.y=140;
             break;
      case 9: vine.addImage(vineimg9);
             vine.position.y=160;
             break;
      default: break;
    }
    /*vine.scale=3;
    vine.velocityX=-4;*/
    vine.lifetime=1000;
    if (keyCode === 32) {
       Matter.Body.setPosition(mowgli,{x:vine.position.x,y:vine.position.y});
       swing.attach(mowgli);
       }
    vinegrp.add(vine);
    vine.display();
    mowgli.depth=vine.depth+1;
  }
              
       
}