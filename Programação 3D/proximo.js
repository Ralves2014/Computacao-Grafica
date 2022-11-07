function nearest(p,points) {
    if(points.length===0)return null;
    let p_min = points.shift();
    let d_min=dist(p_min,p);

    for(let pi of points){
        let di=dist(pi,p);
        if(di<d_min){
            p_min=pi;
            d_min=di;
        }
    }

    return {d: d_min, p:p_min};
}

function dist(p,q) {
    return Math.hypot(p.x-q.x,p.y-q.y,p.z-q.z);
}

function p3d(x,y,z) {
    return {x:x, y:y, z:z};
}


let X0=p3d(1,0,0);
let Y0=p3d(0,1,0);
let Z0=p3d(0,0,1);

console.log(nearest(p3d(0,0,2),[X0,Y0,Z0]));
