function min(x) {
    return x.sort((a,b)=>a-b).reverse().pop();
}

let numeros=[1,2,3,400,5,60];
console.log(min(numeros));