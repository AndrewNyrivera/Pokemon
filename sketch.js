function makeHPbar(x,y){
  const height = 10;
  const width = 100;
  fill("white");
  rect(x,y,width,height,height/2);
  fill("green");
  rect(x,y,width,height, height/2);
}

function setup(){
  //canvase size
  createCanvas(800,600);
  //background color
  background(255,173,0);
}

let hp1 = 500;
let hp2 = 500;
let isp1turn = true; 

function draw(){
  // paint over last frame
  background(255,173,0);
  // pokemon
  fill(0,0,255);
  rect(50,250,100,100);
  fill(255,0,0);
  ellipse(700,300,100,100);
  rect(0, 600, 100, 100)
  fill(244, 149, 66);
  rect(50, 470, 700, 600);
  //ATTACK button
  fill (255,0,0);
  rect (150,50,500,100);
  //Text for attack button
  textSize(50);
  fill(55);
  text("ATTACK!", 300,115);
  //Random Damage 


  //Battle Box
  fill(55);
  text("POKEMON BATTLE MENU", 100,550);
  textSize(30);
  fill(55);
  strokeWeight(5);
  //Bio + Information 
  rect(0, 600, 100, 100);  
  
  // update info
  text("Hp: "+hp1, 50, 230);
  text("Hp: "+hp2, 650, 230);
  //hp bar
  const percentage = hp1/500;
  makeHPbar(100,150,percentage);
}





// x,y are coordinates of top left of rectangle
// w,h are the width and height of the rectangle
function isBoxClicked(x,y, w,h){
  const isBelowTop = mouseY > y;
  const isAboveBottom = mouseY < (y+h);
  const isRightOfLeft = mouseX > x;
  const isLeftofRight = mouseX < (x+w);
  const isInside = isBelowTop && isAboveBottom && isRightOfLeft && isLeftofRight;
  return isInside;
}
function attack(){
  let damage = Math.floor(Math.random()*200);
  if(isp1turn == true){
    hp1 = hp1 - damage;
    isp1turn = false;
  }
  else{
    hp2 = hp2 - damage;
    isp1turn = true;
  }
  if(hp1< 0){
    alert("Player 1 Wins");
  }
  if(hp2 < 0){
    alert("Player 2 Wins");
  }
  
 } 


function mouseClicked(){
  if(isBoxClicked(150,50,500,100)){
    attack();
  }
}

