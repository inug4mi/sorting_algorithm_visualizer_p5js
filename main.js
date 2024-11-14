
let grid, algo;
let backgroundColor = 220;
let button;
function setup() {
    createCanvas(WIDTH, HEIGHT);
    frameRate(60);
    grid = new Grid();
    algo = new Algorithms();

    // Manejador de botón para barajar los valores
    button = document.getElementById('shuffleValues');
    button.addEventListener('click', () => {
        algo.shuffleValues();
        algo.createRects();
        algo.bubbleSort();  // Inicia el algoritmo de ordenamiento con visualización
    });
}

function draw() {
    background(backgroundColor);
    grid.drawGrid();
    algo.drawAlgorithm();
}
