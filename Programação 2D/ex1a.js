function eqna_s(x1, y1, x2, y2) {
    
    if(x2!=x1){

       let m=(y2-y1)/(x2-x1);
       let b=y1-(m*x1);

       return{
           A:-m,
           B: 1.0,
           C: -b
       }

    }
    else{
        return{
            A:1.0,
            B:0.0,
            C:-x1
        }
    }
}

let r = eqna_s(1.0,1.0,2.0,2.0);
console.log(r);