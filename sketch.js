var canvas;
var music;
var box;
var gameObject1, gameObject2, gameObject3, gameObject4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    gameObject1 = createSprite(100, 580, 185, 35);
    gameObject1.shapeColor = "blue";
    gameObject1.debug = true;
  
    gameObject2 = createSprite(350, 580, 185, 35);
    gameObject2.shapeColor = "yellow";
    gameObject2.debug = true;
  
   // gameObject3 = createSprite(300, 580, 100, 35);
   // gameObject3.shapeColor = "pink";
   // gameObject3.debug =true;
  
    //gameObject4 = createSprite(745, 580, 200, 35);
    //gameObject4.shapeColor = "green";
    //gameObject4.debug = true;


    //create box sprite and give velocity
    box = createSprite(600, 400, 50, 80);
    box.shapeColor = "white";
    box.debug = true;
    box.velocityY = +5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it bo
    drawSprites();
}
