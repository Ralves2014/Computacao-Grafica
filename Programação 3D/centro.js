function center(points) {
    return p3d(
        average(points.map(p=> p.x)),
        average(points.map(p=> p.y)),
        average(points.map(p=> p.z))

    );
}

function average(xs) {
    if(xs===0)return 0.0;

    let sum=0;

    for(let xi of xs) sum +=xi;
    return sum /xs.length;
}

function p3d(x,y,z) {
    return {x:x, y:y, z:z};
}

function map(p,x){

    let y = new Array();    //cria o array

    for (let xi of x){      //percorre o array
        
        y.push(p(xi));
    }
    return y;
}

let X0=p3d(1,0,0);
let Y0=p3d(0,1,0);
let Z0=p3d(0,0,1);

console.log(center([X0,Y0,Z0]));