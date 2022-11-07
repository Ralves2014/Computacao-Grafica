function limite_sup(x,a){

    /*1ª maneira
    let arr=[]

    x.forEach(element => {      //percorre o array
        if(element <= a){
            arr.push(element)   //adiciona o elemento ao novo array 
        }
    });
    return arr      //retorna o array
    */

    let arr = new Array();

    for(let xi of x){
        if(xi<=a)
            arr.push(xi);
    }

    return arr
    
}

console.log(limite_sup([1, -2.5, 0.4, 0.0, -1.5, 2, 2.3], 0.4));