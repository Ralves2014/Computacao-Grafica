function main() {
    let gc = document
    .getElementById("acanvas")
    .getContext("2d");
    gc.fillStyle = "steelblue"; //fundo azul
    gc.fillRect(0,0,100,100);   //fundo azul

    
    gc.beginPath();
    gc.arc(50,50,40,0,Math.PI*2,true);  //circulo
    gc.closePath();
    
    gc.fillStyle= "yellow";     //preeche com a cor amarela
    gc.fill();                  //preeche com a cor amarela
    gc.strokeStyle="crimson";   //traçado
    gc.stroke();                //traçado
    

    

}