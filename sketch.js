var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var SurvivalTime = 0;
var Score;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {



  monkey = createSprite(80, 315, 900, 10);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1

  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x)


}


function draw() {
  background("white");

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  stroke("white");
  textSize(20);
  fill("white");
  text("Score :" + Score, 500, 50);

  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime = Math.ceil(frameCount / frameRate())
  text("Survival Time:" + SurvivalTime, 100, 50);




  if (keyDown("space") && monkey.y >= 100) {
    monkey.velocityY = -12;
  }

  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)



  drawSprites()
  createFood()
  spawnObstacles()
}

function createFood() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(170, 200, 10, 10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.lifetime = 154;
    banana.scale = 0.1;

  }
}

function spawnObstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(170, 200, 10, 10);
    obstacle.y = Math.round(random(120, 200));
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.lifetime = 154;
    obstacle.scale = 0.1;
  }
}