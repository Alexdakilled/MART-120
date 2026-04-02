var left_pupil_x = 235
var right_pupil_x = 535

var eye_y = 200


var pupil_move;
var eye_move;
var title_size;

function setup() {
  createCanvas(800, 800);
  pupil_move = floor(random() * 8) + 1
  eye_move = floor(random() * 5) + 1
  title_size = 30
  title_grow = 2
}

function draw() {
  background(255);
  circle(250, eye_y, 100)
  circle(left_pupil_x, eye_y - 15, 20)

  
  circle(550, eye_y, 100)
  circle(right_pupil_x, eye_y - 15, 20)
  
  triangle(375, 300, 425, 300, 400, 275)
  
  line(250, 420, 550, 420)
  rect(450, 420, 70, 100)
  
  point(left_pupil_x, 185) 
  point(right_pupil_x, 185)
  
  textSize(30)
  text('Alex S', 650, 700);
  
  if(title_size >= 40 || title_size <= 20){
    title_grow *= -1
  }
  
  title_size += title_grow
  textSize(title_size)
  text('Me :P', 375, 80)
  
  
  
  if(left_pupil_x > 260 || left_pupil_x < 235){
    pupil_move *= -1;
  }
  
  if(eye_y > 250 || eye_y < 150){
    eye_move *= -1;
  }
  
  left_pupil_x += pupil_move;
  right_pupil_x += pupil_move;
  
  eye_y += eye_move;
    
}