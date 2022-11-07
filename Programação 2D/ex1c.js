function equala_ss(A1, B1, C1, A2, B2, C2) {
    if(A1%A2===0 && B1%B2===0 && C1%C2===0 || A2%A1===0 && B2%B1===0 && C2%C1===0)
        return true;
    else
        return false;
}
let r=equala_ss(1.0,2.0,3.0,2.0,4.0,6.0);
console.log(r);