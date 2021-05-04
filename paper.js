class Paper
{
	constructor(x,y,w,h)
	{
		var options={
			density:1,
            restitution:0.3,
            friction:0.3
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			ellipseMode(RADIUS)
			strokeWeight(4);
			fill(255,255,0)
			ellipse(0,0,this.w, this.h);
			pop()

			
	}

}