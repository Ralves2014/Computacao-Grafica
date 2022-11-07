function main() {
    let gc = document
    .getElementById("acanvas")
    .getContext("2d");

    gc.beginPath();
    gc.rect(0,0,100,100);
    gc.moveTo(20,0);
    gc.lineTo(20,100);
    gc.moveTo(40,0);
    gc.lineTo(40,100);
    gc.moveTo(60,0);
    gc.lineTo(60,100);
    gc.moveTo(80,0);
    gc.lineTo(80,100);
    gc.moveTo(0,20);
    gc.lineTo(100,20);
    gc.moveTo(0,40);
    gc.lineTo(100,40);
    gc.moveTo(0,60);
    gc.lineTo(100,60);
    gc.moveTo(0,80);
    gc.lineTo(100,80);


    gc.closePath();
    gc.fillStyle= "white";     
    gc.fill();
    //gc.fillStyle= "none";     
    //gc.fill(nonzero);
    gc.strokeStyle="none";   //traçado
    gc.stroke();                //traçado
    

}