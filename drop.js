class Drop{
    constructor(x,y,r){
        var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r,options)
    }
    upadateY(){
        if(this.body.position > height){
            Matter.body.setPosition (this.body,{x:random(0,400),y:random(0,400)})
        }

    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.x,this.y,this.r,this.r)
    }
}