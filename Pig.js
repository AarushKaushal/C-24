class Pig{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friciton:0.3,
            density:1.0,
          }
          this.body=Bodies.rectangle(x,y,50,50,options);
          this.w=50;
          this.h=50;
          World.add(world,this.body);
    }
    display(){
        fill("red");
        var pos=this.body.position
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}