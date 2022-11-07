function repete(x,n){

    let arr= new Array();

    for(let i=0; i<n;i++){

        arr.push(x);    //Adiciona no array o valor x no fim
    }
    return arr;
}

console.log("Exercicio (a): "+ repete(1,4))   //printf 