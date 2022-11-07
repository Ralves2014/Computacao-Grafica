function main() {
    let gc = document
    .getElementById("acanvas")
    .getContext("2d");
    //gc.fillStyle = "none"; 
    //gc.fillRect(0,0,100,100);   

    
    gc.beginPath();
    gc.moveTo(100,0);
    gc.quadraticCurveTo(50,50,100,100); // o ultimo ponto sera 100,100 que depois e conseiderado o inicio 
    gc.quadraticCurveTo(0,50,100,0);
    gc.closePath();
    
    gc.fillStyle= "yellow";     //preeche com a cor amarela
    gc.fill();                  //preeche com a cor amarela
    gc.strokeStyle="crimson";   //traçado
    gc.stroke();                //traçado
    

    

}