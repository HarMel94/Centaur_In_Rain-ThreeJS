
function scene() {
  const mainDiv = document.querySelector(".mainDiv");

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(95, mainDiv.clientWidth / mainDiv.clientHeight, 0.1, 1000);
  camera.position.set(0, 22, 30);

  const ambient = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(50, 50, 100);
  scene.add(light);

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(mainDiv.clientWidth, mainDiv.clientHeight);

  mainDiv.appendChild(renderer.domElement);

  const loade = new THREE.GLTFLoader();
  loade.load("./centaur/scene.gltf", function(gltf) {
    scene.add(gltf.scene);
    centaur = gltf.scene.children[0];
    animate();
  });
}

function animate() {
  requestAnimationFrame(animate);
  centaur.rotation.z += -0.0100;
  renderer.render(scene, camera);
}

scene();
