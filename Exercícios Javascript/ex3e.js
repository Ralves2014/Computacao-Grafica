function estender(x , n){
    if(x.length < n){
        for(let i = 0; i < (n - x.length + 1); i++){
            x.push(0)
        }
        return x
    }
    else{
        return x.slice(0, n)   
    }
}


console.log(estender([1, -2.5], 4));