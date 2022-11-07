function dobro(x){

    /*1ª maneira
    let arr=[]

    x.forEach(element =>{

        arr.push(element*2)
    });

    return arr
    */

    let arr= new Array();

    for(let xi of x){
        arr.push(xi*2)
    }

    return arr
}

console.log(dobro([1,2,3,4,5]));