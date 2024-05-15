let x = 0; 

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);

    
    fill(255, 0, 0);
    ellipse(x, height / 2, 50, 50);

    
    x += 2; 

    
    if (x > width + 25) {
        x = -25; 
    }
}
