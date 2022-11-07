function filtro(p,x){

    let y = new Array();    //cria o array

    for (let xi of x){      //percorre o array
        if(p(xi)) 
            y.push(xi);     //adiciona o xi ao array y
    }
    return y;
}

function printarray(x){     //faz print do array
    for (let xi of x){
        console.log(xi);
    }

}

let numeros=[1,2,3,4,5,60];
let pares =filtro(x => x%2===0,numeros);
printarray(pares);