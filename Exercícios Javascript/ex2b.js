function positivos(x){

    /*1ª maneira
    let arr=[]
    
    x.forEach(element => {
        if(element>0){
            arr.push(element)
        }
    });
    
    return arr
    */

    let arr = new Array();

    for(let xi of x){
        if(xi>0)
            arr.push(xi)
    }

    return arr
}

console.log(positivos([1, -2.5, 0.4, -1.5, 2, 2.3]));

