function aleatorio(n){
    let arr=[]

    for(let i=0; i<n; i++){
        arr.push(Math.random())
    }

    return arr
}

console.log("Exercicio (b) : " + aleatorio(3))