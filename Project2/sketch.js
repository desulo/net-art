let x = 0; 

function setup() {
    createCanvas(windowWidth, windowHeight); 
    
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1'); 
}

function draw() {
    background(220);

   
    fill(255, 0, 0);
    rect(x, height / 2 - 25, 50, 50); 

    
    x += 2; 

    
    if (x > width + 25) {
        x = -25; 
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
