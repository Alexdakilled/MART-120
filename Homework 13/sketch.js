    var x = 50;
    var y = 50;


    var enem_x = []
    var enem_y = []
    var enem_size = []
    var enem_rgb = []

    var enem_amount = 5




    var mousex = -100
    var mousey = -100

    function setup() 
    {
      createCanvas(1200, 900);

      for(var i = 0; i < enem_amount; i++){
        enem_x[i] = Math.floor(Math.random() * 1200)
        enem_y[i] = Math.floor(Math.random() * 900)
        enem_size[i] = Math.floor(Math.random() * 100) + 10

        // 2D array :P
        enem_rgb[i] = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
      }

    }

    function createPlayer(player_x, player_y, color_r, color_g, color_b){
      fill(color_r, color_g, color_b);
      circle(player_x, player_y, 25);
    }

    function movePlayer_X(player_x){
        if (keyIsDown(65)) 
        {
          player_x -= 10;
        }
        
        if (keyIsDown(68)) 
        {
          player_x += 10;
        }
        return player_x
    }

    function movePlayer_Y(player_y){
        if (keyIsDown(87)) 
        {
          player_y -= 10;
        }
        
        if (keyIsDown(83)) 
        {
          player_y += 10;
        }
        return player_y
    }

    function mouseObstacle(x, y){
        fill(24, 50, 200);
        circle(x, y, 50);
    }

    function randomObstacle(x, y, size, rgb){
        fill(rgb[0], rgb[1], rgb[2])
        circle(x, y, size);

    }

    function randomObstacleMove(coord){
      coord += Math.floor(Math.random() * 50) - 25
      return coord
    }

    function boundCheck(coord, bound){
        if (coord < 0) {
          coord = bound
        } 
        else if (coord > bound) {
          coord = 0
        }
    
      return coord
    }

    function makeExit(){
      fill(255,255,255);
      rect(1100, 400, 100, 100) 
    }

    function showWin(txt){
      textAlign(CENTER, CENTER);
      fill(255, 255, 255);
      textSize(100);
      text(txt, 600, 450);
    }

    function generateBorder(){
      stroke(255, 0, 255)
      strokeWeight(20)
      fill(0, 0, 0)
      rect(0, 0, 1200, 900)
      stroke(0, 0, 0)
      strokeWeight(0)
    }



    function draw() 
    {
      background(0);

      generateBorder()

      makeExit()

      createPlayer(x, y, 24, 200, 29)

      for(var i = 0; i < enem_amount; i++){
        randomObstacle(enem_x[i], enem_y[i], enem_size[i], enem_rgb[i])
      }

      if(x > 1100 && y > 400 && y < 500){
          showWin("You Win!!")
        }


      else{
        x = movePlayer_X(x)
        y = movePlayer_Y(y)


        for(var i = 0; i < enem_amount; i++){
        enem_x[i] = randomObstacleMove(enem_x[i])
        enem_y[i] = randomObstacleMove(enem_y[i])
        }
        
        
        x = boundCheck(x, 1200)
        y = boundCheck(y, 900)

        
        for(var i = 0; i < enem_amount; i++){
        enem_x[i] = boundCheck(enem_x[i], 1200)
        enem_y[i] = boundCheck(enem_y[i], 900)
        }

        mouseObstacle(mousex, mousey)

      }


    }


    function mousePressed() 
    {  
      mousex = mouseX;
      mousey = mouseY;
    
    }



