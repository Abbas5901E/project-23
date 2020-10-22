class Box{
    constructor(x, y, width, height){
        var options = {restitution: 1.0, isStatic:true};
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        Matter.World.add(engine.world, this.body);
    }
    display(){
        var Pos = this.body.position;
        fill(255);
        rect(Pos.x, Pos.y, this.width, this.height);
    } 
}