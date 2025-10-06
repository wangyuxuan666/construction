<template>
  <div id="container"></div>
</template>

<script>
import * as THREE from "three";
// 导入轨道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export default {
  name: "ThreeTest",

  data() {
    return {
      group: null,
      particlesData: [],
      container: null,
      camera: null,
      scene: null,
      renderer: null,
      positions: null,
      colors: null,
      particles: null,
      pointCloud: {},
      particlePositions: null,
      linesMesh: {},
      maxParticleCount: 1000,
      particleCount: 500,
      r: 3000,
      rHalf: 20,
      effectController: {
        showDots: true,
        showLines: true,
        minDistance: 300,
        limitConnections: false,
        maxConnections: 20,
        particleCount: 500,
      },
    };
  },

  methods: {
    async init() {
      let {
        particlesData,
        container,
        positions,
        colors,
        particlePositions,
        maxParticleCount,
        particleCount,
        r,
        particles,
      } = this;

      // 获取dom
      container = document.getElementById("container");
      // 照相机
      this.camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        1,
        4000
      );
      this.camera.position.z = 1650;

      // 创建场景
      this.scene = new THREE.Scene();
      // 组
      this.group = new THREE.Group();
      this.scene.add(this.group);

      // 辅助线
      const helper = new THREE.BoxHelper(
        new THREE.Mesh(new THREE.BoxGeometry(r, r, r))
      );
      helper.material.color.setHex(0x101010);
      helper.material.blending = THREE.AdditiveBlending;
      helper.material.transparent = true;
      this.group.add(helper);

      // 创建点
      const pMaterial = new THREE.PointsMaterial({
        color: "#3e5a4e",
        size: 3,
        blending: THREE.AdditiveBlending,
        transparent: true,
        sizeAttenuation: false,
      });

      this.particles = new THREE.BufferGeometry();

      for (let i = 0; i < maxParticleCount; i++) {
        const x = Math.random() * r - r / 2;
        const y = Math.random() * r - r / 2;
        const z = Math.random() * r - r / 2;
        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;

        // add it to the geometry
        particlesData.push({
          velocity: new THREE.Vector3(
            -1 + Math.random() * 2,
            -1 + Math.random() * 2,
            -1 + Math.random() * 2
          ),
          numConnections: 0,
        });
      }

      this.particles.setDrawRange(0, particleCount);
      this.particles.setAttribute(
        "position",
        new THREE.BufferAttribute(particlePositions, 3).setUsage(
          THREE.DynamicDrawUsage
        )
      );

      this.pointCloud = new THREE.Points(this.particles, pMaterial);
      this.group.add(this.pointCloud);

      // 创建线
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage)
      );
      geometry.setAttribute(
        "color",
        new THREE.BufferAttribute(colors, 3).setUsage(THREE.DynamicDrawUsage)
      );

      geometry.computeBoundingSphere();

      geometry.setDrawRange(0, 0);

      const material = new THREE.LineBasicMaterial({
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
      });

      this.linesMesh = new THREE.LineSegments(geometry, material);
      this.group.add(this.linesMesh);

      //渲染器
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      this.renderer.outputEncoding = THREE.sRGBEncoding;

      // 轨道
      const controls = new OrbitControls(this.camera, this.renderer.domElement);

      // 将webgl渲染的canvas内容添加到body
      container.appendChild(this.renderer.domElement);
    },

    animate() {
      let {
        particlesData,
        positions,
        colors,
        particlePositions,
        particleCount,
        rHalf,
        effectController,
      } = this;
      let vertexpos = 0;
      let colorpos = 0;
      let numConnected = 0;
      for (let i = 0; i < particleCount; i++) {
        particlesData[i].numConnections = 0;
      }
      for (let i = 0; i < particleCount; i++) {
        // get the particle
        const particleData = particlesData[i];
        particlePositions[i * 3] += particleData.velocity.x;
        particlePositions[i * 3 + 1] += particleData.velocity.y;
        particlePositions[i * 3 + 2] += particleData.velocity.z;

        if (
          particlePositions[i * 3 + 1] < -rHalf ||
          particlePositions[i * 3 + 1] > rHalf
        )
          particleData.velocity.y = -particleData.velocity.y;

        if (
          particlePositions[i * 3] < -rHalf ||
          particlePositions[i * 3] > rHalf
        )
          particleData.velocity.x = -particleData.velocity.x;

        if (
          particlePositions[i * 3 + 2] < -rHalf ||
          particlePositions[i * 3 + 2] > rHalf
        )
          particleData.velocity.z = -particleData.velocity.z;

        if (
          effectController.limitConnections &&
          particleData.numConnections >= effectController.maxConnections
        )
          continue;

        // Check collision
        for (let j = i + 1; j < particleCount; j++) {
          const particleDataB = particlesData[j];
          if (
            effectController.limitConnections &&
            particleDataB.numConnections >= effectController.maxConnections
          )
            continue;

          const dx = particlePositions[i * 3] - particlePositions[j * 3];
          const dy =
            particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
          const dz =
            particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < effectController.minDistance) {
            particleData.numConnections++;
            particleDataB.numConnections++;

            const alpha = 1.0 - dist / effectController.minDistance;

            positions[vertexpos++] = particlePositions[i * 3];
            positions[vertexpos++] = particlePositions[i * 3 + 1];
            positions[vertexpos++] = particlePositions[i * 3 + 2];

            positions[vertexpos++] = particlePositions[j * 3];
            positions[vertexpos++] = particlePositions[j * 3 + 1];
            positions[vertexpos++] = particlePositions[j * 3 + 2];

            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;

            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;

            numConnected++;
          }
        }
      }
      this.linesMesh.geometry.setDrawRange(0, numConnected * 2);
      this.linesMesh.geometry.attributes.position.needsUpdate = true;
      this.linesMesh.geometry.attributes.color.needsUpdate = true;
      this.pointCloud.geometry.attributes.position.needsUpdate = true;

      requestAnimationFrame(this.animate);

      this.render();
    },
    render() {
      const time = Date.now() * 0.001;
      this.group.rotation.y = time * 0.1;
      this.renderer.render(this.scene, this.camera);
    },
  },

  mounted() {
    const segments = 10000;
    this.particlePositions = new Float32Array(this.maxParticleCount * 3);
    this.positions = new Float32Array(segments * 3);
    this.colors = new Float32Array(segments * 3);

    this.init();
    this.animate();
  },
};
</script>

<style scoped>
#container {
  height: 100vh;
  background-color: #111;
  /* background-image: linear-gradient(to bottom, #0d3f26, #000); */
}
</style>
