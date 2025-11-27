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

interface Props {
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

    // Particles
    ParticleCount: number;
    ParticleSize: number;
    ParticleOpacity: number;
    ParticleInnerColor: string;
    ParticleOuterColor: string;

    // Bloom
    UnrealBloomPassStrength: number;
    UnrealBloomPassRadius: number;
    UnrealBloomPassThreshold: number;

    // Animation
    ParticleRotationSpeed: number;
    ShaderWaveSpeed: number;
    ShaderWaveFrequency: number;
    ShaderGlowIntensity: number;

    // Interaction
    MouseInfluence: number;
}

interface ParticleData {
    radius: number;
    angle: number;
    speed: number;
    y: number;
}

interface ShaderUniforms {
    [uniform: string]: { value: number | THREE.Color | THREE.Vector2 };
    time: { value: number };
    color1: { value: THREE.Color };
    color2: { value: THREE.Color };
    uMouse: { value: THREE.Vector2 };
}

export default function LordStar(rawProps: Props) {
    const mountRef = useRef<HTMLDivElement | null>(null);
    const propsRef = useRef<Props>(rawProps);
    const [webglError, setWebglError] = useState<string | null>(null);

    // Always keep latest props in a ref (effect runs once)
    useEffect(() => {
        propsRef.current = rawProps;
    }, [rawProps]);

    useEffect(() => {
        const mountEl = mountRef.current;
        if (!mountEl) return;

        let disposed = false;

        // Clear previous error (if any) on mount/init
        queueMicrotask(() => {
            if (!disposed) setWebglError(null);
        });

        // WebGL capability guard
        if (!canUseWebGL()) {
            queueMicrotask(() => {
                if (!disposed) {
                    setWebglError(
                        "WebGL is not supported or is disabled in this browser."
                    );
                }
            });
            return;
        }

        // Real size guard
        let width = mountEl.clientWidth;
        let height = mountEl.clientHeight;

        if (width === 0 || height === 0) {
            const rect = mountEl.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
        }

        if (width === 0 || height === 0) {
            queueMicrotask(() => {
                if (!disposed) {
                    setWebglError("Container has zero size.");
                }
            });
            return;
        }

        const props = propsRef.current;

        // GPU / quality profiling 
        let renderer: THREE.WebGLRenderer;

        try {
            renderer = new THREE.WebGLRenderer({
                antialias: props.RendererAntialias,
            });
        } catch {
            queueMicrotask(() => {
                if (!disposed) {
                    setWebglError("Failed to initialize WebGL renderer.");
                }
            });
            return;
        }

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
            nameLower.includes("intel") &&
            (nameLower.includes("uhd") || nameLower.includes("iris"));

        if (isMobileGPU || isWeakIntel || cores <= 4 || dpr <= 1.1) {
            quality = "low";
        } else if (cores <= 6 || dpr <= 1.6) {
            quality = "medium";
        }

        const baseParticleCount = props.ParticleCount;
        const baseBloomStrength = props.UnrealBloomPassStrength;

        const particleCount =
            quality === "high"
                ? baseParticleCount
                : quality === "medium"
                    ? Math.floor(baseParticleCount * 0.7)
                    : Math.max(500, Math.floor(baseParticleCount * 0.4));

        const bloomStrength =
            quality === "high"
                ? baseBloomStrength
                : quality === "medium"
                    ? baseBloomStrength * 0.75
                    : baseBloomStrength * 0.5;

        const basePixelRatio = Math.min(dpr, props.RendererSetPixelRatio);
        const pixelRatio =
            quality === "high"
                ? basePixelRatio
                : quality === "medium"
                    ? Math.min(basePixelRatio, 1.5)
                    : Math.min(basePixelRatio, 1.25);

        renderer.setPixelRatio(pixelRatio);
        renderer.setSize(width, height);
        mountEl.appendChild(renderer.domElement);

        // Scene / Camera 
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(props.SceneBackgroundColor);

        const camera = new THREE.PerspectiveCamera(
            props.CameraFOV,
            width / height,
            props.CameraNear,
            props.CameraFar
        );
        camera.position.set(
            props.CameraPositionX,
            props.CameraPositionY,
            props.CameraPositionZ
        );

        // Controls 
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = props.OrbitEnableDamping;
        controls.enableZoom = false;
        controls.enablePan = false;

        // Shader uniforms 
        const uniforms: ShaderUniforms = {
            time: { value: 0 },
            color1: { value: new THREE.Color(props.ShaderColor1) },
            color2: { value: new THREE.Color(props.ShaderColor2) },
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        };

        const shaderMaterial = new THREE.ShaderMaterial({
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
                uniform vec2 uMouse;
                varying vec2 vUv;

                void main() {
                    float dist = distance(vUv, uMouse);
                    dist *= ${props.MouseInfluence.toFixed(2)};

                    float wave = sin(
                        ${props.ShaderWaveFrequency.toFixed(1)} * vUv.y +
                        time * ${props.ShaderWaveSpeed.toFixed(1)} -
                        dist * 12.0
                    ) * 0.5 + 0.5;

                    float glow = exp(-${props.ShaderGlowIntensity.toFixed(1)} * dist);

                    vec3 color = mix(color1, color2, wave) * (glow + 0.4);
                    gl_FragColor = vec4(color, 1.0);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
        });

        const planeGeometry = new THREE.PlaneGeometry(12, 3, 100, 100);
        const planeMesh = new THREE.Mesh(planeGeometry, shaderMaterial);
        scene.add(planeMesh);

        // Particles with orbit 
        const particleGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const particleData: ParticleData[] = [];

        for (let i = 0; i < particleCount; i++) {
            const radius = 3 + Math.random() * 8;
            const angle = Math.random() * Math.PI * 2;
            const speed = 0.001 + Math.random() * 0.002;
            const y = (Math.random() - 0.5) * 6;

            particleData.push({ radius, angle, speed, y });

            positions[i * 3 + 0] = Math.cos(angle) * radius;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = Math.sin(angle) * radius;
        }

        particleGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        );

        const particleMaterial = new THREE.PointsMaterial({
            size: props.ParticleSize,
            transparent: true,
            opacity: props.ParticleOpacity,
            color: props.ParticleInnerColor,
        });

        const particles = new THREE.Points(
            particleGeometry,
            particleMaterial
        );
        scene.add(particles);

        // Postprocessing 
        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));

        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(width, height),
            bloomStrength,
            props.UnrealBloomPassRadius,
            props.UnrealBloomPassThreshold
        );
        composer.addPass(bloomPass);

        // Mouse tracking (rAF throttled) 
        let mouseRafQueued = false;
        let lastMouseX = 0;
        let lastMouseY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            lastMouseX = e.clientX;
            lastMouseY = e.clientY;

            if (!mouseRafQueued) {
                mouseRafQueued = true;
                requestAnimationFrame(() => {
                    uniforms.uMouse.value.x = lastMouseX / window.innerWidth;
                    uniforms.uMouse.value.y =
                        1 - lastMouseY / window.innerHeight;
                    mouseRafQueued = false;
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Resize handler 
        const handleResize = () => {
            const rect = mountEl.getBoundingClientRect();
            const w = rect.width || 1;
            const h = rect.height || 1;

            camera.aspect = w / h;
            camera.updateProjectionMatrix();

            renderer.setSize(w, h);
            composer.setSize(w, h);
            bloomPass.setSize(w, h);
        };

        window.addEventListener("resize", handleResize);

        // WebGL context lost 
        const handleContextLost = (event: Event) => {
            event.preventDefault();
            queueMicrotask(() => {
                if (!disposed) {
                    setWebglError(
                        "WebGL context was lost. Your device or browser may not reliably support this effect."
                    );
                }
            });
        };

        renderer.domElement.addEventListener(
            "webglcontextlost",
            handleContextLost,
            false
        );

        // Animation loop 
        const clock = new THREE.Clock();
        let animationId = 0;

        const animate = () => {
            const delta = clock.getDelta();
            const elapsed = clock.getElapsedTime();

            uniforms.time.value = elapsed;

            const arr = particleGeometry.attributes.position
                .array as Float32Array;

            for (let i = 0; i < particleCount; i++) {
                const p = particleData[i];
                p.angle += p.speed * delta * 60;

                arr[i * 3 + 0] = Math.cos(p.angle) * p.radius;
                arr[i * 3 + 1] = p.y;
                arr[i * 3 + 2] = Math.sin(p.angle) * p.radius;
            }

            particleGeometry.attributes.position.needsUpdate = true;

            controls.update();
            composer.render();

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        // ------- Cleanup -------
        return () => {
            disposed = true;

            if (animationId) {
                cancelAnimationFrame(animationId);
            }

            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
            renderer.domElement.removeEventListener(
                "webglcontextlost",
                handleContextLost
            );

            controls.dispose();

            planeGeometry.dispose();
            particleGeometry.dispose();
            shaderMaterial.dispose();
            particleMaterial.dispose();
            composer.dispose();
            renderer.dispose();

            scene.clear();

            if (mountEl.contains(renderer.domElement)) {
                mountEl.removeChild(renderer.domElement);
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
