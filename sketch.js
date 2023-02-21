var path, pathImg;

var miner, minerImg;

var base, baseImg, baseGroup, fakeBase, FakeBaseGroup;

var score; 

var score = 0;

var PLAY = 1; 

var END = 0; 

var RIP = 0;

var gamestate = PLAY; 

 




function preload(){
  pathImg = loadImage("mina.png");
  minerImg = loadImage("miner.png");
  baseImg = loadImage("climber.png");
}

function setup(){
  createCanvas(600, 600);

  
  path = createSprite(300, 300, 600, 600);
  path.addImage(pathImg);
  path.scale = 6;

  miner = createSprite(300, 300);
  miner.addImage(minerImg);
  

  
}

function draw(){
  text("lifeTime: "+ score, 500,50);
  if (gamestate === PLAY){
  score = score + Math.round(getFrameRate()/60);
  path.velocityY = +(6 + 3*score/100);



  score = score - Math.round(getFrameRate()/60);

  if(path.y > 600 ){
    path.y = 300
  } 

  if(miner.y > 600 || miner.y < 0){
     gamestate = END; 
  }

  if (miner.isTouching(fakeBase)){
    gamestate = RIP;
  }


  spawnClimbs();
  spawnfakeclimbs();

  }

  if (gamestate === RIP){
    path.velocity = 0;
  }




   

  



 
  
  drawSprites();
  

  console.log(score);
}





function spawnClimbs(){
   if (frameCount % 50 === 0){
    base = createSprite(0, -50);
    base.scale = 1.5;
    base.velocityY = +(6 + 3*score/100);
    base.addImage(baseImg);
    base.x = Math.round(random(120, 400));
    baseGroup.add(base);
   }
}


function spawnfakeclimbs(){
  if (frameCount % 50 === 0){
    fakeBase = createSprite(0, -50);
    fakeBase.scale = 1.5;
    fakeBase.velocityY = +(6 + 3*score/100);
    fakeBase.addImage(baseImg);
    fakeBase.x = Math.round(random(120, 400));
    FakeBaseGroup.add(fakeBase);
  }  
}