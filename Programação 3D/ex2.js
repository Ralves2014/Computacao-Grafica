function outer(u,v) {

    return p3d(
        u.y*v.z-u.z*v.y,
        u.z*v.x-u.x*v.z,
        u.x*v.y-u.y*v.x
    );

}

function p3d(x,y,z) {
    return {x:x, y:y, z:z};
}

console.log(outer(p3d(1,0,0),p3d(0,1,0)));