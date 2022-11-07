



function pyramid() {
  const geometry = new THREE.ConeGeometry( 3, 4, 4,  4, false, 0);
  //let material = new THREE.MeshBasicMaterial( { color: "blue" } );
  //let material = new THREE.MeshDepthMaterial( { color: "cyan" } );
  let material = new THREE.MeshNormalMaterial( { color: "cyan" } ); //=> very pretty
  //let material = new THREE.MeshLambertMaterial( { color: "cyan" } );
  //let material = new THREE.MeshToonMaterial( { color: "cyan" } );
  

  pyramid = new THREE.Mesh( geometry, material );

  let ambient_light = new THREE.AmbientLight(0xFFD6AA); //Sempre necessário

  return [ambient_light, pyramid];
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Definições do Container
function init(objects) {
  //
  let renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  let size = Math.min(parent.innerWidth - 32, parent.innerHeight - 32, 1024);
  renderer.setSize(size, size);
  let div_container = document.getElementById("container");
  div_container.appendChild(renderer.domElement);

  //Cria a cena
  let scene = new THREE.Scene();

  //settings da camara 
  let camera = new THREE.PerspectiveCamera(
    45, // abertura
    512 / 512, // proporção largura/altura
    1, // corte perto
    10000 // corte longe
  );
  camera.position.set(0, 0, 8);
  camera.lookAt(scene.position);
  
  //Define os controlos da imagem
  let controls = new THREE.OrbitControls(camera, renderer.domElement);
  div_container.addEventListener("keypress", (e) => {
    if (e.key == "R" || e.key == "r") controls.reset()
  });
  

  //Adiciona os objetos à cena
  for (let object of objects) {
    scene.add(object);
  }

  return {
    camera: camera,
    scene: scene,
    renderer: renderer,
    controls: controls
  }
}   


function animate(step) {
requestAnimationFrame(() => animate(step));
step.controls.update();
step.renderer.render(step.scene, step.camera);
}

function main() {
  let model = pyramid();              //guarda todos os objetos num modelo
  let step = init(model);                 //Cria a cena e adiciona o modelo (objetos)
  animate(step);
}