class Parent{

    constructor(x,y,w,h,angle){
    
     var  options={
            restitution:.5,
            friction:1

          }
          
          this.width=w;
          this.height=h;
          this.image=loadImage("sprites/base.png")
          this.body=Bodies.rectangle(x,y,w,h,options);
          World.add(myworld,this.body)
    
    
    }
    
    display(){
    push()
    fill("red")
    translate(this.body.position.x,this.body.position.y)
    angleMode(RADIANS);
    rotate(this.body.angle)  
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height);
    pop()
    
    
    }
    
    }