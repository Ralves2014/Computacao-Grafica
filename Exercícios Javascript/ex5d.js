function max(x){
    return x.sort((first,second)=>first-second).pop();

}
let numeros=[1,2,3,400,5,60];
console.log(max(numeros));