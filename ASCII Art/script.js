const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const image1 = new Image();
image1.src='data:image/jpeg;base64,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'

const inputSlider = document.getElementById("resolution");
const inputLabel = document.getElementById("resolutionLabel");
inputSlider.addEventListener("change", handleSlider);

class Cell {
    constructor(x,y,symbol,color){
        this.x =x;
        this.y =y;
        this.symbol = symbol;
        this.color = color;
    }
    draw(ctx){
        ctx.fillStyle = "white";
        ctx.fillText(this.symbol, this.y+0.5, this.x+0.5);
        ctx.fillStyle = this.color;
        ctx.fillText(this.symbol, this.y, this.x);
    }
}

class AsciiEffect{
    #imageCellArray = [];
    // #symbols = [];
    #pixels = [];
    #ctx;
    #width;
    #height;
    constructor(ctx, width, height){
        this.#ctx = ctx;
        this.#width = width;
        this.#height = height;
        this.#ctx.drawImage(image1, 0, 0, this.#width, this.#height);
        this.#pixels = this.#ctx.getImageData(0,0,this.#width,this.#height);
        // console.log(this.#pixels.data);
    }
    #convertToSymbol(g){
        if(g>250) return '@';
        else if(g>240) return '*';
        else if(g>220) return '+';
        else if(g>200) return '#';
        else if(g>180) return '&';
        else if(g>160) return '%';
        else if(g>140) return '_';
        else if(g>120) return ':';
        else if(g>100) return '$';
        else if(g>80) return '/';
        else if(g>60) return '-';
        else if(g>40) return 'X';
        else if(g>20) return 'W';
        else return '';
    };
    #scanImage(cellSize){
        this.#imageCellArray =[];
        for(let y=0; y< this.#pixels.height; y+=cellSize){
            for(let x=0; x<this.#pixels.width; x+=cellSize){
                const posX = x*4;
                const posY = y*4;
                const pos = (posY * this.#pixels.width) + posX;

                if(this.#pixels.data[pos+3]>128){
                    const red = this.#pixels.data[pos];
                    const green = this.#pixels.data[pos+1];
                    const blue = this.#pixels.data[pos+2];
                    const total = red+green+blue;
                    const averageColorValue = total/3;
                    const color = "rgb(" + averageColorValue + "," + averageColorValue + "," + averageColorValue + ")";
                    const symbol = this.#convertToSymbol(averageColorValue);
                    if(total>200) this.#imageCellArray.push(new Cell(x,y,symbol,color));
                }
            }
        }
        console.log(this.#imageCellArray);
    }
    #drawAscii(){
        this.#ctx.clearRect(0,0,this.#width,this.#height);
        for(let i=0; i<this.#imageCellArray.length; i++){
            this.#imageCellArray[i].draw(this.#ctx)
        }
    }
    draw(cellSize){
        this.#scanImage(cellSize);
        this.#drawAscii();
    }
}

let effect;

function handleSlider(){
    if(inputSlider.value ==1){
        inputLabel.innerHTML = 'Original image';
        ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
    }
    else{
        inputLabel.innerHTML = 'Resolution:' + inputSlider.value + 'px';
        ctx.font = parseInt(inputSlider.value)* 1.2 + "px Verdana";
        effect.draw(parseInt(inputSlider.value));
    }
}

image1.onload = function initialize(){
    canvas.width = image1.width;
    canvas.height = image1.height;
    // ctx.drawImage(image1,0,0); 
    effect = new AsciiEffect(ctx, image1.width, image1.height);
    // console.log(effect);
    handleSlider();
    // effect.draw(10);
}