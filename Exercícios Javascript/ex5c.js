function media(x){

    let soma=0;
    let m=0;

    for(let xi of x){
        if(xi != '\0')
            soma+=xi;
    }

    m=soma/x.length;

    return m;
}

console.log(media([1,2,3]));