var Vampire = true
var Stand_User = false
var DIO;
var DIO_idle, DIO_Stand_idle, DIO_walkingRight, DIO_walkingLeft, DIO_Stand_walkingRight, DIO_Stand_walkingLeft;

function preload(){
  DIO_idle = loadAnimation("DIO_idle/DIO0.png", "DIO_idle/DIO1.png", "DIO_idle/DIO2.png", "DIO_idle/DIO3.png", "DIO_idle/DIO4.png", "DIO_idle/DIO5.png");
  
  DIO_Stand_idle = loadAnimation("DIO_Stand_idle/Dio0.png", "DIO_Stand_idle/DIO1.png", "DIO_Stand_idle/DIO2.png", "DIO_Stand_idle/DIO3.png", "DIO_Stand_idle/DIO4.png", "DIO_Stand_idle/DIO5.png", "DIO_Stand_idle/DIO6.png", "DIO_Stand_idle/DIO7.png", "DIO_Stand_idle/DIO8.png", "DIO_Stand_idle/DIO9.png", "DIO_Stand_idle/DIO10.png", "DIO_Stand_idle/DIO11.png", "DIO_Stand_idle/DIO12.png", "DIO_Stand_idle/DIO13.png", "DIO_Stand_idle/DIO14.png", "DIO_Stand_idle/DIO15.png", "DIO_Stand_idle/DIO16.png", "DIO_Stand_idle/DIO17.png");

  DIO_walkingRight = loadAnimation("DIO_walkingRight/DIO0.png", "DIO_walkingRight/DIO1.png","DIO_walkingRight/DIO2.png", "DIO_walkingRight/DIO3.png", "DIO_walkingRight/DIO4.png", "DIO_walkingRight/DIO5.png", "DIO_walkingRight/DIO6.png", "DIO_walkingRight/DIO7.png", "DIO_walkingRight/DIO8.png", "DIO_walkingRight/DIO9.png", "DIO_walkingRight/DIO10.png", "DIO_walkingRight/DIO11.png", "DIO_walkingRight/DIO12.png", "DIO_walkingRight/DIO13.png", "DIO_walkingRight/DIO14.png", "DIO_walkingRight/DIO15.png");

  DIO_Stand_walkingRight = loadAnimation("DIO_Stand_walkingRight/DIO0.png", "DIO_Stand_walkingRight/DIO1.png","DIO_Stand_walkingRight/DIO2.png", "DIO_Stand_walkingRight/DIO3.png", "DIO_Stand_walkingRight/DIO4.png", "DIO_Stand_walkingRight/DIO5.png", "DIO_Stand_walkingRight/DIO6.png", "DIO_Stand_walkingRight/DIO7.png", "DIO_Stand_walkingRight/DIO8.png", "DIO_Stand_walkingRight/DIO9.png", "DIO_Stand_walkingRight/DIO10.png", "DIO_Stand_walkingRight/DIO11.png", "DIO_Stand_walkingRight/DIO12.png", "DIO_Stand_walkingRight/DIO13.png", "DIO_Stand_walkingRight/DIO14.png", "DIO_Stand_walkingRight/DIO15.png");
}

function setup() {
  createCanvas(1200, 400);
  DIO = createSprite(200,200,50,50);
  DIO.addAnimation("idle", DIO_idle);
  DIO.addAnimation("Stand_idle", DIO_Stand_idle);
  DIO.addAnimation("walking_Right", DIO_walkingRight);
  DIO.addAnimation("Stand_walking_Right", DIO_Stand_walkingRight);
  DIO.scale=1.5
  //DIO.shapeColor=("red");
  
}

function draw() {
  background(220);

  if(keyDown("1")){
  Vampire = false;
  Stand_User = true
    }
    
    if(keyDown("2")){
      
      Vampire = true;
      Stand_User = false;
    }

 vampireMode();
 standUserMode();

  drawSprites();
}

function standUserMode(){
 if(Stand_User === true){
  DIO.changeAnimation("Stand_idle", DIO_Stand_idle);

  if(keyDown("d")){
    DIO.changeAnimation("Stand_walking_Right", DIO_Stand_walkingRight);
    DIO.x = DIO.x + 5;
  }else{
    DIO.changeAnimation("Stand_idle", DIO_Stand_idle);
  }
 }
}

function vampireMode(){
  if(Vampire === true){
    DIO.changeAnimation("idle", DIO_idle);

    if(keyDown("d")){
      DIO.changeAnimation("walking_Right", DIO_walkingRight);
      DIO.x = DIO.x + 5;
    }else{
      DIO.changeAnimation("idle", DIO_idle);
    }
  }
}