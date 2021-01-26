class Bob {
    constructor(x,y) {

        var options ={
            isStatic: true
        }
        
        this.body = Bodies.circle(x,y,20,options);
        World.add(world,this.body);
    }
    display() {
       var pos = this.body.position;

       strokeWeight(3);
       stroke("white");
       ellipseMode(RADIUS)
       ellipse(pos.x, pos.y,20,20);
    }
}