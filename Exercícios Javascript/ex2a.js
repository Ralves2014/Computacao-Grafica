function pares(x){

    /*1ª maneira
    let arr=[]

    x.forEach(element =>{

        if(element % 2 == 0)
            arr.push(element)
        
    });

    return arr
    */

    let arr= new Array();

    for(let xi of x){
        if(xi % 2 == 0)
            arr.push(xi)
    }

    return arr
}

console.log(pares([1,2,5,6,0.2]));