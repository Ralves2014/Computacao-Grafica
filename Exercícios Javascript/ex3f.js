function mapa(p,x){

    let y = new Array();    //cria o array

    for (let xi of x){      //percorre o array
        
        y.push(p(xi));
    }
    return y;
}

function printarray(x){
    for (let xi of x){
        console.log(xi);
    }

}

let numeros=[1,2,3,4,5,60];
let f =mapa(x => 2 * x,numeros);
printarray(f);