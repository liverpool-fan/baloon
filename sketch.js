var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var database
var position
function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI

function draw() {
  background(bg);
var baloonPosition = database.ref('baloon/hight');
baloonPosition.on("value",readPosition, showError);
  if(keyDown(LEFT_ARROW)){
    updateHight(0,-10);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
   baloon.scale=baloon.scale -0.01;

  }
  else if(keyDown(RIGHT_ARROW)){
    updateHight(+10,0);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    baloon.scale=baloon.scale +0.01;
  }
  else if(keyDown(UP_ARROW)){
    updateHight(0,+10);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    baloon.scale=baloon.scale +0.01;
  }
  else if(keyDown(DOWN_ARROW)){
    updateHight(-10,0);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    baloon.scale=baloon.scale -0.01;
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function updateHight(x,y){
  database.ref('baloon/hight').set({
    'x': innerHeight.x + x ,
    'y': updateHight.y + y
  })
}

function redHight(data){
  height = data.val();
  baloon.x = hight.x;
  baloon.y = hight.y;
}

function showError(){
  console.log("Error in writing to the database")
}