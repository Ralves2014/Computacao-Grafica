function unicos(x){

    let arr =new Array();

    for(let xi of x){
        if(!arr.includes(xi))
            arr.push(xi);
    }

    return arr
}

function printarray(x){     //faz print do array
    for (let xi of x){
        console.log(xi);
    }

}

printarray(unicos([1,-2.5,1]));