const container = document.getElementById('pet');
const message = document.getElementById('pet-message');
const handshakeButton = document.getElementById('shake-hands');
const resetButton = document.getElementById('reset-view');
const voice = document.getElementById('sir-gavin-handshake-voice');
const contactDialog = document.getElementById('contact-author-dialog');
document.getElementById('contact-author').addEventListener('click', () => contactDialog.showModal());
document.getElementById('contact-author-close').addEventListener('click', () => contactDialog.close());
contactDialog.addEventListener('click', event => {
  const bounds = contactDialog.getBoundingClientRect();
  if (event.target === contactDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) contactDialog.close();
});

async function initialize() {
  const THREE = await import('three');
  const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js');
  const { OrbitControls } = await import('three/addons/controls/OrbitControls.js');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  camera.position.set(0, 0.72, 2);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.setAttribute('aria-label', 'Sir.Gavin 三维展示，可拖动旋转或使用方向键平移');
  renderer.domElement.tabIndex = 0;
  container.appendChild(renderer.domElement);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0.72, 0);
  controls.minDistance = 2;
  controls.maxDistance = 12;
  controls.listenToKeyEvents(renderer.domElement);
  controls.update();
  controls.saveState();
  const light = new THREE.DirectionalLight(0xfff1d2, 2.2);
  light.position.set(-5, 10, 7);
  scene.add(light, new THREE.HemisphereLight(0xd9f3ff, 0x50633c, 1.5));
  const resize = new ResizeObserver(() => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });
  resize.observe(container);
  const gltf = await new GLTFLoader().loadAsync('/knight/media/sir-gavin.gltf');
  const model = gltf.scene;
  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  const scale = 3 / Math.max(size.x, size.y, size.z);
  model.scale.setScalar(scale);
  model.position.copy(center).multiplyScalar(-scale);
  scene.add(model);
  const mixer = new THREE.AnimationMixer(model);
  const idleClip = gltf.animations.find(clip => clip.name === 'Gavin_Idle_HandsOnHips_Loop')
    || gltf.animations.find(clip => /idle/i.test(clip.name));
  const handshakeClip = gltf.animations.find(clip => clip.name === 'Gavin_RightHand_Handshake_Offer')
    || gltf.animations.find(clip => /handshake/i.test(clip.name));
  const idle = idleClip ? mixer.clipAction(idleClip) : null;
  const handshake = handshakeClip ? mixer.clipAction(handshakeClip) : null;
  if (idle) idle.setLoop(THREE.LoopRepeat, Infinity).play();
  if (handshake) {
    handshake.setLoop(THREE.LoopOnce, 1);
    handshake.clampWhenFinished = true;
    mixer.addEventListener('finished', event => {
      if (event.action !== handshake) return;
      handshake.fadeOut(0.25);
      if (idle) idle.reset().fadeIn(0.25).play();
    });
  }
  handshakeButton.disabled = !handshake;
  resetButton.disabled = false;
  message.textContent = handshake ? 'Sir.Gavin 已准备好与你握手。' : 'Sir.Gavin 已到来，模型未包含握手动作。';
  resetButton.addEventListener('click', () => controls.reset());
  handshakeButton.addEventListener('click', () => {
    if (idle) idle.fadeOut(0.2);
    handshake.reset().fadeIn(0.2).play();
    message.textContent = '你与 Sir.Gavin 握了手。';
    voice.pause();
    voice.currentTime = 0;
    voice.play().catch(() => { message.textContent = '握手动作已播放，但语音播放失败。'; });
  });
  const clock = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    const elapsed = Math.min(clock.getDelta(), 0.1);
    if (!document.hidden) {
      mixer.update(elapsed);
      renderer.render(scene, camera);
    }
  });
}

initialize().catch(error => {
  console.error('Sir.Gavin initialization failed:', error);
  message.textContent = 'Sir.Gavin 加载失败，请检查网络及浏览器 WebGL 支持，然后刷新重试。';
});
