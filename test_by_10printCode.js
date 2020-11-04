let d;
let b = 20;
let a = 40;

function setup() {
  createCanvas(400, 400);
  noFill();
  
}

function draw() {
  background(240);
  randomSeed(mouseY);
  
  d = random (10, 80)
  
  
  // for (let i=0; i<10; i++) {
  //   circle(40*i+20, 20, d); // x: 20, 60, 100, 140, ...
  // }
  
   for (let i=0; i<5; i++) {
     for (let j=0; j<10; j++) {
       fill(random(255), random(255), random(255))
       if(j%2==0)
     
      
       circle(a*2*i+b, a*j+b, d);
       else
         circle(a*2*i+b+a, a*j+b, d);
       
       // y: 20, 60, 100, ...
     }
   }
  
}
