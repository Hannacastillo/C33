class Bird extends Parent{

    constructor(x,y){
    
    
          super(x,y,50,50,0)
          this.image=loadImage("sprites/bird.png")
    this.dot=loadImage("sprites/smoke.png")
    this.position=[]
    }
    
    display(){
    super.display();
   // this.body.position.x=mouseX
   // this.body.position.y=mouseY
   if(this.body.position.x>150 && this.body.speed>10){
    var A=[this.body.position.x,this.body.position.y]
    this.position.push(A)
   }
    for(var B=0;B<this.position.length;B=B+1){
      image(this.dot,this.position[B][0],this.position[B][1])    
    }
    }
    
    }