

class Algorithms{
    constructor(){
        this.values = [];
        for (let i = 1; i <= floor(WIDTH/GRIDSIZE); i++) 
            this.values.push(i);    
        this.shuffleValues();
        
        this.rects = [];
        this.createRects();
    }

    createRects(){
        for (let i = 0; i < this.values.length; i++){
            let myRect = new Rect(i*GRIDSIZE, 0, GRIDSIZE, this.values[i]*GRIDSIZE);
            this.rects.push(myRect);
        }
    }

    shuffleValues() {
        for (let i = this.values.length - 1; i > 0; i--) {
            // Generate random value between 0 and i
            const j = Math.floor(Math.random() * (i + 1));
            
            // swap this.values[i] and this.values[j]
            [this.values[i], this.values[j]] = [this.values[j], this.values[i]];  // Desestructuración
        }
    }

    drawAlgorithm(){
        for (let i = 0; i < this.rects.length; i++){
            this.rects[i].drawRect(1,{r:255,g:35,b:51},{r:0,g:0,b:0});
        }
    }
}