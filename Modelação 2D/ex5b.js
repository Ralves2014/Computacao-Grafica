function main() {
    let gc = document
    .getElementById("acanvas")
    .getContext("2d");
    //gc.fillStyle="yellow";
    //gc.fillRect(0,0,100,100);


    gc.fillStyle="none";
    gc.fill();
    gc.translate(50,50);
    gc.rotate(Math.PI/4);
    gc.translate(-50,-50);
    gc.fillRect(50,50,64,64);

}