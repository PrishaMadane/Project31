class Divisions {
  constructor(x,y,w,h){
      var options = {
          isStatic:true
      }

    this.body = Bodies.rectangle(x,y,w,h,options);
    this.x=x;
    this.y=y;
    this.width = w;
    this.height = h;
    World.add(world,this.body);
  }

   display(){
     var pos = this.body.position;

     push();
     translate(pos.x,pos.y)
     rectMode(CENTER);
     fill("white");
     rect(0,0,this.width,this.height);
     pop();
   }
};