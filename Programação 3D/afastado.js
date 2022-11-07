function farthest(p,points) {
    if(points.length===0)return null;
    let p_max = points.shift();
    let d_max=dist(p_max,p);

    for(let pi of points){
        let di=dist(pi,p);
        if(di>d_max){
            p_max=pi;
            d_max=di;
        }
    }

    return {d: d_max, p:p_max};
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

console.log(farthest(p3d(0,0,2),[X0,Y0,Z0]));