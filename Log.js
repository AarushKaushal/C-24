class Log{
    constructor(x,y,height,angle){
        var options={
            restitution:0.4,
            friciton:3.0,
            density:2.0
          }
          this.body=Bodies.rectangle(x,y,20,height,options);
          Matter.Body.setAngle(this.body,angle);
          this.w=20;
          this.h=height;
          World.add(world,this.body);
    }
    display(){
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