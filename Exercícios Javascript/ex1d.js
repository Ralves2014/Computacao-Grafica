function linespace(a, b, n){
    let arr = new Array();
    let intervalo;

    if(n % 2 != 0){
        intervalo = (b - a) / (n - 1);
    }
    else{
        intervalo = (b - a) / (n);
    }

    for(let i = a ; i <= b; i += intervalo){
        arr.push(i);
    }

    return arr;
}

console.log(linespace(0,1,5))
