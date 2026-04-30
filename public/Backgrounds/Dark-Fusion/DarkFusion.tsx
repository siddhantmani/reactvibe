"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

type Quality = "low" | "medium" | "high";

interface DarkFusionProps {
    quality?: Quality;

    // Scene
    SceneBackgroundColor?: string;

    // Camera
    CameraFOV?: number;
    CameraNear?: number;
    CameraFar?: number;
    CameraPositionX?: number;
    CameraPositionY?: number;
    CameraPositionZ?: number;

    // Renderer
    RendererAntialias?: boolean;
    RendererSetPixelRatio?: number;

    // Orbit
    OrbitEnableDamping?: boolean;

    // Shader Colors
    ShaderColor1?: string;
    ShaderColor2?: string;

    // Bloom
    UnrealBloomPassStrength?: number;
    UnrealBloomPassRadius?: number;
    UnrealBloomPassThreshold?: number;

    // Animation
    ShaderWaveSpeed?: number;
    ShaderWaveFrequency?: number;
    ShaderGlowIntensity?: number;
}

export default function DarkFusion(props: DarkFusionProps) {
    const mountRef = useRef<HTMLDivElement | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        let renderer: THREE.WebGLRenderer;

        try {
            renderer = new THREE.WebGLRenderer({
                antialias: props.RendererAntialias ?? true,
            });
        } catch {
            setError("WebGL failed to initialize.");
            return;
        }

        // ---------------- QUALITY ----------------
        const dpr = window.devicePixelRatio || 1;

        const QUALITY = {
            high: { pixelRatio: Math.min(dpr, 2), bloom: 1.2, glow: 180 },
            medium: { pixelRatio: Math.min(dpr, 1.5), bloom: 0.8, glow: 120 },
            low: { pixelRatio: 1, bloom: 0.4, glow: 70 },
        };

        let currentQuality: Quality = props.quality || "high";

        // ---------------- SIZE ----------------
        const width = mount.clientWidth;
        const height = mount.clientHeight;

        renderer.setSize(width, height);
        renderer.setPixelRatio(
            props.RendererSetPixelRatio ??
            QUALITY[currentQuality].pixelRatio
        );
        mount.appendChild(renderer.domElement);

        // ---------------- SCENE ----------------
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(
            props.SceneBackgroundColor || "#000000"
        );

        // ---------------- CAMERA ----------------
        const camera = new THREE.PerspectiveCamera(
            props.CameraFOV ?? 5,
            width / height,
            props.CameraNear ?? 2,
            props.CameraFar ?? 1000
        );

        camera.position.set(
            props.CameraPositionX ?? 0,
            props.CameraPositionY ?? 0,
            props.CameraPositionZ ?? 10
        );

        // ---------------- CONTROLS ----------------
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = props.OrbitEnableDamping ?? true;
        controls.enableZoom = false;

        // ---------------- SAFE VALUES ----------------
        const bloomStrength = Math.min(
            props.UnrealBloomPassStrength ??
            QUALITY[currentQuality].bloom,
            3
        );

        const glowIntensity = Math.min(
            props.ShaderGlowIntensity ??
            QUALITY[currentQuality].glow,
            200
        );

        const waveSpeed = props.ShaderWaveSpeed ?? 0.8;
        const waveFreq = props.ShaderWaveFrequency ?? 8;

        const color1 = new THREE.Color(
            props.ShaderColor1 || "#0a0a0a"
        );
        const color2 = new THREE.Color(
            props.ShaderColor2 || "#000000"
        );

        // ---------------- SHADER ----------------
        const uniforms = {
            time: { value: 0 },
            color1: { value: color1 },
            color2: { value: color2 },
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
          float wave = sin(${waveFreq.toFixed(
                1
            )} * vUv.y + time * ${waveSpeed.toFixed(
                1
            )}) * 0.1 + 0.1;

          float glow = exp(-${glowIntensity.toFixed(
                1
            )} * pow(vUv.x - 0.5, 2.0));

          vec3 color = mix(color1, color2, wave) * glow * 2.0;

          gl_FragColor = vec4(color, glow);
        }
      `,
            transparent: true,
            blending: THREE.AdditiveBlending,
        });

        const mesh = new THREE.Mesh(
            new THREE.PlaneGeometry(12, 3, 80, 80),
            material
        );
        scene.add(mesh);

        // ---------------- BLOOM ----------------
        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));

        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(width, height),
            bloomStrength,
            props.UnrealBloomPassRadius ?? 1.2,
            props.UnrealBloomPassThreshold ?? 0
        );

        composer.addPass(bloomPass);

        // ---------------- FPS AUTO DOWNGRADE ----------------
        let lastTime = performance.now();
        let frames = 0;

        function monitorFPS() {
            frames++;
            const now = performance.now();

            if (now - lastTime >= 1000) {
                const fps = frames;

                if (fps < 30 && currentQuality !== "low") {
                    currentQuality =
                        currentQuality === "high" ? "medium" : "low";

                    renderer.setPixelRatio(
                        QUALITY[currentQuality].pixelRatio
                    );
                    bloomPass.strength = QUALITY[currentQuality].bloom;

                    console.warn("Auto downgraded →", currentQuality);
                }

                frames = 0;
                lastTime = now;
            }
        }

        // ---------------- ANIMATION ----------------
        const clock = new THREE.Clock();
        let raf: number;

        const animate = () => {
            uniforms.time.value = clock.getElapsedTime();

            monitorFPS();
            controls.update();
            composer.render();

            raf = requestAnimationFrame(animate);
        };

        animate();

        // ---------------- RESIZE ----------------
        const handleResize = () => {
            const w = mount.clientWidth;
            const h = mount.clientHeight;

            camera.aspect = w / h;
            camera.updateProjectionMatrix();

            renderer.setSize(w, h);
            composer.setSize(w, h);
        };

        window.addEventListener("resize", handleResize);

        // ---------------- CLEANUP ----------------
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", handleResize);

            controls.dispose();
            renderer.dispose();
            composer.dispose();

            if (mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
        };
    }, [props]);

    if (error) {
        return <div className="text-red-400">{error}</div>;
    }

    return (
        <div
            ref={mountRef}
            style={{
                width: "100%",
                height: "100vh",
            }}
        />
    );
}