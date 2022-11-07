function quadrado(x){

    let arr = new Array();

    for(let xi of x){
        arr.push(xi*xi);
    }

    return arr
}

function print(y){

    for(let g of y)
        console.log(g);
}

print(quadrado([1,2,4,5]));