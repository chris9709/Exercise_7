var picture = new Array(4);
var city = new Array(7);
var chewy;
var speed;
var story = new Array(17);
var picx = new Array(10);
var picy = new Array(10);
var sizex = new Array(10);
var sizey = new Array(10);
var pic;

function preload(){
  chewy = loadFont('data/Chewy.ttf');
  for( var i = 0; i < picture.length; i ++){
    picture[i] = loadImage("data/image" + i + ".jpg");
  }
  for( var i = 0; i < city.length; i ++){
    city[i] = loadImage("data/city" + i + ".jpg");
  }
}


function setup() {
  createCanvas(2000, 1000);
  background(255);
  story[0] = 'What is a city?';
  story[1] = 'What can represent a city?';
  story[2] = 'Buildings where people live and work at?';
  story[3] = 'More Higher buildings?';
  story[4] = 'Or the streets where people walked on every day?';
  story[5] = 'Maybe commercial centers?';
  story[6] = 'My answer is';
  story[7] = 'The city‘s story.';
  story[8] = 'And the way to find storys';
  story[9] = 'is to observe';
  story[10] = 'to look at common people you meet everyday';
  story[11] = 'I feel their feelings';
  story[12] = 'I experience their experiences';
  story[13] = 'I know them';
  story[14] = 'And I know the city';
  story[15] = 'I see storys ';
  story[16] = 'in your eyes';
  for(var i = 0 ; i < 10; i ++){
    picx[i] = random(800, 1400);
    picy[i] = random(50, 450);
    sizex[i] = random(300, 500);
    sizey[i] = random(300, 500);
  }
}

function draw() {
  background(255);
 
  frameRate = 10;
  speed = frameCount / 3;
  stroke(2);
  fill(102)
  textFont(chewy, 30);
  for(i = 0; i < story.length; i ++){
  if(frameCount > 100 * i){
    if(i < 15){
  text(story[i], 100, 500 + 50 * i- speed);}
     if(i >= 15){
      if(speed > 1100){
        speed = 1100;
      }
      textSize(100);
    text(story[i], 100, 100 * i - 100 - speed);
    } //end of if
  }// end of if
  }// end of for
  if(frameCount > 200){
    image(city[0], 800, 300, 500, 500);
  }//buildings
  if(frameCount > 300){
    image(city[1], 1100, 100, 400, 400);
  }//more buildings
  if(frameCount > 400){
    image(city[2], 850, 150, 350, 400);
    image(city[3], 1200, 200, 450, 450);
    image(city[4], 1000, 450, 350, 300);
  }//streets
  if(frameCount > 500){
    image(city[5], 800, 100, 500, 500);
    image(city[6], 1250, 250, 500, 500);
  }//centers
  for(var a = 7; a < 17; a ++){
  if(frameCount >= 100 * a){
    if(a < 11){
      pic = a - 7;
    }
    else if((a >= 11)& (a < 15)){
      pic = a - 11;
    }
     else if(a >= 15){
      pic = a - 15;
    }
    image(picture[pic], picx[a-7], picy[a-7], sizex[a-7], sizey[a-7]);
     
  
    }
  }
}// end of draw