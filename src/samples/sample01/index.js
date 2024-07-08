import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import glbModel from "../../assets/dol2.glb?url";

// 幅、高さ取得
const width = window.innerWidth;
const height = window.innerHeight;

// レンダラの作成、DOMに追加
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
// renderer.setClearColor(0xf2f2f2, 1.0);
renderer.setClearColor(0x5252ff, 1.0);
document.body.appendChild(renderer.domElement);

// シーンの作成、カメラの作成と追加、ライトの作成と追加
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, width / height, 1, 100);
camera.position.set(0, 4, 10);
// const light  = new THREE.AmbientLight(0xffffff, 1);
// scene.add(light);

// 平行光源を作成
const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);
// 環境光を追加
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

// 3DS形式のモデルデータを読み込む
const loader = new GLTFLoader();

// 3dsファイルのパスを指定

// 6. clockを作成する
const clock = new THREE.Clock();
let mixer;

loader.load(glbModel, (object) => {
  // 読み込み後に3D空間に追加
  // object.scene.rotation.set(-Math.PI / 2, 0, 0);
  object.scene.position.set(0, 1, 0);
  object.scene.scale.set(1.0, 1.0, 1.0);

  mixer = new THREE.AnimationMixer(object.scene);
  console.log(object.animations);

  mixer.clipAction(object.animations[1]).play();
  scene.add(object.scene);
});

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.userPan = false;
controls.userPanSpeed = 0.0;
controls.maxDistance = 5000.0;
controls.maxPolarAngle = Math.PI * 0.495;
controls.autoRotate = true;
controls.autoRotateSpeed = 1.0;

// レンダリング
const animation = () => {
  // 次に実行されるときの時間差を保存
  const delta = clock.getDelta();
  // その時間差分のアニメーションをフレームを更新させる
  if (mixer) mixer.update(delta);

  renderer.render(scene, camera);

  controls.update();

  requestAnimationFrame(animation);
};

animation();
