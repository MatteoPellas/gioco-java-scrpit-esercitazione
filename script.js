function startGame() {
    myGameArea.start();
    myGameArea.draw(animatedObject);
    animatedObject.loadImages();
    
}
function updateGameArea() {
    
    myGameArea.draw(wallpaper);
    myGameArea.draw(ostacolo);
    myGameArea.drawGameObject(animatedObject);
    
    if (pausa==true){
        animatedObject.update();
    }
    
    if (animatedObject.x<wallpaper.x+v && animatedObject.speedX<0){
        vLeft=0
        animatedObject.speedX=0
    }
    if (animatedObject.x>wallpaper.x+1500-animatedObject.width-v && animatedObject.speedX>0){
        vRight=0
        animatedObject.speedX=0
          
    }
    if (animatedObject.y>wallpaper.y+900-animatedObject.width-v && animatedObject.speedY>0){
        jump-=gravity
        animatedObject.speedY=0
        animatedObject.y=800
        
    }
    if (animatedObject.y<wallpaper.y+900-animatedObject.width-v ){
        animatedObject.speedY+=1;
        
        jump-=gravity
        
    }
    
    else{
        vLeft=v
        vRight=v
        gravity=1
        jump=10
    }

    
    if (ostacolo.x<wallpaper.x){
        ostacolo.x=1500
    }
    
    ostacolo.x+=ostacolo.speedX;
    ostacolo.y+=ostacolo.speedY;
    
}
let v=5
let vLeft=v
let vDown=v
let vRight=v
let jump=10
let gravity=1
let pausa=false
  

var myGameArea = {  
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1500;
        this.canvas.height = 900;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 5);
    },
    draw : function(component){
        this.context.fillStyle=component.color;
        
        this.context.fillRect(component.x,component.y,component.width,component.height);
    },
    
    drawGameObject: function(gameObject) {
        this.context.drawImage(
          gameObject.image,
          gameObject.x,
          gameObject.y,
          gameObject.width,
          gameObject.height
        );
    }
    

}

var wallpaper={
    width:1500,
    height:900,
    x:0,
    y:0,
    color: "green"
}
var ostacolo={
    width:20,
    height:100,
    x:900,
    y:800,
    color: "red",
    speedX: 0,
    speedY: 0
}


//movimenti



document.addEventListener("keydown",(event)=>{
    if (event.key=="d"){
        ostacolo.speedX = -vLeft;
        pausa=true
    }
    if (event.key=="a"){
        ostacolo.speedX = vRight;
        pausa=true
    }
    if (event.key==" "){
        animatedObject.speedY = -jump;
    }
   
})
document.addEventListener("keyup",(event)=>{
    if (event.key=="d"){
        ostacolo.speedX = 0;
        pausa = false
    }
    if (event.key=="a"){
        ostacolo.speedX = 0;
        pausa = false
    }
    if (event.key==" "){
        animatedObject.speedY = jump;
    }
   
})

var animatedObject = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 100,
    x: 10,
    y: 120,
    imageList: [], //Vettore che conterrà tutte le immagini caricate
    contaFrame: 0, //Tiene conto di quanti frame sono passati
    actualFrame: 0, //Specifica quale frame disegnare
  
    update: function() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.contaFrame++;
      if (this.contaFrame == 20) {
        this.contaFrame = 0;
        this.actualFrame = (1 + this.actualFrame) % this.imageList.length;
        
        this.image = this.imageList[this.actualFrame];
      }
    },
  
    loadImages: function() {
       for (imgPath of running) {
        var img = new Image(this.width, this.height);
        img.src = imgPath;
        this.imageList.push(img);
        //console.log(img);
      }
      this.image = this.imageList[this.actualFrame];
    }
  };
  
  
 
  
  
  