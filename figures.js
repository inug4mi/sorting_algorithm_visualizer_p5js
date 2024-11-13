
class Line{
    constructor(x0, y0, x1, y1) {
        this.x0 = x0;
        this.y0 = y0;
        this.x1 = x1;
        this.y1 = y1;
    }
    drawLine(weight = 1, color = {r: 255, g: 0, b: 0}) {
        strokeWeight(weight);
        stroke(color.r, color.g, color.b);
        line(this.x0, this.y0, this.x1, this.y1);
    }
}

class Rect{
    constructor(x0, y0, width, height) {
        this.x0 = x0;
        this.y0 = y0;
        this.width = width;
        this.height = height;
    }
    drawRect(weight = 1, color = {r: 255, g: 0, b: 0}, strokeColor = {r: 255, g: 0, b: 0}){
        fill(color.r, color.g, color.b);
        stroke(strokeColor.r, strokeColor.g, strokeColor.b);
        strokeWeight(weight);
        rect(this.x0, this.y0, this.x1, this.y1);
    }
}

class Grid{
    drawGrid(){
        for (let x = 0; x < floor(WIDTH/GRIDSIZE); x++){
            let xline = new Line(x*GRIDSIZE,0,x*GRIDSIZE,HEIGHT);
            xline.drawLine(1,{r:200,g:200,b:200});
            for (let y = 0; y < floor(HEIGHT/GRIDSIZE); y++){
                let yline = new Line(0,y*GRIDSIZE,WIDTH,y*GRIDSIZE)
                yline.drawLine(1,{r:200,g:200,b:200});
            }
        }        
    }
}


