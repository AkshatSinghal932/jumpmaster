var canvas,rect1,rect2,rect3,rect4,box;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
 

rect1=createSprite(80,585,200,30);
rect1.shapeColor="red";
rect2=createSprite(300,585,200,30);
rect2.shapeColor="yellow";
rect3=createSprite(510,585,200,30);
rect3.shapeColor="green";
rect4=createSprite(720,585,200,30);
rect4.shapeColor="blue";

box=createSprite(random(20,750),300,50,50);
box.velocityX=7;
box.velocityY=6;


 }

function draw() {
    background(rgb(0,0,0));
   
    
    text(mouseX+ ","+ mouseY,200,200);  
    createEdgeSprites();
    box.bounceOff(edges);
    box.bounceOff(rect1);
    box.bounceOff(rect2);
    box.bounceOff(rect3);
    box.bounceOff(rect4);
 
    drawSprites();
}
