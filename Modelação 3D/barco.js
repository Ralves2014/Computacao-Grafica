function bow_geometry() {
    //
    //  Coordinates
    //
    let coordinates = [
        new THREE.Vector3(0.9, 0.0, -1.),
        new THREE.Vector3(0.9, 0.0, 0.5),
        new THREE.Vector3(0.0, 0.0, 0.9),
        new THREE.Vector3(-.9, 0.0, 0.5),
        new THREE.Vector3(-.9, 0.0, -1.),
        new THREE.Vector3(-1., 0.0, -1.),
        new THREE.Vector3(-1., 0.0, 0.5),
        new THREE.Vector3(0.0, 0.0, 1.0),
        new THREE.Vector3(1.0, 0.0, 0.5),
        new THREE.Vector3(1.0, 0.0, -1.),
        new THREE.Vector3(0.0, 1.9, -1.),
        new THREE.Vector3(0.0, 1.9, -.5),
        new THREE.Vector3(0.0, 2.0, -1.),
        new THREE.Vector3(0.0, 2.0, -.5)
    ];
    //
    //  Faces (triangles!)
    //
    let faces = [
        //
        new THREE.Face3(0, 1, 8),
        new THREE.Face3(0, 8, 9),
        new THREE.Face3(1, 2, 7),
        new THREE.Face3(1, 7, 8),
        new THREE.Face3(2, 3, 7),
        new THREE.Face3(3, 6, 7),
        new THREE.Face3(3, 4, 6),
        new THREE.Face3(4, 5, 6),
        //
        new THREE.Face3(0, 10, 11),
        new THREE.Face3(0, 11, 1),
        new THREE.Face3(4, 3, 11),
        new THREE.Face3(4, 11, 10),
        new THREE.Face3(3, 2, 11),
        new THREE.Face3(2, 1, 11),
        //
        new THREE.Face3(5, 13, 6),
        new THREE.Face3(5, 12, 13),
        new THREE.Face3(7, 6, 13),
        new THREE.Face3(8, 7, 13),
        new THREE.Face3(9, 8, 13),
        new THREE.Face3(9, 13, 12),
        //
        new THREE.Face3(0, 9, 10),
        new THREE.Face3(9, 12, 10),
        new THREE.Face3(5, 4, 10),
        new THREE.Face3(5, 10, 12)
    ];
    //
    //  Geometry
    //
    let bow = new THREE.Geometry();
    bow.vertices = coordinates;
    bow.faces = faces;
    bow.computeFaceNormals(); // get the right "outside"
    bow.computeBoundingSphere(); // to help the rendering system
    return bow;
}