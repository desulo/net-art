function setup() {
    // Set up the canvas size
    createCanvas(500, 500);
    noLoop(); // Prevent draw from looping
  }
  
  function draw() {
    // Set the background color
    background(255);
  
    // Define the number of rows and columns
    let rows = 10;
    let cols = 10;
    
    // Calculate the size of each cell in the grid
    let cellWidth = width / cols;
    let cellHeight = height / rows;
  
    // Loop through rows and columns to draw the pattern
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // Calculate the x and y position of each cell
        let x = j * cellWidth;
        let y = i * cellHeight;
        
        // Calculate the size of the circle based on position
        let circleSize = map(i + j, 0, rows + cols - 2, 10, cellWidth);
  
        // Calculate the color based on position
        let r = map(i, 0, rows, 50, 255);
        let g = map(j, 0, cols, 50, 255);
        let b = map(i + j, 0, rows + cols - 2, 255, 50);
  
        // Set the fill color
        fill(r, g, b);
  
        // Draw the circle
        ellipse(x + cellWidth / 2, y + cellHeight / 2, circleSize, circleSize);
      }
    }
  }