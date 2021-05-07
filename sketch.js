//Create variables here
var dog,dogHappy;
var database;
var foodS,foodStock;
var dogImg;

function preload()
{
	//load images here
dogImg=loadImage("images/dogImg.png");
dogHappy=loadImage("images/dogImg1.png");

}

function setup() {
   database=firebase.database();
	createCanvas(500,500);
  dog = createSprite(250,250,5,5);
  dog.addImage(dogImg);
  dog.scale=0.2;
  foodStock=database.ref("Food");
 foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here
  textSize(20);
  fill("white");
  stroke(2);
  textSize(20);
  text("Note:Press UP_ARROW Key To Feed Drago Milk!",30,30);
}
  //Function to read values from DB
  function readStock(data){
  foodS=data.val();
  }
  //Function to write values in DB
  function writeStock(x){
    if(x<=0){
      x=0;
    }
    else{
      x=x-1;
    }
  
  }


