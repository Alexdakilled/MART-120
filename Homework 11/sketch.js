    var x = 50;
    var y = 50;

    var enem_x1 = Math.floor(Math.random() * 1200)
    var enem_x2 = Math.floor(Math.random() * 1200)

    var enem_y1 = Math.floor(Math.random() * 900)
    var enem_y2 = Math.floor(Math.random() * 900)

    var mousex = -100
    var mousey = -100

    function setup() 
    {
      createCanvas(1200, 900);
    }

    function draw() 
    {
      background(0);

      fill(255,255,255);
      rect(1100, 400, 100, 100) 

      fill(24, 200, 29);
      circle(x, y, 25);

      fill(200, 24, 29)
      circle(enem_x1, enem_y1, 80);

      fill(90, 24, 29)
      circle(enem_x2, enem_y2, 120);


      if(x > 1100 && y > 400 && y < 500)
      {
        textAlign(CENTER, CENTER);
        fill(255);
        textSize(100);
        text("YOU WIN!!", 600, 450);
      }

      else{
        if (keyIsDown(83)) 
        {
          y += 10;
        } 
        
        if (keyIsDown(87)) 
        {
          y -= 10;
        }
        
        if (keyIsDown(65)) 
        {
          x -= 10;
        }
        
        if (keyIsDown(68)) 
        {
          x += 10;
        }

        enem_x1 += Math.floor(Math.random() * 50) - 25
        enem_y1 += Math.floor(Math.random() * 50) - 25
        enem_x2 += Math.floor(Math.random() * 50) - 25
        enem_y2 += Math.floor(Math.random() * 50) - 25

        if (x < 0) {
          x = 1200
        } 
        else if (x > 1200) {
          x = 0
        }
        
        if (y < 0) {
          y = 900
        } 
        else if (y > 900) {
          y = 0
        }


        if (enem_x1 < 0) {  
          enem_x1 = 1200
        } 
        else if (enem_x1 > 1200) {
          enem_x1 = 0
        }

        if (enem_x2 < 0) {
          enem_x2 = 1200
        } 
        else if (enem_x2 > 1200) {
          enem_x2 = 0
        }

        if (enem_y1 < 0) {
          enem_y1 = 900
        } 
        else if (enem_y1 > 900) {
          enem_y1 = 0
        }

        if (enem_y2 < 0) {
          enem_y2 = 900
        } 
        else if (enem_y2 > 900) {
          enem_y2 = 0
        }

        fill(24, 50, 200);
        circle(mousex, mousey, 50);
      }


    }


    function mousePressed() 
    {  
      mousex = mouseX;
      mousey = mouseY;
    
    }



