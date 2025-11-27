
// Capy and paste this code into you PageProps.tsx

"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

interface VibeHeroAnimationPropsInterface {
    // Scene
    SceneBackgroundColor: string;

    // Camera
    CameraFOV: number;
    CameraNear: number;
    CameraFar: number;
    CameraPositionX: number;
    CameraPositionY: number;
    CameraPositionZ: number;

    // Renderer
    RendererAntialias: boolean;
    RendererSetPixelRatio: number;

    // Orbit Controls
    OrbitEnableDamping: boolean;

    // Shader Colors
    ShaderColor1: string;
    ShaderColor2: string;

    // Bloom
    UnrealBloomPassStrength: number;
    UnrealBloomPassRadius: number;
    UnrealBloomPassThreshold: number;

    // Animation
    ShaderWaveSpeed: number;
    ShaderWaveFrequency: number;
    ShaderGlowIntensity: number;
}

export default function VibeHeroAnimationProps({
    SceneBackgroundColor,
    CameraFOV,
    CameraNear,
    CameraFar,
    CameraPositionX,
    CameraPositionY,
    CameraPositionZ,
    RendererAntialias,
    RendererSetPixelRatio,
    OrbitEnableDamping,
    ShaderColor1,
    ShaderColor2,
    UnrealBloomPassStrength,
    UnrealBloomPassRadius,
    UnrealBloomPassThreshold,
    ShaderWaveSpeed,
    ShaderWaveFrequency,
    ShaderGlowIntensity,
}: VibeHeroAnimationPropsInterface) {
    const mountRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(SceneBackgroundColor);

        const width = mount.clientWidth;
        const height = mount.clientHeight;

        const camera = new THREE.PerspectiveCamera(CameraFOV, width / height, CameraNear, CameraFar);
        camera.position.set(CameraPositionX, CameraPositionY, CameraPositionZ);

        const renderer = new THREE.WebGLRenderer({ antialias: RendererAntialias });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, RendererSetPixelRatio));
        mount.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = OrbitEnableDamping;
        controls.enableZoom = false; // 👈 Prevent zooming on scroll
        controls.enablePan = false;  // (optional) lock camera position

        const uniforms = {
            time: { value: 0 },
            color1: { value: new THREE.Color(ShaderColor1) },
            color2: { value: new THREE.Color(ShaderColor2) },
        };

        const material = new THREE.ShaderMaterial({
            uniforms,
            vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
            fragmentShader: `
      uniform float time;
      uniform vec3 color1;
      uniform vec3 color2;
      varying vec2 vUv;

      void main() {
        float wave = sin(${ShaderWaveFrequency.toFixed(1)} * vUv.y + time * ${ShaderWaveSpeed.toFixed(1)}) * 0.10 + 0.10;
        float glow = exp(-${ShaderGlowIntensity.toFixed(1)} * pow(vUv.x - 0.5, 2.0));
        vec3 color = mix(color1, color2, wave) * glow * 2.0;
        gl_FragColor = vec4(color, glow);
      }
    `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            side: THREE.DoubleSide,
        });

        const geometry = new THREE.PlaneGeometry(12, 3, 100, 100);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));

        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(width, height),
            UnrealBloomPassStrength,
            UnrealBloomPassRadius,
            UnrealBloomPassThreshold
        );
        composer.addPass(bloomPass);

        let animationFrameId: number;
        const animate = (t: number) => {
            uniforms.time.value = t * 0.002;
            controls.update();
            composer.render();
            animationFrameId = requestAnimationFrame(animate);
        };
        animate(0);

        const handleResize = () => {
            const w = mount.clientWidth;
            const h = mount.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
            composer.setSize(w, h);
        };
        window.addEventListener("resize", handleResize);

        // ✅ CLEANUP
        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);

            geometry.dispose();
            material.dispose();
            renderer.dispose();
            composer.dispose();

            // 🧹 Remove previous canvas
            if (renderer.domElement && mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
        };
    }, [
        SceneBackgroundColor,
        CameraFOV,
        CameraNear,
        CameraFar,
        CameraPositionX,
        CameraPositionY,
        CameraPositionZ,
        RendererAntialias,
        RendererSetPixelRatio,
        OrbitEnableDamping,
        ShaderColor1,
        ShaderColor2,
        UnrealBloomPassStrength,
        UnrealBloomPassRadius,
        UnrealBloomPassThreshold,
        ShaderWaveSpeed,
        ShaderWaveFrequency,
        ShaderGlowIntensity,
    ]);


    return <div ref={mountRef} className="w-full h-screen" />;
}

