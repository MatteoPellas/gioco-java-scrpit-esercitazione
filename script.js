function startGame() {
    myGameArea.start();
    myGameArea.draw(redsquare);
}
function updateGameArea() {
    myGameArea.wallpaper(wallpaper);
    myGameArea.structure(structure1);
    myGameArea.structure(structure2);
    redsquare.x+=redsquare.speedX;
    redsquare.y+=redsquare.speedY;
    
    myGameArea.draw(redsquare);
    
    if (redsquare.x-10<structure1.x){
        
        vLeft=0
        console.log("stop")
    }


    
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
    y:500,
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
var structure1={
    width:10,
    height:600,
    x:20,
    y:0,
    color: "black"
}
var structure2={
    width:10,
    height:600,
    x:580,
    y:0,
    color: "black"
}
//movimenti

let v=5
let vLeft=v

document.addEventListener("keydown",(event)=>{
    if (event.key=="a"){
        redsquare.speedX = -vLeft;
        console.log(redsquare)
    }
    if (event.key=="d"){
        redsquare.speedX = v;
    }
    if (event.key=="w"){
        redsquare.speedY = -v;
    }
    if (event.key=="s"){
        redsquare.speedY = v;
    }
})
document.addEventListener("keyup",(event)=>{
    if (event.key=="a"){
        redsquare.speedX = 0;
        
    }
    if (event.key=="d"){
        redsquare.speedX = 0;
    }
    if (event.key=="w"){
        redsquare.speedY = 0;
    }
    if (event.key=="s"){
        redsquare.speedY = 0;
    }
})



  function clearmove() {
        redsquare.speedX =0; 
        redsquare.speedY =0; 
}




  
  


