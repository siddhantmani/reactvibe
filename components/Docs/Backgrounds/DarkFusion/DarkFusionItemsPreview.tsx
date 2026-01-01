"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Code, Eye } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import DarkFusionItemsPreviewSourceCode from "./DarkFusionItemsPreviewSourceCode";
import MountWhenActive from "@/components/MountWhenActive";
import { motion } from "framer-motion";
import GradientHaloToggleContent from "../GradientHalo/HeroToggle/GradientHaloToggleContent";

function canUseWebGL(): boolean {
    try {
        const canvas = document.createElement("canvas");
        return !!(
            canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
        );
    } catch {
        return false;
    }
}

interface DarkWavePropsInterface {
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

function DarkFusionItemsPreview(props: DarkWavePropsInterface) {

    const mountRef = useRef<HTMLDivElement>(null);
    const propsRef = useRef<DarkWavePropsInterface>(props);

    const [isSwitched, setIsSwitched] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [webglError, setWebglError] = useState<string | null>(null);

    // freeze/unfreeze animation
    const isActiveRef = useRef(true);

    // keep latest props in a ref so the WebGL effect doesn't re-init on rerender
    useEffect(() => {
        propsRef.current = props;
    }, [props]);

    // sync tab state to ref for animation control
    useEffect(() => {
        isActiveRef.current = selectedIndex === 0;
    }, [selectedIndex]);

    const handleSwitch = () => {
        setIsSwitched((prev) => !prev);
    };

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        // clear old error 
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

        // size guard
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

        // GPU profiling + quality tier
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

        //  Scene + Camera 
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

        //  Shader Material 
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

        //  Postprocessing (Bloom) 
        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));

        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(width, height),
            bloomStrength,
            p.UnrealBloomPassRadius,
            p.UnrealBloomPassThreshold
        );
        composer.addPass(bloomPass);

        //  WebGL context lost handling
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

        // Animation 
        const clock = new THREE.Clock();
        let animationFrameId: number;

        const animate = () => {
            const elapsed = clock.getElapsedTime();

            // When the Showcase tab is NOT active, freeze animation time
            if (isActiveRef.current) {
                uniforms.time.value = elapsed;
            }

            controls.update();
            composer.render();

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        //  Resize
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

        // Cleanup 
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
    }, []); // run once, no re-init on rerender

    return (
        <div className="relative">
            <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <div className="z-0 inset-0 flex justify-between">
                    <TabList className="h-10 inline-flex p-1 w-full max-w-[130px] gap-1">
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                                margin: "50px",
                            }}
                            transition={{
                                duration: 1.2,
                                ease: [0.25, 0.46, 0.45, 0.94],
                                delay: 0.2,
                            }}
                        >
                            <Tab className="h-full gap-2 flex items-center px-2 py-1 cursor-pointer w-full text-sm border border-dashed border-gray-400 bg-[#eeeeee] dark:bg-[#171616] rounded-md outline-none">
                                <Eye className="h-4 w-4" />
                                Showcase
                            </Tab>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                                margin: "50px",
                            }}
                            transition={{
                                duration: 1.2,
                                ease: [0.25, 0.46, 0.45, 0.94],
                                delay: 0.2,
                            }}
                        >
                            <Tab className="h-full gap-2 flex items-center px-2 py-1 cursor-pointer w-full text-sm border border-dashed border-gray-400 bg-[#eeeeee] dark:bg-[#171616] rounded-md outline-none">
                                <Code className="h-4 w-4" />
                                Source
                            </Tab>
                        </motion.div>
                    </TabList>
                    <div onClick={handleSwitch}>
                        <Switch />
                    </div>
                </div>

                <TabPanels className="mt-2">
                    <TabPanel
                        static
                        hidden={selectedIndex !== 0}
                        className="border border-gray-700 rounded-2xl"
                    >
                        {webglError ? (
                            <div className="flex items-center justify-center w-full xl:h-[650px] lg:h-[550px] md:h-[550px] h-[550px] rounded-2xl text-xs text-gray-500 border border-dashed border-gray-600 px-4 text-center">
                                {webglError}
                            </div>
                        ) : (
                            <div
                                ref={mountRef}
                                className="relative w-full xl:h-[650px] lg:h-[550px] md:h-[550px] h-[550px] rounded-2xl"
                            >
                                <div
                                    hidden={isSwitched}
                                    className="absolute text-white z-40 w-full xl:px-[150px] rounded-2xl"
                                >
                                    <GradientHaloToggleContent />
                                </div>
                            </div>
                        )}
                    </TabPanel>

                    <TabPanel static>
                        <MountWhenActive active={selectedIndex === 1}>
                            <DarkFusionItemsPreviewSourceCode />
                        </MountWhenActive>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    );
}

export default DarkFusionItemsPreview;
