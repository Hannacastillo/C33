class SlingShot{

 constructor(body1,point2){
    var options={

        bodyA:body1,
        pointB:point2,
        stiffness:.08,
        length:10
      
      }
      
     this.sling=Matter.Constraint.create(options);
      World.add(myworld,this.sling)

this.sling1=loadImage("sprites/sling1.png")
this.sling2=loadImage("sprites/sling2.png")
this.sling3=loadImage("sprites/sling3.png")

 }  
 


 display(){
 

image(this.sling1,150,180)
image(this.sling2,120,170)


 if (this.sling.bodyA!=null)
 {
  strokeWeight(10)
  stroke(48,22,8)

if (this.sling.bodyA.position.x<150){



line(this.sling.bodyA.position.x-15, this.sling.bodyA.position.y,this.sling.pointB.x-20,this.sling.pointB.y)    
line(this.sling.bodyA.position.x-15, this.sling.bodyA.position.y,this.sling.pointB.x+20,this.sling.pointB.y+10)    

image(this.sling3,this.sling.bodyA.position.x-20, this.sling.bodyA.position.y-15,15,30)
}

if (this.sling.bodyA.position.x>150){

  line(this.sling.bodyA.position.x+15, this.sling.bodyA.position.y,this.sling.pointB.x-20,this.sling.pointB.y)    
line(this.sling.bodyA.position.x+15, this.sling.bodyA.position.y,this.sling.pointB.x+20,this.sling.pointB.y+10)    

image(this.sling3,this.sling.bodyA.position.x+20, this.sling.bodyA.position.y-15,15,30)
}

}
 }

 fly(){
this.sling.bodyA=null

 }

attach(body){
  this.sling.bodyA=body
}

}