function stats(x) {
    
    let soma=0;
    let m; 
    let stdev;
    let dp=0;
    let max;
    let min;
    let dim;

    dim=x.length;
    
    for(let xi of x){
        if(xi!='\0')
            soma+=xi;
    }

    m=soma/dim;

    for(let d of x){
        if(d!='\0'){
            dp=dp+((d-m)*(d-m));
        }
    }

    stdev=Math.sqrt(dp/dim-1);

    max=x.sort((first,second)=>first-second).pop();
    min=x.sort((first,second)=>first-second).reverse().pop();

    console.log("count:"+dim+" mean:"+m+" stdev:"+stdev+" min:"+min+" max:"+max);
}
let numeros=[1,2,3,4];
console.log(stats(numeros));