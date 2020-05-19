class Box{
    constructor(x, y, width, height) {
        var options = {
            //'restitution':0.5,
            'friction':1.0,
            'density':1.5

        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        if(this.body.speed<5){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        rect(0, 0, this.width, this.height);
        pop();
        }
        else{
            World.remove(world,this.body);
        }
      }
}