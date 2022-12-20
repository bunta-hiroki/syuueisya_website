// サイズを指定
const width = window.innerWidth;
const height = window.innerHeight;

function init() {
  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
  });
  renderer.setSize(width, height);
  // renderer.setClearColor(0xfffffff, 1);

  // シーンを作成
  const scene = new THREE.Scene();

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
  camera.position.set(500, 100, +100);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  // for (let i = 0; i < 3; i++) {
    // 球体を作成
    const geometry = new THREE.SphereGeometry(100, 30, 30);
    // 画像を読み込む
    const loader = new THREE.TextureLoader();
    const texture = loader.load('moonmap1k.jpg');
    // マテリアルにテクスチャーを設定
    const material = new THREE.MeshStandardMaterial({
      map: texture
    });
    // メッシュを作成
    const mesh = new THREE.Mesh(geometry, material);
    // mesh.position.x = (i - 1) * 300
    // 3D空間にメッシュを追加
    scene.add(mesh);
  // }

  // 平行光源
  const light = new THREE.DirectionalLight(0xffff00, 1);
  light.position.z = 100;
  scene.add(light);

  // const light = new THREE.SpotLight(0xffffff, 4, 50, Math.PI / 4, 0, 0.5);
  // scene.add(light);


  // 照明を可視化するヘルパー
  const lightHelper = new THREE.DirectionalLightHelper(light);
  scene.add(lightHelper);

  tick();

  // 毎フレーム時に実行されるループイベントです
  function tick() {
    // メッシュを回転させる
    mesh.rotation.y += 0.01;
    // mesh.rotation.x += 0.01;
    // レンダリング
    lightHelper.update();
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
}

init();


