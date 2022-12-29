var pessoa, ground, obstacle;


function preload(){

}

function setup() {
createCanvas(windowWidth,windowHeight);
 pessoa=createSprite(100,height-100,20,20);
 pessoa.shapeColor="blue";
    ground=createSprite(width/2,height-30,3000,120);
    ground.shapeColor="green";




}

function draw() {
background("lightblue")
drawSprites()
 if (keyDown("space")){
    pessoa.velocityY=-10;


 }
 pessoa.y=pessoa.velocityY+1
if (frameCount % 100 === 0){
    obstacle=createSprite(width,height-100,20,20)
    obstacle.velocityX=-10
}
if (pessoa.isTouching(obstacle)){
    obstacle.velocityX=0
}
pessoa.collide(ground)



}
