class Bird{
    constructor(x,y,width,height){
        var options={
            restitution:1.5,
            friciton:1.0,
            density:0.5,
          }
          this.body=Bodies.rectangle(x,y,50,50,options);
          this.w=50;
          this.h=50;
          World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        pos.x=mouseX;
        pos.y=mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}