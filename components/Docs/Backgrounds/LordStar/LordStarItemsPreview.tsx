"use client";

import { Switch } from "@/components/ui/switch";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Code, Eye } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import LordStarItemsPreviewSourceCode from "./LordStarItemsPreviewSourceCode";
import MountWhenActive from "@/components/MountWhenActive";
import GradientHaloToggleContent from "../GradientHalo/HeroToggle/GradientHaloToggleContent";
import { motion } from "framer-motion";

/* ----------------------------------------------
   Helpers
---------------------------------------------- */

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

/* ----------------------------------------------
   Types
---------------------------------------------- */

interface Props {
    SceneBackgroundColor: string;
    CameraFOV: number;
    CameraNear: number;
    CameraFar: number;
    CameraPositionX: number;
    CameraPositionY: number;
    CameraPositionZ: number;

    RendererAntialias: boolean;
    RendererSetPixelRatio: number;

    OrbitEnableDamping: boolean;

    ShaderColor1: string;
    ShaderColor2: string;

    ParticleCount: number;
    ParticleSize: number;
    ParticleOpacity: number;
    ParticleInnerColor: string;
    ParticleOuterColor: string;

    UnrealBloomPassStrength: number;
    UnrealBloomPassRadius: number;
    UnrealBloomPassThreshold: number;

    ParticleRotationSpeed: number;
    ShaderWaveSpeed: number;
    ShaderWaveFrequency: number;
    ShaderGlowIntensity: number;
    MouseInfluence: number;
}

interface ParticleData {
    radius: number;
    angle: number;
    speed: number;
}

interface ShaderUniforms {
    [uniform: string]: { value: number | THREE.Color | THREE.Vector2 };
    time: { value: number };
    color1: { value: THREE.Color };
    color2: { value: THREE.Color };
    uMouse: { value: THREE.Vector2 };
}

interface ThreeRef {
    renderer: THREE.WebGLRenderer | null;
    scene: THREE.Scene | null;
    camera: THREE.PerspectiveCamera | null;
    composer: EffectComposer | null;
    uniforms: ShaderUniforms | null;
    particles: THREE.Points | null;
    particleData: ParticleData[];
    animationId: number | null;
}

/* ----------------------------------------------
   Component
---------------------------------------------- */

export default function LordStarItemsPreview(props: Props) {
    const mountRef = useRef<HTMLDivElement>(null);

    const [isSwitched, setIsSwitched] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [webglError, setWebglError] = useState<string | null>(null);

    const threeRef = useRef<ThreeRef>({
        renderer: null,
        scene: null,
        camera: null,
        composer: null,
        uniforms: null,
        particles: null,
        particleData: [],
        animationId: null,
    });

    // global play/pause flag (tab + visibility)
    const isRunningRef = useRef(true);

    /* ----------------------------------------------
       INIT — runs ONCE
    ---------------------------------------------- */
    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        // WebGL capability guard
        if (!canUseWebGL()) {
            setWebglError("WebGL is not supported or is disabled in this browser.");
            return;
        }

        const width = mount.clientWidth;
        const height = mount.clientHeight || 1;

        /* Scene / Camera */
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

        /* Renderer */
        const renderer = new THREE.WebGLRenderer({
            antialias: props.RendererAntialias,
        });

        // GPU capability & quality profile
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

        const baseParticleCount = props.ParticleCount;
        const baseBloomStrength = props.UnrealBloomPassStrength;

        const particleCount =
            quality === "high"
                ? baseParticleCount
                : quality === "medium"
                    ? Math.floor(baseParticleCount * 0.7)
                    : Math.floor(baseParticleCount * 0.4);

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

        renderer.setSize(width, height);
        renderer.setPixelRatio(pixelRatio);
        mount.appendChild(renderer.domElement);

        /* Controls */
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = props.OrbitEnableDamping;
        controls.enableZoom = false;
        controls.enablePan = false;

        /* Shader Uniforms */
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

          float wave = sin(${props.ShaderWaveFrequency.toFixed(
                1
            )} * vUv.y +
                           time * ${props.ShaderWaveSpeed.toFixed(
                1
            )} - dist * 12.0) * 0.5 + 0.5;

          float glow = exp(-${props.ShaderGlowIntensity.toFixed(1)} * dist);

          vec3 color = mix(color1, color2, wave) * (glow + 0.4);
          gl_FragColor = vec4(color, 1.0);
        }
      `,
            transparent: true,
            blending: THREE.AdditiveBlending,
        });

        const planeGeometry = new THREE.PlaneGeometry(12, 3, 100, 100);
        const mesh = new THREE.Mesh(planeGeometry, shaderMaterial);
        scene.add(mesh);

        /* PARTICLES WITH ORBIT */
        const particleGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);

        const particleData: ParticleData[] = [];

        for (let i = 0; i < particleCount; i++) {
            const radius = 3 + Math.random() * 8;
            const angle = Math.random() * Math.PI * 2;
            const speed = 0.001 + Math.random() * 0.002;

            particleData.push({ radius, angle, speed });

            positions[i * 3 + 0] = Math.cos(angle) * radius;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
            positions[i * 3 + 2] = Math.sin(angle) * radius;
        }

        particleGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        );

        const particles = new THREE.Points(
            particleGeometry,
            new THREE.PointsMaterial({
                size: props.ParticleSize,
                transparent: true,
                opacity: props.ParticleOpacity,
                color: props.ParticleInnerColor,
            })
        );
        scene.add(particles);

        /* Postprocessing */
        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(width, height),
            bloomStrength,
            props.UnrealBloomPassRadius,
            props.UnrealBloomPassThreshold
        );
        composer.addPass(bloomPass);

        /* Mouse tracking (throttled by rAF) */
        let mouseRafScheduled = false;
        let lastMouseX = 0;
        let lastMouseY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            lastMouseX = e.clientX;
            lastMouseY = e.clientY;

            if (!mouseRafScheduled) {
                mouseRafScheduled = true;
                requestAnimationFrame(() => {
                    uniforms.uMouse.value.x = lastMouseX / window.innerWidth;
                    uniforms.uMouse.value.y = 1 - lastMouseY / window.innerHeight;
                    mouseRafScheduled = false;
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        /* WebGL context lost handler */
        const handleContextLost = (event: Event) => {
            event.preventDefault();
            setWebglError(
                "WebGL context was lost. Your device or browser may not reliably support this effect."
            );
        };

        renderer.domElement.addEventListener(
            "webglcontextlost",
            handleContextLost,
            false
        );

        /* Animation Loop */
        const clock = new THREE.Clock();

        const animate = () => {
            const delta = clock.getDelta();
            const elapsed = clock.getElapsedTime();

            // If paused (Source tab or hidden), just keep scheduling frames
            if (isRunningRef.current) {
                uniforms.time.value = elapsed;

                const arr = particleGeometry.attributes.position
                    .array as Float32Array;

                for (let i = 0; i < particleCount; i++) {
                    const p = particleData[i];
                    p.angle += p.speed * delta * 60; // frame-rate compensated
                    arr[i * 3 + 0] = Math.cos(p.angle) * p.radius;
                    arr[i * 3 + 2] = Math.sin(p.angle) * p.radius;
                }

                particleGeometry.attributes.position.needsUpdate = true;

                controls.update();
                composer.render();
            }

            const id = requestAnimationFrame(animate);
            threeRef.current.animationId = id;
        };

        // start loop
        isRunningRef.current = true;
        animate();

        /* Save refs */
        threeRef.current = {
            renderer,
            scene,
            camera,
            composer,
            uniforms,
            particles,
            particleData,
            animationId: null,
        };

        /* Cleanup */
        return () => {
            if (threeRef.current.animationId !== null) {
                cancelAnimationFrame(threeRef.current.animationId);
            }
            window.removeEventListener("mousemove", handleMouseMove);
            renderer.domElement.removeEventListener(
                "webglcontextlost",
                handleContextLost
            );

            controls.dispose();
            renderer.dispose();
            planeGeometry.dispose();
            particleGeometry.dispose();
            shaderMaterial.dispose();

            scene.clear();

            if (mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
        };
    }, [props]);

    /* ----------------------------------------------
       Pause / resume on tab + visibility
    ---------------------------------------------- */
    useEffect(() => {
        const handleVisibility = () => {
            isRunningRef.current = !document.hidden && selectedIndex === 0;
        };

        handleVisibility();
        document.addEventListener("visibilitychange", handleVisibility);
        return () => {
            document.removeEventListener("visibilitychange", handleVisibility);
        };
    }, [selectedIndex]);

    if (webglError) {
        // Fallback when WebGL / GPU dies
        return (
            <div className="flex items-center justify-center h-[400px] border border-gray-600 rounded-xl text-gray-400 text-sm text-center px-6">
                {webglError}
            </div>
        );
    }

    /* ----------------------------------------------
       UI
    ---------------------------------------------- */
    return (
        <div className="overflow-hidden">
            <div className="relative">
                <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                    <div className="flex justify-between">
                        <TabList className="h-10 inline-flex p-1 gap-1">
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 1.2, delay: 0.2 }}
                            >
                                <Tab className="px-2 py-1 text-sm border border-dashed border-gray-400 bg-[#eeeeee] dark:bg-[#171616] rounded-md flex items-center gap-2 outline-none">
                                    <Eye className="h-4 w-4" /> Showcase
                                </Tab>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 1.2, delay: 0.3 }}
                            >
                                <Tab className="px-2 py-1 text-sm border border-dashed border-gray-400 bg-[#eeeeee] dark:bg-[#171616] rounded-md flex items-center gap-2 outline-none">
                                    <Code className="h-4 w-4" /> Source
                                </Tab>
                            </motion.div>
                        </TabList>

                        <div onClick={() => setIsSwitched((p) => !p)}>
                            <Switch />
                        </div>
                    </div>

                    <TabPanels className="mt-2">
                        <TabPanel
                            static
                            hidden={selectedIndex !== 0}
                            className="border border-gray-700 rounded-2xl"
                        >
                            <div
                                ref={mountRef}
                                className="relative w-full h-[550px] md:h-[550px] lg:h-[550px] xl:h-[650px] rounded-2xl"
                            >
                                <div
                                    hidden={isSwitched}
                                    className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
                                >
                                    <GradientHaloToggleContent />
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel static>
                            <MountWhenActive active={selectedIndex === 1}>
                                <LordStarItemsPreviewSourceCode />
                            </MountWhenActive>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    );
}
