class Algorithms {
    constructor() {
        this.values = [];
        for (let i = 1; i <= floor(WIDTH / GRIDSIZE); i++) 
            this.values.push(i);
        this.rects = [];
        this.shuffleValues();
        this.createRects();
        this.sorting = false; // Controla si el algoritmo está ejecutándose
    }

    createRects() {
        if (this.rects.length === 0) {
            for (let i = 0; i < this.values.length; i++) {
                let myRect = new Rect(i * GRIDSIZE, 0, GRIDSIZE, this.values[i] * GRIDSIZE);
                this.rects.push(myRect);
            }
        } else {
            for (let i = 0; i < this.values.length; i++) {
                this.rects[i].height = this.values[i] * GRIDSIZE;
            }
        }
    }

    shuffleValues() {
        for (let i = this.values.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.values[i], this.values[j]] = [this.values[j], this.values[i]]; 
        }
    }

    drawAlgorithm() {
        for (let i = 0; i < this.rects.length; i++) {
            this.rects[i].drawRect(1, {r: 255, g: 35, b: 51}, {r: 0, g: 0, b: 0});
        }
    }

    async bubbleSort() {
        this.sorting = true;
        for (let i = 0; i < this.values.length - 1; i++) {
            for (let j = 0; j < this.values.length - i - 1; j++) {
                if (this.values[j] > this.values[j + 1]) {
                    // Swap values
                    [this.values[j], this.values[j + 1]] = [this.values[j + 1], this.values[j]];

                    // Update the corresponding rects
                    this.rects[j].height = this.values[j] * GRIDSIZE;
                    this.rects[j + 1].height = this.values[j + 1] * GRIDSIZE;

                    // Redraw the grid and rectangles after the swap
                    this.createRects();
                    this.drawAlgorithm();

                    // Pause for a moment to allow the visual update
                    await new Promise(resolve => setTimeout(resolve, 1)); // 100ms delay
                }
            }
        }
        this.sorting = false;
    }
}
