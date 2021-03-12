class Pig extends Parent{

    constructor(x,y){
 super(x,y,50,50,0)
this.image=loadImage("sprites/enemy.png")
    
this.Vis=255

    }
    display(){
//console.log(this.body.speed)
if (this.body.speed<2){
    super.display()
}

    
    else {
        World.remove(myworld,this.body)
        push()
        this.Vis=this.Vis-5
        tint(255,this.Vis)
image(this.image,this.body.position.x,this.body.position.y,50,50)
  pop()
}
    
   
    }

 score(){

if (this.Vis<=0 && this.Vis>-250){
score=score+1

}

if (this.Vis<=0 && this.Vis>-10){
pigSound.play()

}
 }
}