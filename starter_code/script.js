var myDiv = document.getElementById("game-board");
var img = new Image();
img.src = "images/bg.png"

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  document.onkeydown = function(e){
    if(e.keyCode = 32){
      faby.speedY -= faby.gravity
      faby.y -= faby.speedY; 
    };
  }
  
    document.onkeyup = function(e){
      faby.speedY = 0.5
    }

  function startGame() {
    myGameArea.start();
    faby.drawFaby();    
  }

};


var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function(){
    this.canvas.width = 1200;
    this.canvas.height = 600;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
    myDiv.insertBefore(this.canvas, null);
    this.interval = setInterval(updateGameArea, 1000/60);
  }, 
}


var bgImg = {
  img: img,
  x: 0,
  speed: -1,

  move: function() {
    this.x += this.speed;
    this.x %= myGameArea.canvas.width;
  },

  draw: function() {
    myGameArea.ctx.drawImage(this.img, this.x, 0, myGameArea.canvas.width, myGameArea.canvas.height);
    if (this.speed < 0) {
      myGameArea.ctx.drawImage(this.img, this.x + myGameArea.canvas.width, 0, myGameArea.canvas.width, myGameArea.canvas.height);
    } 
  }
}

function updateGameArea() {
  bgImg.move();
  bgImg.draw();
  faby.drawFaby();
  faby.update();
}

var faby = {
  x: 560,
  y: 250,
  width: 70,
  height: 50,
  drawFaby: function() {
    img2 = new Image();
    img2.src ="images/flappy.png";
    ctx = myGameArea.ctx;
    ctx.drawImage(img2, this.x, this.y, this.width, this.height);
  },
  speedX: 0,
  speedY: 0.5,
  gravity: 0.4,
  update: function() {
    hitBottom()
    this.speedY += this.gravity
    this.y += this.speedY;
    },
  }
  



function hitBottom () {
  var bottom = 600;
    if (faby.y >= bottom - faby.height) {
      faby.y = bottom - faby.height;
      clearInterval(myGameArea.interval)
    }
  }