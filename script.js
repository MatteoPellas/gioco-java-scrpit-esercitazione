function startGame() {
    myGameArea.start();
    myGameArea.draw(redsquare);
}
function updateGameArea() {
    myGameArea.wallpaper(wallpaper);
    redsquare.x+=redsquare.speedX;
    redsquare.y+=redsquare.speedY;
    myGameArea.draw(redsquare);
}
  
  

var myGameArea = {  
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 600;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 30);
    },
    draw : function(component){
        this.context.fillStyle=component.color;
        this.context.fillRect(component.x,component.y,component.width,component.height);
    },
    wallpaper: function(component){
        this.context.fillStyle=component.color;
        this.context.fillRect(component.x,component.y,component.width,component.height);
    }

}
var redsquare={
    width:20,
    height:20,
    x:10,
    y:120,
    color: "green",
    speedX : 0,
    speedY : 0
}
var wallpaper={
    width:1200,
    height:4800,
    x:0,
    y:0,
    color: "#f1f1f1"
}

//movimenti
let v=2
function moveup() {
    redsquare.speedY -= v;
  }
  
  function movedown() {
    redsquare.speedY += v;
  }
  
  function moveleft() {
    redsquare.speedX -= v;
  }
  
  function moveright() {
    redsquare.speedX += v;
  }

  function clearmove() {
      console.log ("ciao")
        redsquare.speedX -=1; 
        redsquare.speedY = 0; 
}



  
  


