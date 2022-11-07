function intervalo(a,b){
    
    let arr=[]

    for(let i= Math.ceil(a); i<=Math.floor(b); i++){        //Math.ceil arredondar para cima

        arr.push(i)
    }
    

    return arr
}

console.log("Exercicio (c) : " + intervalo(2.1,8.4))