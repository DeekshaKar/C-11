
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png");
shipImg2 = loadAnimation("ship-2.png");
shipImg3 = loadAnimation("ship-3.png");
shipImg4 = loadAnimation("ship-4.png");
}

function setup(){
  createCanvas(400,400);
}

function draw() {
  background("blue");
  spriteName.addImage(seaImg);

 
 if(sea.x<0){
   sea.x = sea.width/2;
 }
}