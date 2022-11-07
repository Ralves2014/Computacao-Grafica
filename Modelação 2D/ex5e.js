function main() {
    let gc = document
    .getElementById("acanvas")
    .getContext("2d");
    gc.fillStyle = "grey"; //fundo azul
    gc.fillRect(0,0,100,100);   //fundo azul


    //circulo grande
    gc.beginPath();
    gc.arc(50,50,50,0,Math.PI*2,true);  //circulo
    gc.closePath();

    gc.fillStyle="black";
    gc.fill();

    //metade branca
    gc.beginPath();
    gc.fillStyle="white";
    gc.moveTo(50,0);
    gc.arc(50,50,50,Math.PI/2,3*Math.PI/2,true);
    gc.fill();
    gc.closePath();

    
    //circulo medio de baixo branco
    gc.beginPath();
    gc.fillStyle="white";
    gc.arc(50,75,25,0,Math.PI*2,true);  //circulo
    gc.fill();
    gc.closePath();

    //circulo pequeno de baixo preto
    gc.beginPath();
    gc.fillStyle="black";
    //gc.StrokeStyle="black";
    gc.arc(50,75,12,0,Math.PI*2,true);  //circulo
    gc.fill();
    //gc.stroke();
    gc.closePath();

    //circulo medio de cima preto
    gc.beginPath();
    gc.fillStyle="black";
    gc.arc(50,25,25,0,Math.PI*2,true);  //circulo
    gc.fill();
    gc.closePath();

    //circulo pequeno de cima branco
    gc.beginPath();
    gc.fillStyle="white";
    gc.arc(50,25,12,0,Math.PI*2,true);  //circulo
    gc.fill();
    gc.closePath();
   
    

    
    

}