
let grid, algo;
let backgroundColor = 220;

function setup(){
    createCanvas(WIDTH, HEIGHT);
    frameRate(60);
    grid = new Grid();
    algo = new Algorithms();
    

    let button = document.getElementById('shuffleValues');
    button.addEventListener('click', algo.shuffleValues);
}

function draw(){
    background(backgroundColor);
    grid.drawGrid();
    algo.drawAlgorithm();
}
