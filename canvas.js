var canvas = document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
};

window.addEventListener('mousemove',function(event){
    mouse.x=event.x;
    mouse.y=event.y;
});
window.addEventListener('resize', function(){
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
});
  var maxRadius=40;
  var colorArray=[
      '#2C3E50',
      '#E74C3C',
      '#ECF0F1',
      '#3498DB',
      '#298089'
  ]; 
  function Circle(x,y,dx,dy,radius){
      this.x=x;
      this.y=y;
      this.dx=dx;
      this.dy=dy;
      this.radius=radius;
      this.minRadius=2;
      this.color=colorArray[Math.floor(Math.random() * colorArray.length)];
      
      this.draw=function(){
      c.beginPath();
      c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
      c.fillStyle=this.color;
      c.stroke( );
      c.fill();
      };
      
      this.update=function(){
      if(this.x+this.radius>innerWidth || this.x-this.radius<0){
          this.dx=-this.dx;
      }
      if(this.y+this.radius>innerHeight || this.y-this.radius<0){
          this.dy=-this.dy;
      }
      
      this.x+=this.dx;
      this.y+=this.dy;
      if(mouse.x-this.x<50 && mouse.x-this.x>-50
        && mouse.y-this.y<50 && mouse.y-this.y>-50){
         if(this.radius<maxRadius)
         this.radius+=1; 
      }
      else if(this.radius>this.minRadius) {
           this.radius-=1;
      }
      
      this.draw();
      } ;
  } 
var circleArray=[];
for(var i=0 ; i<800 ; i++ ) { 
   var radius=Math.random()*3+1;
   var x=Math.random() * (window.innerWidth-radius*2)+radius; 
   var y=Math.random() * (window.innerHeight-radius*2)+radius;
   var dx = (Math.random() - 0.5)*8 ; // Velocity for X direction
   var dy = (Math.random()-0.5)*8; // Velocity for Y direction
   circleArray.push(new Circle(x,y,dx,dy,radius));
   
}   
  function animate (){
      c.clearRect(0,0,innerWidth,innerHeight);
      //To see object on the screen we have another loop 
      for(var i=0; i<circleArray.length; i++)
          circleArray[i].update(); 
          requestAnimationFrame(animate); // funksion rekursiv dmth e perseit animate vashdimisht kurr sndalet.
     
  }  
  animate();
  

