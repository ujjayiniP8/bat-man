class Umbrella
{
    constructor(x,y)
    {
        var options =
        {
        //static
        isStatic : true
        }
    
 //image
    this.body = Bodies.rectangle(x, y, width,height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("umbrella.png");
    World.add(world, this.body);
    }
//display
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 200,300);
    pop();
  };
}
