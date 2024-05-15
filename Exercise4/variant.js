function setup() {
    
    createCanvas(400, 400);
    noLoop(); 
  }
  
  function draw() {
    
    background(255);
  
    
    let colors = [
      color(255, 0, 0),   
      color(0, 255, 0),   
      color(0, 0, 255),   
      color(255, 255, 0), 
      color(255, 0, 255), 
      color(0, 255, 255), 
    ];
  
    
    let margin = 50;
    let rectSize = 100;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 2; j++) {
        fill(colors[i * 2 + j]);
        rect(margin + j * rectSize, margin + i * rectSize, rectSize, rectSize);
      }
    }
  
    
    fill(255);
    rect(margin + rectSize, margin + rectSize, rectSize, rectSize);
  }