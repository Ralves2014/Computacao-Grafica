function soma(x){

    let soma=0;

    for(let xi of x){
        if(xi != '\0')
            soma+=xi;
    }

    return soma;
}

console.log(soma([1,2,3]));