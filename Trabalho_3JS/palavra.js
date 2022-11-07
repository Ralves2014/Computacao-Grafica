function modelo() {
   
    // Letras (corpo)
    let letra_Og = O();
    let letra_Cg = C();
    let letra_Tg = T();
    let letra_Ig = I();
    let letra_I2g = I();
    let letra_pontog = ponto();
    let letra_ponto2g = ponto();
    let letra_O2g = O_a();
    let letra_pernag = perna_a();
    let letra_O3g = o_b();
    let letra_bg = b_l();
    let letra_O4g = O_a();
    let letra_perna2g = perna_a();


    // Finalizações (pontas arredondadas)
    let letra_pg = p();
    let letra_p2g = p();
    let letra_p3g = p3();
    let letra_p4g = p2();
    let letra_p5g = p2();
    let letra_p6g = p4();
    let letra_p7g = p5();
    let letra_p8g = p5();
    let letra_p9g = p5();
    let letra_p10g = p5();
    let letra_p11g = p5();
    let letra_p12g = p5();
    let letra_p13g = p6();
    let letra_p14g = p6();

    // Corpo das letras
    let letra_Om = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_Cm = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_Tm = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_Im = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_I2m = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_pontom = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_ponto2m = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_O2m = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_pernam = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_O3m = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_bm = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_O4m = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_perna2m = new THREE.MeshLambertMaterial({
        color: "black"
    });

    // Finalizações
    let letra_pm = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_p2m = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_p3m = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_p4m = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_p5m = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_p6m = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_p7m = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_p8m = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_p9m = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_p10m = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_p11m = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_p12m = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_p13m = new THREE.MeshLambertMaterial({
        color: "black"
    });
    let letra_p14m = new THREE.MeshLambertMaterial({
        color: "black"
    });



    letra_Om.side = THREE.DoubleSide;
    letra_Cm.side = THREE.DoubleSide;
    letra_Tm.side = THREE.DoubleSide;
    letra_Im.side = THREE.DoubleSide;
    letra_I2m.side = THREE.DoubleSide;
    letra_O2m.side = THREE.DoubleSide;
    letra_pernam.side = THREE.DoubleSide;
    letra_O3m.side = THREE.DoubleSide;
    letra_O4m.side = THREE.DoubleSide;
    letra_perna2m.side = THREE.DoubleSide;

    letra_pm.side = THREE.DoubleSide;
    letra_p2m.side = THREE.DoubleSide;
    letra_p3m.side = THREE.DoubleSide;
    letra_p4m.side = THREE.DoubleSide;
    letra_p5m.side = THREE.DoubleSide;
    letra_p6m.side = THREE.DoubleSide;
    letra_p7m.side = THREE.DoubleSide;
    letra_p8m.side = THREE.DoubleSide;
    letra_p9m.side = THREE.DoubleSide;
    letra_p10m.side = THREE.DoubleSide;
    letra_p11m.side = THREE.DoubleSide;
    letra_p12m.side = THREE.DoubleSide;
    letra_p13m.side = THREE.DoubleSide;
    letra_p14m.side = THREE.DoubleSide;

    let letra_O = new THREE.Mesh(letra_Og, letra_Om);
    let letra_C = new THREE.Mesh(letra_Cg, letra_Cm);
    let letra_T = new THREE.Mesh(letra_Tg, letra_Tm);
    let letra_I = new THREE.Mesh(letra_Ig, letra_Im);
    let letra_I2 = new THREE.Mesh(letra_I2g, letra_I2m);
    let letra_ponto = new THREE.Mesh(letra_pontog, letra_pontom);
    let letra_ponto2 = new THREE.Mesh(letra_ponto2g, letra_ponto2m);
    let letra_O2 = new THREE.Mesh(letra_O2g, letra_O2m);
    let letra_perna = new THREE.Mesh(letra_pernag, letra_pernam);
    let letra_O3 = new THREE.Mesh(letra_O3g, letra_O3m);
    let letra_b = new THREE.Mesh(letra_bg, letra_bm);
    let letra_O4 = new THREE.Mesh(letra_O4g, letra_O4m);
    let letra_perna2 = new THREE.Mesh(letra_perna2g, letra_perna2m);

    let letra_p= new THREE.Mesh(letra_pg, letra_pm);
    let letra_p2= new THREE.Mesh(letra_p2g, letra_p2m);
    let letra_p3= new THREE.Mesh(letra_p3g, letra_p3m);
    let letra_p4= new THREE.Mesh(letra_p4g, letra_p4m);
    let letra_p5= new THREE.Mesh(letra_p5g, letra_p5m);
    let letra_p6= new THREE.Mesh(letra_p6g, letra_p6m);
    let letra_p7= new THREE.Mesh(letra_p7g, letra_p7m);
    let letra_p8= new THREE.Mesh(letra_p8g, letra_p8m);
    let letra_p9= new THREE.Mesh(letra_p9g, letra_p9m);
    let letra_p10= new THREE.Mesh(letra_p10g, letra_p10m);
    let letra_p11= new THREE.Mesh(letra_p11g, letra_p11m);
    let letra_p12= new THREE.Mesh(letra_p12g, letra_p12m);
    let letra_p13= new THREE.Mesh(letra_p13g, letra_p13m);
    let letra_p14= new THREE.Mesh(letra_p14g, letra_p14m);


    // Letra o
    letra_O.position.set(0.8,2,0.85);

    // Letra c
    letra_C.position.set(-1.2,2,0.5);
    letra_C.rotation.set(0,4.7,0);
    letra_C.scale.set(1, 1, 1.);

    // Finalizações do C
    letra_p13.position.set(-1.15,2,-0.75);
    letra_p14.position.set(-1.15,2,1.75);

    // Letra t
    letra_T.position.set(10,2,1.5);
    letra_T.scale.set(1.2,0.65,0.8);
    letra_T.rotation.set(0,11,0);

    // Finalizações do T
    letra_p3.position.set(10.1,1.6,2.0);
    letra_p6.position.set(9.99,1.6,-1.38);
    letra_p7.position.set(9,1.6,-0.25);
    letra_p8.position.set(10.85,1.6,-0.25);

    // Letra i (última/primeira)
    letra_I.rotation.set(0,11,0);
    letra_I.position.set(14,2,2);
    letra_I2.rotation.set(0,11,0);
    letra_I2.position.set(8,2,2);

    // Finalizações dos i's
    letra_p.position.set(8.05,2,2);     // parte de baixo do i
    letra_p2.position.set(14.05,2,2);   // parte de baixo do i
    letra_p4.position.set(14,2,-0.3);   // parte de cima do i
    letra_p5.position.set(8,2,-0.3);    // parte de cima do i

    // Pontos dos i's
    letra_ponto.position.set(14,2,-0.8);   // ponto do segundo i
    letra_ponto2.position.set(8,2,-0.8);    // ponto do primeiro i

    // Letra a (última/primeira)
    letra_O2.position.set(12.2,2,1);
    letra_perna.position.set(13.4,2,2);
    letra_perna.scale.set(1.5,0.7,2);
    letra_perna.rotation.set(0,0.15,0);
    letra_O4.position.set(3.3,2,1);
    letra_perna2.position.set(4.5,2,2);
    letra_perna2.scale.set(1.5,0.7,2);
    letra_perna2.rotation.set(0,0.15,0);

    // Finalizações dos a's
    letra_p9.position.set(13.3,1.6,2);
    letra_p9.scale.set(1,1.08,1);
    letra_p12.position.set(4.35,1.6,2);
    letra_p12.scale.set(1,1.08,1);

    // Letra b
    letra_O3.position.set(6.2,2,1);
    letra_b.position.set(5.3,2,2);
    letra_b.scale.set(1.2,1,1.2);

    // Finalizações dos b
    letra_p10.position.set(5.125,1.6,-1.5);
    letra_p10.scale.set(1,1.01,1);
    letra_p11.position.set(5.125,1.6,2);
    letra_p11.scale.set(1,1.01,1);

   
    let palavra = new THREE.Object3D();
   
    palavra.add(letra_O);
    palavra.add(letra_C);
    palavra.add(letra_T);
    palavra.add(letra_I);
    palavra.add(letra_I2);
    palavra.add(letra_ponto);
    palavra.add(letra_ponto2);
    palavra.add(letra_O2);
    palavra.add(letra_perna);
    palavra.add(letra_O3);
    palavra.add(letra_b);
    palavra.add(letra_O4);
    palavra.add(letra_perna2);

    //Finalizações
    palavra.add(letra_p);
    palavra.add(letra_p2);
    palavra.add(letra_p3);
    palavra.add(letra_p4);
    palavra.add(letra_p5);
    palavra.add(letra_p6);
    palavra.add(letra_p7);
    palavra.add(letra_p8);
    palavra.add(letra_p9);
    palavra.add(letra_p10);
    palavra.add(letra_p11);
    palavra.add(letra_p12);
    palavra.add(letra_p13);
    palavra.add(letra_p14);



    palavra.rotation.y = Math.PI / 2;
    palavra.scale.set(1, 1, 1);

   

    return palavra;
}
/**
 * Animate the model
 */
function animate(step) {
    requestAnimationFrame(function () {
        animate(step);
    });
    step.scene.mesh.rotation.y += 0.005;     
    

    step.controls.update();
    step.renderer.render(step.scene, step.camera);
}
/**
 * Setup the rendering context and build a model
 **/
function init(mesh) {
    //
    renderer = new THREE.WebGLRenderer({
        alpha: true
    });
    //renderer.setClearColor("khaki")
    let size = Math.min(1020, 1020);
    renderer.setSize(size, size);
    let div_container = document.getElementById("container");
    div_container.appendChild(renderer.domElement);
    //
    //  Scene (World, Model)
    //
    scene = new THREE.Scene();
    //
    //  Camera (and TrackballControls)
    //
    camera = new THREE.PerspectiveCamera(
        45, // abertura
        512 / 512, // proporÃ§Ã£o largura/altura
        1, // corte perto
        10000 // corte longe
    );
    camera.position.set(0, 0, 8);
    camera.lookAt(scene.position);
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    //
    //  Lights
    //  
    let ambient_light = new THREE.AmbientLight(0xFFFFFF);
    scene.add(ambient_light);
    //
    let sun = new THREE.PointLight(0xffffff, 3, 450);
    sun.position.set(-300, 0, 300);
    scene.add(sun);
    //
    //
    //
    scene.mesh = mesh;
    scene.add(mesh);
    //
    //  Return camera, scene, etc
    //
    return {
        camera: camera,
        scene: scene,
        renderer: renderer,
        controls: controls
    }
}

function C(){

    const shape = new THREE.Shape();

    shape.moveTo(0,1);
    shape.quadraticCurveTo(-2.5,0,0,-1);
    shape.lineTo(0,-1.5)
    shape.quadraticCurveTo(-3.5,0,0,1.49);
    


    //
    //  Spine
    //
    let spine_points = [
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(0, 1, 0)
    ];
    //
    let spine = new THREE.CatmullRomCurve3(spine_points);
    //
    let parameters = {
        extrudePath: spine 
    };
    //
    //  Geometry
    //
    return new THREE.ExtrudeBufferGeometry(shape, parameters);
   
}

function O(){

    const shape = new THREE.Shape();
    shape.arc(0, 0, 1.15, 0, 2 * Math.PI);

    let hole = new THREE.Shape();
    hole.arc(0, 0, 0.85, 0, 2 * Math.PI);
   
    shape.holes.push( hole );

    
    let spine_points = [
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(0, 1, 0)
    ];
    //
    let spine = new THREE.CatmullRomCurve3(spine_points);
    //
    let parameters = {
        extrudePath: spine, 

    };

    const geometry = new THREE.ExtrudeGeometry( shape, parameters );

    return geometry;

}

function O_a(){

    const shape = new THREE.Shape();
    shape.arc(0, 0, 1.05, 0, 2 * Math.PI);

    let hole = new THREE.Shape();
    hole.arc(0, 0, 0.7, 0, 2 * Math.PI);
   
    shape.holes.push( hole );

    
    let spine_points = [
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(0, 1, 0)
    ];
    //
    let spine = new THREE.CatmullRomCurve3(spine_points);
    //
    let parameters = {
        extrudePath: spine, 

    };

    const geometry = new THREE.ExtrudeGeometry( shape, parameters );

    return geometry;

}

function T(){

    //
    //  Geometry
    //
    let cross_section_points = [
        new THREE.Vector2(-0.25, 2.5),
        new THREE.Vector2(0.25, 2.5),
        new THREE.Vector2(0.25, 1.6),
        new THREE.Vector2(1., 1.6),
        new THREE.Vector2(1., 1.3),
        new THREE.Vector2(0.25, 1.3),
        new THREE.Vector2(0.25, 0),
        new THREE.Vector2(0.30, -0.4),
        new THREE.Vector2(0.2, -0.5),
        new THREE.Vector2(-0.25, -0.4),
        new THREE.Vector2(-0.25, 1.3),
        new THREE.Vector2(-1.25, 1.3),
        new THREE.Vector2(-1.25, 1.6),
        new THREE.Vector2(-0.25, 1.6),
    ];


    let cross_section = new THREE.Shape(cross_section_points);
    //
    //  Spine
    //
    let spine_points = [
        new THREE.Vector3(0, -1.5, 0),
        new THREE.Vector3(0, 1.5, 0)
    ];
    //
    let spine = new THREE.CatmullRomCurve3(spine_points);
    //
    let parameters = {
        extrudePath: spine 
    };
    //
    //  Geometry
    //


    return new THREE.ExtrudeBufferGeometry(cross_section, parameters);

   
}

function I(){
    //
    //  Geometry
    //
    let cross_section_points = [
        new THREE.Vector2(0.15, 2.3),
        new THREE.Vector2(-0.15, 2.3),
        new THREE.Vector2(-0.15, -0.1),
        new THREE.Vector2(.15, 0.1),
    ];
    let cross_section = new THREE.Shape(cross_section_points);
    //
    //  Spine
    //
    let spine_points = [
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(0, 1, 0)
    ];
    //
    let spine = new THREE.CatmullRomCurve3(spine_points);
    //
    let parameters = {
        extrudePath: spine 
    };
    //
    //  Geometry
    //
    return new THREE.ExtrudeBufferGeometry(cross_section, parameters);
}

function p(){
    const shape = new THREE.Shape();
    shape.arc(0, 0, 0.2, 0, 2 * Math.PI);

    let spine_points = [
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(0, 1, 0)
    ];
    //
    let spine = new THREE.CatmullRomCurve3(spine_points);
    //
    let parameters = {
        extrudePath: spine, 

    };

    const geometry = new THREE.ExtrudeGeometry( shape, parameters );

    return geometry;
}

function p2(){
    const shape = new THREE.Shape();
    shape.arc(0, 0, 0.15, 0, 2 * Math.PI);

    let spine_points = [
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(0, 1, 0)
    ];
    //
    let spine = new THREE.CatmullRomCurve3(spine_points);
    //
    let parameters = {
        extrudePath: spine, // <-- the spine goes here

    };

    const geometry = new THREE.ExtrudeGeometry( shape, parameters );

    return geometry;
}

function p3(){
    const shape = new THREE.Shape();
    shape.arc(0, 0, 0.28, 0, 2 * Math.PI);

    let spine_points = [
        new THREE.Vector3(0, -0.58, 0),
        new THREE.Vector3(0, 1.38, 0)
    ];
    //
    let spine = new THREE.CatmullRomCurve3(spine_points);
    //
    let parameters = {
        extrudePath: spine, // <-- the spine goes here

    };

    const geometry = new THREE.ExtrudeGeometry( shape, parameters );

    return geometry;
}

function p4(){
    const shape = new THREE.Shape();
    shape.arc(0, 0, 0.23, 0, 2 * Math.PI);

    let spine_points = [
        new THREE.Vector3(0, -0.58, 0),
        new THREE.Vector3(0, 1.38, 0)
    ];
    //
    let spine = new THREE.CatmullRomCurve3(spine_points);
    //
    let parameters = {
        extrudePath: spine, // <-- the spine goes here

    };

    const geometry = new THREE.ExtrudeGeometry( shape, parameters );

    return geometry;
}

function p5(){
    const shape = new THREE.Shape();
    shape.arc(0, 0, 0.2, 0, 2 * Math.PI);

    let spine_points = [
        new THREE.Vector3(0, -0.58, 0),
        new THREE.Vector3(0, 1.38, 0)
    ];
    //
    let spine = new THREE.CatmullRomCurve3(spine_points);
    //
    let parameters = {
        extrudePath: spine, 

    };

    const geometry = new THREE.ExtrudeGeometry( shape, parameters );

    return geometry;
}

function p6(){
    const shape = new THREE.Shape();
    shape.arc(0, 0, 0.24, 0, 2 * Math.PI);

    let spine_points = [
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(0, 1, 0)
    ];
    //
    let spine = new THREE.CatmullRomCurve3(spine_points);
    //
    let parameters = {
        extrudePath: spine, 

    };

    const geometry = new THREE.ExtrudeGeometry( shape, parameters );

    return geometry;
}

function ponto(){
    const shape = new THREE.Shape();
    shape.arc(0, 0, 0.22, 0, 2 * Math.PI);

    let spine_points = [
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(0, 1, 0)
    ];
    //
    let spine = new THREE.CatmullRomCurve3(spine_points);
    //
    let parameters = {
        extrudePath: spine, 

    };

    const geometry = new THREE.ExtrudeGeometry( shape, parameters );

    return geometry;
}

function perna_a(){
    

    //
    //  Geometry
    //
    let cross_section_points = [
        new THREE.Vector2(0,0),
        new THREE.Vector2(0.6,0),
        new THREE.Vector2(0.6, 0.2),
        new THREE.Vector2(0, 0.2),
    ];


    let cross_section = new THREE.Shape(cross_section_points);
    //
    //  Spine
    //
    let spine_points = [
        new THREE.Vector3(0, -1.5, 0),
        new THREE.Vector3(0, 1.5, 0)
    ];
    //
    let spine = new THREE.CatmullRomCurve3(spine_points);
    //
    let parameters = {
        extrudePath: spine 
    };
    //
    //  Geometry
    //


    return new THREE.ExtrudeBufferGeometry(cross_section, parameters);


}

function o_b(){
    const shape = new THREE.Shape();
    shape.arc(0, 0, 1.2, 0, 2 * Math.PI);

    let hole = new THREE.Shape();
    hole.arc(0, 0, 0.9, 0, 2 * Math.PI);
   
    shape.holes.push( hole );

    
    let spine_points = [
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(0, 1, 0)
    ];
    //
    let spine = new THREE.CatmullRomCurve3(spine_points);
    //
    let parameters = {
        extrudePath: spine, 

    };

    const geometry = new THREE.ExtrudeGeometry( shape, parameters );

    return geometry;
}

function b_l(){
    //
    //  Geometry
    //
    let cross_section_points = [
        new THREE.Vector2(0,0),
        new THREE.Vector2(3,0),
        new THREE.Vector2(3,0.3),
        new THREE.Vector2(0, 0.3),
    ];


    let cross_section = new THREE.Shape(cross_section_points);
    //
    //  Spine
    //
    let spine_points = [
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(0, 1, 0)
    ];
    //
    let spine = new THREE.CatmullRomCurve3(spine_points);
    //
    let parameters = {
        extrudePath: spine 
    };
    //
    //  Geometry
    //


    return new THREE.ExtrudeBufferGeometry(cross_section, parameters);
}

/**
 *  Entry function
 */
function main() {
    let step = init(modelo());
    animate(step);
}