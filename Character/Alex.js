 class Alex1 extends Baseclass{
    constructor(x,y,width,height){
       super(x,y,width,height)
        this.image=loadImage("Aleximage/GraveRobber.png");
        
       
    }
    

  display(){
  //this.body.position.x=mouseX
  //this.body.position.y=mouseY
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y,50,50);
  }   
  
  moveForward(){
      this.body.position.x = this.body.position.x + 5;
      this.runningimage=loadAnimation("Aleximage/GraveRobber_walk.png");
      runningimage(this.runningimage, this.body.position.x, this.body.position.y,50,50);
    }
      moveBackward(){
      this.body.position.x=this.body.position.x-5;
    }
    
    Jump(){
      this.body.position.y=this.body.position.y-30 ;
      this.body.position.y=this.body.position.y+25 
     }

     jump2(){
      this.body.position.y=this.body.position.y+20 ;
     }
}

