function IcosahedronGeometry() {
    let coordinates = [
        new THREE.Vector3(0.0, 0.0, 0.0),
        new THREE.Vector3(0.0, 0.0, 10.),
        new THREE.Vector3(10.0, 0.0, 10.0),
        new THREE.Vector3(10.0, 0.0, 0.0),
        new THREE.Vector3(5.0, 10.0, 5.0) ];
  
    let faces = [
        new THREE.Face3(0, 3, 2),
        new THREE.Face3(2, 1, 0),
        new THREE.Face3(1, 2, 4),
        new THREE.Face3(2, 3, 4),
        new THREE.Face3(4, 3, 0),
        new THREE.Face3(4, 0, 1) ];
  
    let uv_coordinates = [
      new THREE.Vector2(0.00, 0.00),
      new THREE.Vector2(1.00, 0.00),
      new THREE.Vector2(0.50, 1.00),
    ];
  
    let uv_map = new Array(faces.length);
    for (let i = 0; i < faces.length; i++) {
      uv_map[i] = uv_coordinates;
    }
  
    let geo = new THREE.Geometry();
    geo.vertices = coordinates;
    geo.faces = faces;
    //
    geo.faceVertexUvs[0] = uv_map;
    geo.uvsNeedUpdate = true;
    //
    geo.computeFaceNormals();
    geo.computeBoundingSphere();
    


    return geo;
  }
  
  function icosahedron() {
    //
    //  Geometry
    //
    let geometry = IcosahedronGeometry();
    //
    let loader = new THREE.TextureLoader();
    let diffuseMap = loader.load("patter.jpg");
    let specularMap = loader.load("media/tri2_s.png");
    let normalMap = loader.load("media/tri2_n.png");
    let material = new THREE.MeshPhongMaterial({
        specular: 0xFFFFFF,
        shininess: 5,
        map: diffuseMap,
        specularMap: specularMap,
        normalMap: normalMap
    });
    let mesh = new THREE.Mesh(geometry, material);
    mesh.translateZ(-5);
    mesh.translateX(-5);
    
    return [mesh];
  }
  /**
  * Setup the rendering context and build a model
  **/
  function init(objects) {
    //
    let renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    //renderer.setClearColor("khaki")
    let size = Math.min(parent.innerWidth - 32, parent.innerHeight - 32, 1024);
    renderer.setSize(size, size);
    let div_container = document.getElementById("container");
    div_container.appendChild(renderer.domElement);
    //
  
    let scene = new THREE.Scene();
    //
    //  Camera (and TrackballControls)
    //
    let camera = new THREE.PerspectiveCamera(
      45, // abertura
      512 / 512, // proporÃ§Ã£o largura/altura
      1, // corte perto
      10000 // corte longe
    );
    camera.position.set(0, 0, 8);
    camera.lookAt(scene.position);
    //
    let controls = new THREE.OrbitControls(camera, renderer.domElement);
    div_container.addEventListener("keypress", (e) => {
      if (e.key == "R" || e.key == "r") controls.reset()});
    //
    //
    for (let object of objects) {
      scene.add(object);
    }
    //
    //  Lights
    //  
    //  255, 214, 170 -> #FFD6AA
    let ambient_light = new THREE.AmbientLight(0xFFD6AA);
    //
    let headlight = new THREE.SpotLight( 0xFFD6AA );
    headlight.intensity = 1.0;
    headlight.position.set(
      camera.position.x,
      camera.position.y, 
      camera.position.z);
    headlight.target = objects[0];
    headlight.castShadow = true;
  
    scene.add(headlight);
  
    return {
      camera: camera,
      scene: scene,
      renderer: renderer,
      controls: controls,
      headlight: headlight,
    }
  }
  /**
  * Animate the model
  */
  function animate(step) {
    requestAnimationFrame(() => animate(step));
    step.controls.update();
    step.headlight.position.set(
      step.camera.position.x,
      step.camera.position.y, 
      step.camera.position.z);
    step.renderer.render(step.scene, step.camera);
  }
  /**
  *  Entry function
  */
  function main() {
    let model = icosahedron();
    let step = init(model);
    animate(step);
  }