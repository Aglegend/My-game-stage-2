
var object = [];

function preload(){
    bg= loadImage("BG/BG.png");
    object1img = loadImage("Tiles/2.png");
    object2img = loadImage("Tiles/15.png");
    playerimg = loadImage("Object/man.png");
    //object3img = loadImage
}

function setup() {
    createCanvas(800, 800);
    player = createSprite(50,650,20,20)
    player.addImage(playerimg);
    object2img = createSprite(200,700,200,30)
   ground = createSprite(width/2,height-50,width,50)
    //object1 = createSprite(-300,740,20,20);
   // object1.addImage(object1img);
  
  for(var i = -300 ;i<1000;i+=100){
    object.push(createSprite(i,740,20,20));
  }

  
  object[0].addImage(object1img)
  object[1].addImage(object1img)
 
  
}
  function draw() {
    background(bg,50,50);
     if(keyDown(LEFT_ARROW)){
          player.x = player.x-5
    }
   
    if(keyDown(RIGHT_ARROW)){
        player.x = player.x+5
    }

    if(keyDown(UP_ARROW)){
        player.velocityY = -12;
    }
    player.velocityY = player.velocityY+1
    
    player.collide(ground);

    
  
    
    //player.x=camera.position.x;
    //player.y=camera.position.y;
    camera.position.x =player.x;

    drawSprites();
}