var background1,cat1,cat2,cat3,cat4,cat,mouse,mouse1,mouse2,mouse3;

function preload() {
    background1=loadImage("garden.png");

    cat1=loadAnimation("cat1.png");
    cat2=loadAnimation("cat2.png","cat3.png");
    cat4=loadAnimation("cat4.png");

    mouse1=loadAnimation("mouse1.png");
    mouse2=loadAnimation("mouse2.png","mouse3.png");
    mouse4=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(870,600);
    mouse = createSprite(200,600);
    cat.addAnimation("catSleeping",cat1);
    cat.scale=.2;
    mouse.addAnimation("mouseStanding",mouse1);
    mouse.scale=.1;
}

function draw() {

    background(background1);
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX=0
    cat.addAnimation("catLastImage",cat4)
    cat.x=300
    cat.changeAnimation("catLastImage")
    mouse.addAnimation("mouseLastImage",mouse4)
    mouse.changeAnimation("mouseLastImage")
}

    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catRunning",cat2);
    cat.changeAnimation("catRunning");

    mouse.addAnimation("mouseStanding",mouse2);
    mouse.changeAnimation("mouseStanding");

    mouse.frameDelay=25;

}
}
