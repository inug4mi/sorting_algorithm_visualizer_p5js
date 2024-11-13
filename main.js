
let grid;

function setup(){
    createCanvas(WIDTH, HEIGHT);
    frameRate(60);
    grid = new Grid();
}

function draw(){
    background(220);
    grid.drawGrid();
}
