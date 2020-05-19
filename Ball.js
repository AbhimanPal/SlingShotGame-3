class Ball {
    constructor(x,y,radius) {
      var options = {
        density :   1,
        friction : 1.0,
        restitution : 0.8
        //frictionAir:0.06
      }
      this.body = Bodies.circle(x,y,radius,options);
      World.add(world,this.body);
      this.radius = radius;
    };
  
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      ellipseMode(RADIUS);
      fill("blue");
      ellipse(0,0,this.radius);
      pop();
  
  
    };
  };
  