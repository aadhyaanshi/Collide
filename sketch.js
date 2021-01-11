function setup() {
  createCanvas(800,400);
 Mrec = createSprite(400, 200, 50, 50);
 Mrec.shapeColor = "green"; 
 
 Frec = createSprite(400, 100, 50, 50);
 Frec.shapeColor = "green";
}

function draw() {
  background(255,255,255);
  
  Mrec.y = mouseY;
  Mrec.x = mouseX;

  if(Mrec.x - Frec.x < Mrec.width/2 + Frec.width/2 
    && Frec.x - Mrec.x < Mrec.width/2 + Frec.width/2 &&
     Mrec.y - Frec.y < Mrec.height/2 + Frec.height/2 &&
     Frec.y - Mrec.y < Mrec.height/2 + Frec.height/2) 
  {   Mrec.shapeColor = "red";
      Frec.shapeColor = "red";
   }
   else 
   {  Mrec.shapeColor = "green"; 
      Frec.shapeColor = "green";
   }



  drawSprites();
}