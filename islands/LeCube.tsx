import { render } from "$fresh/src/server/render.ts";
import { renderOuterDocument } from "$fresh/src/server/rendering/template.tsx";
import { asset } from "$fresh/runtime.ts";
import * as THREE from "npm:three@0.164.1";
import { useEffect } from "preact/hooks";

export default function LeCube() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const loader = new THREE.TextureLoader();

    const materials = [
      new THREE.MeshBasicMaterial({ map: loader.load(asset("/stfl.webp")) }),
      new THREE.MeshBasicMaterial({ map: loader.load(asset("/stfl.webp")) }),
      new THREE.MeshBasicMaterial({
        map: loader.load(asset("/koku-ava.webp")),
      }),
      new THREE.MeshBasicMaterial({
        map: loader.load(asset("/koku-ava.webp")),
      }),
      new THREE.MeshBasicMaterial({
        map: loader.load(asset("/caretaker.webp")),
      }),
      new THREE.MeshBasicMaterial({
        map: loader.load(asset("/caretaker.webp")),
      }),
    ];

    const renderSize = globalThis.innerWidth > globalThis.innerHeight
      ? globalThis.innerHeight - globalThis.innerHeight / 20
      : globalThis.innerWidth - globalThis.innerWidth / 20;
    const camera = new THREE.PerspectiveCamera(
      40,
      1,
      1,
      100,
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(renderSize, renderSize);
    const leCube = document.getElementById("le-cube") as HTMLDivElement;
    if (leCube) leCube.appendChild(renderer.domElement);

    const cubeLength = 1;
    const geometry = new THREE.BoxGeometry(cubeLength, cubeLength, cubeLength);
    const material = new THREE.MeshBasicMaterial({ color: 0xFF2A2A });
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.015;
      cube.rotation.y += 0.005;
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      leCube.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      id="le-cube"
      class="absolute -z-10 top-40 md:top-0 w-[100dvw] h-[200px]"
    >
    </div>
  );
}
