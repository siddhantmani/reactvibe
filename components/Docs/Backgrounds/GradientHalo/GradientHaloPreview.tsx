"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
    EffectComposer,
    LuminosityShader,
    RenderPass,
    RGBShiftShader,
    ShaderPass,
    UnrealBloomPass,
} from "three/examples/jsm/Addons.js";

import {
    TabGroup,
    TabPanel,
    TabPanels,
    TabList,
    Tab,
} from "@headlessui/react";
import { Switch } from "@/components/ui/switch";
import GradientHaloPreviewSourceCode from "./GradientHaloPreviewSourceCode";
import { Code, Eye } from "lucide-react";
import MountWhenActive from "@/components/MountWhenActive";

import { motion } from "framer-motion"
import GradientHaloToggleContent from "./HeroToggle/GradientHaloToggleContent";

interface GradientHaloPreviewProps {
    // Scene
    SceneFogColor: string;
    SceneFogNearDistance: number;
    SceneFogFarDistance: number;
    SceneBackgroundColor: string;

    // Camera
    CameraFOV: number;
    CameraNear: number;
    CameraFar: number;
    CameraPositionZ: number;

    // Renderer
    RendererAntialias: boolean;
    RendererPowerPreference: string;
    RendererSetPixelRatio: number;

    // Mesh
    MeshColor: string;
    MeshMetalness: number;
    MeshRoughness: number
    MeshCubeWidth: number;
    MeshCubeHeight: number;
    MeshCubeDepth: number;

    // Lights
    DirectionalLightColor: string;
    DirectionalLightValue: number;
    DirectionalLightPositionX: number;
    DirectionalLightPositionY: number;
    DirectionalLightPositionZ: number;
    SceneAmbientLightColor: string;
    SceneAmbientLightValue: number;

    // Bloom
    UnrealBloomPassStrength: number;
    UnrealBloomPassRadius: number;
    UnrealBloomPassThreshold: number

    // RGB Shift
    RGBShiftAmount: number

    // Animation
    CubeRotationX: number
    CubeRotationY: number
}

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


function GradientHaloPreview({
    // Scene
    SceneFogColor,
    SceneFogNearDistance,
    SceneFogFarDistance,
    SceneBackgroundColor,

    // Camera
    CameraFOV,
    CameraNear,
    CameraFar,
    CameraPositionZ,

    // Renderer
    RendererAntialias,
    RendererPowerPreference,
    RendererSetPixelRatio,

    // Mesh
    MeshColor,
    MeshMetalness,
    MeshRoughness,
    MeshCubeWidth,
    MeshCubeHeight,
    MeshCubeDepth,

    // Lights
    DirectionalLightColor,
    DirectionalLightValue,
    DirectionalLightPositionX,
    DirectionalLightPositionY,
    DirectionalLightPositionZ,
    SceneAmbientLightColor,
    SceneAmbientLightValue,

    // Bloom
    UnrealBloomPassStrength,
    UnrealBloomPassRadius,
    UnrealBloomPassThreshold,

    // RGB Shift
    RGBShiftAmount,

    // Animation
    CubeRotationX,
    CubeRotationY,
}: GradientHaloPreviewProps) {
    const isRunningRef = useRef(true);
    const mountRef = useRef<HTMLDivElement>(null);
    const [webglError, setWebglError] = useState<string | null>(null);
    const [isSwitched, setIsSwitched] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleSwitch = () => {
        setIsSwitched((prev) => !prev);
    };

    useEffect(() => {
        if (selectedIndex === 0) isRunningRef.current = true;
        else isRunningRef.current = false;

        const container = mountRef.current;
        if (!container) return;

        // 1) Guard: WebGL support
        if (!canUseWebGL()) {
            setWebglError("WebGL is not available in this browser or device.");
            return;
        }

        // 2) Guard: container must have size
        const width = container.clientWidth;
        const height = container.clientHeight;

        // Scene
        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(SceneFogColor, SceneFogNearDistance, SceneFogFarDistance);
        scene.background = new THREE.Color(SceneBackgroundColor);

        // Camera
        const camera = new THREE.PerspectiveCamera(
            CameraFOV,
            width / height,
            CameraNear,
            CameraFar
        );
        camera.position.z = CameraPositionZ;

        // 3) Try creating renderer safely
        let renderer: THREE.WebGLRenderer;
        try {
            renderer = new THREE.WebGLRenderer({
                antialias: RendererAntialias,
                powerPreference: RendererPowerPreference as WebGLPowerPreference,
            });
        } catch (err) {
            console.error("Failed to create WebGLRenderer:", err);
            setWebglError("Failed to initialize WebGL in this environment.");
            return;
        }

        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio, RendererSetPixelRatio)
        );
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

        // Detect low-end GPU and disable heavy post-processing
        const gl = renderer.getContext();
        const info = gl.getExtension("WEBGL_debug_renderer_info");

        let isLowEndGPU = false;

        if (info) {
            const gpu = gl.getParameter(info.UNMASKED_RENDERER_WEBGL) || "";

            // Check for mobile / integrated / weak GPUs
            if (
                gpu.includes("Apple") ||     // iPhones / iPads
                gpu.includes("Adreno") ||    // Qualcomm Android
                gpu.includes("Mali") ||      // Samsung / ARM
                gpu.includes("PowerVR") ||   // Older iPhones / iPads
                gpu.includes("Intel")        // Many weak integrated GPUs
            ) {
                isLowEndGPU = true;
            }
        }

        // If low-end GPU → disable bloom & rgbShift
        if (isLowEndGPU) {
            console.warn("Low-end GPU detected → disabling post-processing");
        }

        // Handle WebGL context lost / restore
        const handleContextLost = (event: Event) => {
            event.preventDefault();
            console.warn("WebGL context lost");
        };

        const handleContextRestored = () => {
            console.log("WebGL context restored");
        };

        renderer.domElement.addEventListener(
            "webglcontextlost",
            handleContextLost
        );
        renderer.domElement.addEventListener(
            "webglcontextrestored",
            handleContextRestored
        );

        // Composer
        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        composer.addPass(new ShaderPass(LuminosityShader));

        // Mesh
        const material = new THREE.MeshStandardMaterial({
            color: MeshColor,
            metalness: MeshMetalness,
            roughness: MeshRoughness,
        });
        const cube = new THREE.Mesh(new THREE.BoxGeometry(MeshCubeWidth, MeshCubeHeight, MeshCubeDepth), material);
        scene.add(cube);

        // Lights
        const directionalLight = new THREE.DirectionalLight(DirectionalLightColor, DirectionalLightValue);
        directionalLight.position.set(DirectionalLightPositionX, DirectionalLightPositionY, DirectionalLightPositionZ);
        scene.add(directionalLight);
        scene.add(new THREE.AmbientLight(SceneAmbientLightColor, SceneAmbientLightValue));

        // Bloom
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(container.clientWidth, container.clientHeight),
            UnrealBloomPassStrength,
            UnrealBloomPassRadius,
            UnrealBloomPassThreshold
        );
        composer.addPass(bloomPass);
        bloomPass.resolution = new THREE.Vector2(256, 256);

        // RGB Shift
        const rgbShiftPass = new ShaderPass(RGBShiftShader);
        rgbShiftPass.uniforms["amount"].value = RGBShiftAmount;
        composer.addPass(rgbShiftPass);

        // Animation
        let frameId: number;
        const animate = () => {
            frameId = requestAnimationFrame(animate);
            if (!isRunningRef.current) return;  // ← animation paused

            cube.rotation.x += CubeRotationX;
            cube.rotation.y += CubeRotationY;
            composer.render();
        };
        animate();

        // Resize
        const handleResize = () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
            composer.setSize(container.clientWidth, container.clientHeight);
        };
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("resize", handleResize);

            renderer.domElement.removeEventListener(
                "webglcontextlost",
                handleContextLost
            );
            renderer.domElement.removeEventListener(
                "webglcontextrestored",
                handleContextRestored
            );

            composer.dispose();
            renderer.dispose();
            scene.clear();

            // Remove previous canvas
            if (renderer.domElement && container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, [
        selectedIndex,
        // Scene
        SceneFogColor,
        SceneFogNearDistance,
        SceneFogFarDistance,
        SceneBackgroundColor,

        // Camera
        CameraFOV,
        CameraNear,
        CameraFar,
        CameraPositionZ,

        // Renderer
        RendererAntialias,
        RendererPowerPreference,
        RendererSetPixelRatio,

        // Mesh
        MeshColor,
        MeshMetalness,
        MeshRoughness,
        MeshCubeWidth,
        MeshCubeHeight,
        MeshCubeDepth,

        // Lights
        DirectionalLightColor,
        DirectionalLightValue,
        DirectionalLightPositionX,
        DirectionalLightPositionY,
        DirectionalLightPositionZ,
        SceneAmbientLightColor,
        SceneAmbientLightValue,

        // Bloom
        UnrealBloomPassStrength,
        UnrealBloomPassRadius,
        UnrealBloomPassThreshold,

        // RGB Shift
        RGBShiftAmount,

        // Animation
        CubeRotationX,
        CubeRotationY,
    ]);

    if (webglError) {
        return (
            <div className="flex items-center justify-center h-[300px] rounded-2xl border border-dashed border-gray-500 text-sm text-gray-500 text-center px-4">
                {webglError}
            </div>
        );
    }

    return (
        <div className="relative">
            <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <div className="z-0 inset-0 flex justify-between">
                    <TabList className="h-10 inline-flex p-1 w-full max-w-[130px] gap-1">
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(8px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            whileInView={{ opacity: 1 }}
                            viewport={{
                                once: true,
                                amount: 0.2, // Trigger when 20% visible
                                margin: "50px"
                            }}
                            transition={{
                                duration: 1.2,
                                ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                                delay: 0.2
                            }}

                        >
                            <Tab className="h-full gap-2 flex items-center px-2 py-0 cursor-pointer w-full text-sm border border-dashed border-gray-400 bg-[#eeeeee] dark:bg-[#171616] rounded-md outline-none">
                                <Eye className="h-4 w-4" />
                                Showcase
                            </Tab>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(8px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            whileInView={{ opacity: 1 }}
                            viewport={{
                                once: true,
                                amount: 0.2, // Trigger when 20% visible
                                margin: "50px"
                            }}
                            transition={{
                                duration: 1.2,
                                ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                                delay: 0.3
                            }}

                        >
                            <Tab className="h-full gap-2 flex items-center px-2 py-0 cursor-pointer w-full text-sm border border-dashed border-gray-400 bg-[#eeeeee] dark:bg-[#171616] rounded-md outline-none">
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
                        <div
                            ref={mountRef}
                            className="w-full xl:h-[650px] lg:h-[550px] md:h-[550px] h-[550px] rounded-2xl"
                        >
                            <div
                                hidden={isSwitched}
                                className="absolute text-white z-40 w-full xl:px-[150px] rounded-2xl"
                            >
                                <GradientHaloToggleContent />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel static >
                        <MountWhenActive active={selectedIndex === 1}>
                            <GradientHaloPreviewSourceCode />
                        </MountWhenActive>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    );
}

export default GradientHaloPreview;
