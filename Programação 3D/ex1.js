function dist(p,q) {

    return Math.hypot(p.x-q.x,p.y-q.y,p.z-q.z);
    
}

function p3d(x,y,z) {
    return {x:x, y:y, z:z};
}


console.log(dist(p3d(0,0,0),p3d(1,1,0)));