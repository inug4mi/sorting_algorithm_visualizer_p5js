

class Algorithms{
    constructor(){
        this.values = [];
        for (let i = 1; i < floor(WIDTH/GRIDSIZE); i++) 
            this.values.push(i);    
        this.shuffleValues();
        console.log(this.values);
    }

    shuffleValues() {
        for (let i = this.values.length - 1; i > 0; i--) {
            // Generate random value between 0 and i
            const j = Math.floor(Math.random() * (i + 1));
            
            // swap this.values[i] and this.values[j]
            [this.values[i], this.values[j]] = [this.values[j], this.values[i]];  // Desestructuración
        }
    }
}