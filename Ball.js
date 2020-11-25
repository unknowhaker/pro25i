class Ball{
    constructor(x,y,radius){
        this.body = Matter.Bodies.circle(x,y,radius,{restitution:0.3, friction: 0.5, density:1.2});
        World.add(world,this.body);
        this.radius = radius;
        this.image = loadImage("paper.png");
    }
    display(){
        //fill("red");
        //ellipseMode(RADIUS);
        //ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);

    }
}