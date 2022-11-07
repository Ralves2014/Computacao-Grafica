function eqnp_s(x1, y1, x2, y2) {
    
    
    if(x1===x2 && y1===y2){
        return{
            P:[x1,y1],
            v:0
        }
    }
    else{
        let vx=x2-x1;
        let vy=y2-y1;

        return{
            P:[x1,y1],
            v:[vx,vy]
        }
    }
}

let r = eqnp_s(1.0,1.0,2.0,2.0);
console.log(r);