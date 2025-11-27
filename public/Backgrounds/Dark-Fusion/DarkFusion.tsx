"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

function canUseWebGL(): boolean {
    try {
        const canvas = document.createElement("canvas");
        return !!(
            canvas.getContext("webgl") ||
            canvas.getContext("experimental-webgl")
        );
    } catch {
        return false;
    }
}

interface DarkFusionProps {
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

export default function DarkFusion(props: DarkFusionProps) {
    const mountRef = useRef<HTMLDivElement | null>(null);
    const propsRef = useRef<DarkFusionProps>(props);

    const [webglError, setWebglError] = useState<string | null>(null);

    // Keep latest props in a ref (effect runs once; no re-init on parent re-render)
    useEffect(() => {
        propsRef.current = props;
    }, [props]);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        // Clear previous error (defer to avoid "setState in effect" lint)
        queueMicrotask(() => {
            setWebglError(null);
        });

        // WebGL support guard
        if (!canUseWebGL()) {
            queueMicrotask(() => {
                setWebglError("WebGL is not supported or is disabled in this browser.");
            });
            return;
        }

        // Real size guard
        let width = mount.clientWidth;
        let height = mount.clientHeight;

        if (width === 0 || height === 0) {
            const rect = mount.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
        }

        if (width === 0 || height === 0) {
            queueMicrotask(() => {
                setWebglError("Container has zero size.");
            });
            return;
        }

        const p = propsRef.current;

        // GPU profiling & quality tier
        const renderer = new THREE.WebGLRenderer({
            antialias: p.RendererAntialias,
        });

        const gl = renderer.getContext();
        const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");

        const nav = navigator as Navigator & { hardwareConcurrency?: number };
        const cores = nav.hardwareConcurrency ?? 4;
        const dpr = window.devicePixelRatio || 1;

        let gpuName = "";
        if (debugInfo) {
            gpuName = gl.getParameter(
                debugInfo.UNMASKED_RENDERER_WEBGL
            ) as string;
        }

        type Quality = "low" | "medium" | "high";
        let quality: Quality = "high";

        const nameLower = gpuName.toLowerCase();
        const isMobileGPU =
            nameLower.includes("mali") ||
            nameLower.includes("adreno") ||
            nameLower.includes("powervr");
        const isWeakIntel =
            nameLower.includes("intel") ||
            nameLower.includes("uhd") ||
            nameLower.includes("iris");

        if (isMobileGPU || isWeakIntel || cores <= 4 || dpr <= 1.25) {
            quality = "low";
        } else if (cores <= 6 || dpr <= 1.75) {
            quality = "medium";
        }

        const baseBloomStrength = p.UnrealBloomPassStrength;
        const basePixelRatio = Math.min(dpr, p.RendererSetPixelRatio);

        const bloomStrength =
            quality === "high"
                ? baseBloomStrength
                : quality === "medium"
                    ? baseBloomStrength * 0.7
                    : baseBloomStrength * 0.5;

        const pixelRatio =
            quality === "high"
                ? basePixelRatio
                : quality === "medium"
                    ? Math.min(basePixelRatio, 1.5)
                    : Math.min(basePixelRatio, 1.25);

        renderer.setSize(width, height);
        renderer.setPixelRatio(pixelRatio);
        mount.appendChild(renderer.domElement);

        // Scene + Camera
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(p.SceneBackgroundColor);

        const camera = new THREE.PerspectiveCamera(
            p.CameraFOV,
            width / height,
            p.CameraNear,
            p.CameraFar
        );
        camera.position.set(
            p.CameraPositionX,
            p.CameraPositionY,
            p.CameraPositionZ
        );

        // Orbit Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = p.OrbitEnableDamping;
        controls.enableZoom = false;
        controls.enablePan = false;

        // Shader Material
        const uniforms = {
            time: { value: 0 },
            color1: { value: new THREE.Color(p.ShaderColor1) },
            color2: { value: new THREE.Color(p.ShaderColor2) },
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
                    float wave = sin(${p.ShaderWaveFrequency.toFixed(1)} * vUv.y
                                     + time * ${p.ShaderWaveSpeed.toFixed(1)}) * 0.10 + 0.10;

                    float glow = exp(-${p.ShaderGlowIntensity.toFixed(1)} * pow(vUv.x - 0.5, 2.0));

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

        // Postprocessing (Bloom)
        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));

        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(width, height),
            bloomStrength,
            p.UnrealBloomPassRadius,
            p.UnrealBloomPassThreshold
        );
        composer.addPass(bloomPass);

        // WebGL context lost handling
        const handleContextLost = (event: Event) => {
            event.preventDefault();
            queueMicrotask(() => {
                setWebglError(
                    "WebGL context was lost. Your device or browser may not reliably support this effect."
                );
            });
        };

        renderer.domElement.addEventListener(
            "webglcontextlost",
            handleContextLost,
            false
        );

        //Animation Loop
        const clock = new THREE.Clock();
        let animationFrameId: number;

        const animate = () => {
            const elapsed = clock.getElapsedTime();
            uniforms.time.value = elapsed;

            controls.update();
            composer.render();

            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        // Resize Handling 
        const handleResize = () => {
            const el = mountRef.current;
            if (!el) return;

            const w = el.clientWidth;
            const h = el.clientHeight;
            if (w === 0 || h === 0) return;

            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
            composer.setSize(w, h);
        };

        window.addEventListener("resize", handleResize);

        //  Cleanup on Unmount
        return () => {
            window.removeEventListener("resize", handleResize);
            renderer.domElement.removeEventListener(
                "webglcontextlost",
                handleContextLost
            );

            cancelAnimationFrame(animationFrameId);

            controls.dispose();
            geometry.dispose();
            material.dispose();
            composer.dispose();
            renderer.dispose();

            scene.clear();

            if (mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
        };
    }, []);

    if (webglError) {
        return (
            <div className="flex items-center justify-center h-[400px] border border-gray-600 rounded-xl text-gray-400 text-sm text-center px-6">
                {webglError}
            </div>
        );
    }

    return (
        <div
            ref={mountRef}
            style={{ width: "100%", height: "100vh" }}
        />
    );
}
