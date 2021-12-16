function startGame() {
    myGameArea.start();
    myGameArea.draw(redsquare);
}
function updateGameArea() {
    myGameArea.wallpaper(wallpaper);
   
    
    if (redsquare.x<wallpaper.x+v && redsquare.speedX<0){
        vLeft=0
        redsquare.speedX=0
    }
    if (redsquare.x>wallpaper.x+1500-redsquare.width-v && redsquare.speedX>0){
        vRight=0
        redsquare.speedX=0
          
    }
    if (redsquare.y>wallpaper.y+900-redsquare.width-v && redsquare.speedY>0){
        gravity=0
        redsquare.speedY=0
        redsquare.y=850
        
    }
    if (redsquare.y<wallpaper.y+900-redsquare.width-v ){
        redsquare.speedY+=1;
        
        jump = 0
        
    }
    
    else{
        vLeft=v
        vRight=v
        gravity=3
        jump=10
    }
    
    redsquare.x+=redsquare.speedX;
    redsquare.y+=redsquare.speedY;
    myGameArea.draw(redsquare);
}
let v=5
let vLeft=v
let vDown=v
let vRight=v
let jump=10
let gravity=3
  

var myGameArea = {  
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1500;
        this.canvas.height = 900;
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
    },
    structure : function(component){
        this.context.fillStyle=component.color;
        this.context.fillRect(component.x,component.y,component.width,component.height);

    }

}
var redsquare={
    width:50,
    height:50,
    x:300,
    y:400,
    color: "green",
    speedX : 0,
    speedY : 0
}
var wallpaper={
    width:1500,
    height:900,
    x:0,
    y:0,
    color: "#f1f1f1"
}


//movimenti



document.addEventListener("keydown",(event)=>{
    if (event.key=="a"){
        redsquare.speedX = -vLeft;
        
    }
    if (event.key=="d"){
        redsquare.speedX = vRight;
    }
    if (event.key==" "){
        redsquare.speedY = -jump;
    }
   
})
document.addEventListener("keyup",(event)=>{
    if (event.key=="a"){
        redsquare.speedX = 0;
        
    }
    if (event.key=="d"){
        redsquare.speedX = 0;
    }
    if (event.key==" "){
        redsquare.speedY = jump;
    }
   
})