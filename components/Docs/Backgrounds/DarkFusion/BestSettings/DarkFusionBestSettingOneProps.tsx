"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

interface DarkFusionBestSettingOnePropsInterface {
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

export default function DarkFusionBestSettingOneProps({
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
}: DarkFusionBestSettingOnePropsInterface) {
    const mountRef = useRef<HTMLDivElement>(null);
    const [webglError, setWebglError] = useState<string | null>(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        // Reset error on (re)mount – async to avoid React warnings
        queueMicrotask(() => {
            setWebglError(null);
        });

        // 1) WebGL support guard
        if (!canUseWebGL()) {
            queueMicrotask(() => {
                setWebglError("WebGL is not supported or is disabled in this browser.");
            });
            return;
        }

        // 2) Container size guard
        let width = mount.clientWidth;
        let height = mount.clientHeight;

        if (width === 0 || height === 0) {
            const rect = mount.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
        }

        if (width === 0 || height === 0) {
            queueMicrotask(() => {
                setWebglError("Animation container has zero size.");
            });
            return;
        }

        // 3) Safe renderer creation
        let renderer: THREE.WebGLRenderer;
        try {
            renderer = new THREE.WebGLRenderer({ antialias: RendererAntialias });
        } catch (err) {
            console.error("Failed to create WebGLRenderer:", err);
            queueMicrotask(() => {
                setWebglError("Failed to initialize WebGL renderer.");
            });
            return;
        }

        renderer.setSize(width, height);
        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio, RendererSetPixelRatio)
        );
        mount.appendChild(renderer.domElement);

        // Scene / Camera
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(SceneBackgroundColor);

        const camera = new THREE.PerspectiveCamera(
            CameraFOV,
            width / height,
            CameraNear,
            CameraFar
        );
        camera.position.set(CameraPositionX, CameraPositionY, CameraPositionZ);

        // Orbit Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = OrbitEnableDamping;
        controls.enableZoom = false;
        controls.enablePan = false;

        // Shader uniforms
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

        // Post-processing
        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));

        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(width, height),
            UnrealBloomPassStrength,
            UnrealBloomPassRadius,
            UnrealBloomPassThreshold
        );
        composer.addPass(bloomPass);

        // WebGL context lost
        const handleContextLost = (e: Event) => {
            e.preventDefault();
            setWebglError(
                "WebGL context was lost. Your device or browser may not reliably support this effect."
            );
        };

        renderer.domElement.addEventListener(
            "webglcontextlost",
            handleContextLost,
            false
        );

        // Animation loop
        const clock = new THREE.Clock();
        let animationFrameId: number;

        const animate = () => {
            const elapsed = clock.getElapsedTime();
            uniforms.time.value = elapsed * 1.0; // 1x speed (already scaled in shader)

            controls.update();
            composer.render();

            animationFrameId = requestAnimationFrame(animate);
        };
        animationFrameId = requestAnimationFrame(animate);

        // Resize handler
        const handleResize = () => {
            const w = mount.clientWidth;
            const h = mount.clientHeight || 1;

            if (w === 0 || h === 0) return;

            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
            composer.setSize(w, h);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            renderer.domElement.removeEventListener(
                "webglcontextlost",
                handleContextLost
            );
            cancelAnimationFrame(animationFrameId);

            geometry.dispose();
            material.dispose();
            composer.dispose();
            renderer.dispose();

            if (mount.contains(renderer.domElement)) {
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

    if (webglError) {
        return (
            <div className="border aspect-video w-full flex items-center justify-center text-xs text-gray-500 text-center px-4">
                {webglError}
            </div>
        );
    }

    return <div ref={mountRef} className="border aspect-video w-full" />;
}
