const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg, bgImg, ball, ballImg;
var form, database;
var red1, red2, red3, red4, red5, red6, red7, red8, red9;
var blue1, blue2, blue3, blue4, blue5, blue6, blue7, blue8, blue9;
var red1Img, red2Img, red3Img, red4Img, red5Img, red6Img, red7Img, red8Img, red9Img;
var blue1Img, blue2Img, blue3Img, blue4Img, blue5Img, blue6Img, blue7Img, blue8Img, blue9Img;


function preload(){
  bg = loadImage("Images/soccerField.png");
  bg.scale = 0.6

  red1Img = loadImage("Images/redTeam/redOne.png");
  red2Img = loadImage("Images/redTeam/redTwo.png");
  red3Img = loadImage("Images/redTeam/redThree.png");
  red4Img = loadImage("Images/redTeam/redFour.png");
  red5Img = loadImage("Images/redTeam/redFive.png");
  red6Img = loadImage("Images/redTeam/redSix.png"); 
  red7Img = loadImage("Images/redTeam/redSeven.png");
  red8Img = loadImage("Images/redTeam/redEight.png");
  red9Img = loadImage("Images/redTeam/redNine.png");

  blue1Img = loadImage("Images/blueTeam/blueOne.png");
  blue2Img = loadImage("Images/blueTeam/blueTwo.png");
  blue3Img = loadImage("Images/blueTeam/blueThree.png");
  blue4Img = loadImage("Images/blueTeam/blueFour.png");
  blue5Img = loadImage("Images/blueTeam/blueFive.png");
  blue6Img = loadImage("Images/blueTeam/blueSix.png"); 
  blue7Img = loadImage("Images/blueTeam/blueSeven.png");
  blue8Img = loadAnimation("Images/blueTeam/blueEight.png");
  blue9Img = loadImage("Images/blueTeam/blueNine.png");

  

}

function setup() {
  createCanvas(1280,570);
 
  red1 = createSprite(50,50)
  red1.addAnimation("redPlayerOne", red1Img)
  red1.scale = 0.05

  engine = Engine.create();
  world = engine.world;

  ball = new Ball()
  
 }

function draw() {
  bg.scale = 0.6
 
background(bg)
Engine.update(engine)
drawSprites()

ball.display()
}

