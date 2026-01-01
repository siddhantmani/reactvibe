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


interface GradientHaloProps {
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


export default function GradientHalo({
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
}: GradientHaloProps) {
    const mountRef = useRef<HTMLDivElement>(null);
    const [webglError, setWebglError] = useState<string | null>(null);


    useEffect(() => {
        // 1) Guard: WebGL support
        if (!canUseWebGL()) {
            queueMicrotask(() => {
                setWebglError("WebGL is not available in this browser or device.");
            });
            return;
        }

        const container = mountRef.current;
        if (!container) return;


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
            queueMicrotask(() => {
                setWebglError("Failed to initialize WebGL in this environment.");
            });
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
            // You may need to re-init scene here if it happens often
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
            <div
                ref={mountRef}
                className="w-screen h-screen"
            />
        </div>
    );
}