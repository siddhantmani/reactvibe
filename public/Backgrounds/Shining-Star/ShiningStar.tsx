"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

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

interface ShiningStarProps {
    SceneBackgroundColor: string;

    CameraFOV: number;
    CameraNear: number;
    CameraFar: number;
    CameraPositionX: number;
    CameraPositionY: number;
    CameraPositionZ: number;

    RendererAntialias: boolean;
    RendererPowerPreference: string;
    RendererSetPixelRatio: number;
    RendererOutputColorSpace: "sRGB" | "linear";

    UnrealBloomPassStrength: number;
    UnrealBloomPassRadius: number;
    UnrealBloomPassThreshold: number;

    BeamColorCore: string;
    BeamColorGlow: string;
    BeamWidth: number;
    BeamSoftness: number;
    BeamNoiseScale: number;
    BeamNoiseAmp: number;
    BeamHeight: number;
    BeamIntensity: number;
    BeamCount: number;

    PoolInnerColor: string;
    PoolOuterColor: string;
    PoolSize: number;
    PoolYPosition: number;
    PoolOpacity: number;

    ParticleCount: number;
    ParticleSize: number;
    ParticleOpacity: number;
    ParticleInnerColor: string;
    ParticleOuterColor: string;

    PoolScaleFrequency: number;
    PoolOpacityFrequency: number;
    ParticleRotationSpeed: number;
    BeamIntensityFrequency: number;
}

export default function ShiningStar(props: ShiningStarProps) {
    const mountRef = useRef<HTMLDivElement | null>(null);
    const propsRef = useRef(props);

    const [webglError, setWebglError] = useState<string | null>(null);

    useEffect(() => {
        propsRef.current = props;
    }, [props]);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        // Clear previous errors
        {
            queueMicrotask(() => {
                setWebglError(null);
            })
        }

        // Check WebGL support 
        if (!canUseWebGL()) {
            queueMicrotask(() => {
                setWebglError("WebGL is not supported on this device.");
            });
            return;
        }

        // Container size check 
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

        // GPU fallback values
        let localBloomStrength = p.UnrealBloomPassStrength;
        let localBeamCount = p.BeamCount;
        let localParticleCount = p.ParticleCount;

        // Renderer 
        let renderer: THREE.WebGLRenderer;
        try {
            renderer = new THREE.WebGLRenderer({
                antialias: p.RendererAntialias,
                powerPreference: p.RendererPowerPreference as WebGLPowerPreference,
            });
        } catch {
            queueMicrotask(() => {
                setWebglError("Failed to create WebGL renderer.");
            });
            return;
        }

        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, p.RendererSetPixelRatio));
        renderer.outputColorSpace =
            p.RendererOutputColorSpace === "sRGB"
                ? THREE.SRGBColorSpace
                : THREE.LinearSRGBColorSpace;

        mount.appendChild(renderer.domElement);

        // GPU Detection 
        const gl = renderer.getContext();
        const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");

        if (debugInfo) {
            const gpu = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) as string;

            const isLowEnd =
                gpu.includes("Intel") ||
                gpu.includes("Adreno") ||
                gpu.includes("Mali") ||
                gpu.includes("PowerVR");

            if (isLowEnd) {
                localBloomStrength *= 0.5;
                localBeamCount = Math.max(2, Math.floor(localBeamCount * 0.7));
                localParticleCount = Math.max(600, Math.floor(localParticleCount * 0.45));
            }
        }

        // Scene & Camera 
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(p.SceneBackgroundColor);

        const camera = new THREE.PerspectiveCamera(
            p.CameraFOV,
            width / height,
            p.CameraNear,
            p.CameraFar
        );
        camera.position.set(p.CameraPositionX, p.CameraPositionY, p.CameraPositionZ);

        // Composer 
        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));

        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(width, height),
            localBloomStrength,
            p.UnrealBloomPassRadius,
            p.UnrealBloomPassThreshold
        );
        composer.addPass(bloomPass);

        // Tracking for cleanup
        const objects: THREE.Object3D[] = [];
        const geometries: THREE.BufferGeometry[] = [];
        const materials: THREE.Material[] = [];
        const textures: THREE.Texture[] = [];

        const makeCircleTexture = (size: number, inner: string, outer: string) => {
            const cvs = document.createElement("canvas");
            cvs.width = size;
            cvs.height = size;
            const ctx = cvs.getContext("2d")!;
            const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
            g.addColorStop(0, inner);
            g.addColorStop(1, outer);
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, size, size);

            const tex = new THREE.CanvasTexture(cvs);
            tex.colorSpace = THREE.SRGBColorSpace;
            tex.minFilter = THREE.LinearFilter;
            tex.magFilter = THREE.LinearFilter;
            textures.push(tex);
            return tex;
        };

        // Beam Shader 
        const beamUniforms = {
            uTime: { value: 0 },
            uColorCore: { value: new THREE.Color(p.BeamColorCore) },
            uColorGlow: { value: new THREE.Color(p.BeamColorGlow) },
            uWidth: { value: p.BeamWidth },
            uSoftness: { value: p.BeamSoftness },
            uNoiseScale: { value: p.BeamNoiseScale },
            uNoiseAmp: { value: p.BeamNoiseAmp },
            uHeight: { value: p.BeamHeight },
            uIntensity: { value: p.BeamIntensity },
        };

        const beamMatBase = new THREE.ShaderMaterial({
            uniforms: beamUniforms,
            vertexShader: `
                varying vec2 vUv;
                void main(){
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
                }
            `,
            fragmentShader: `
                precision highp float;
                varying vec2 vUv;
                uniform float uTime;
                uniform vec3 uColorCore;
                uniform vec3 uColorGlow;
                uniform float uWidth;
                uniform float uSoftness;
                uniform float uNoiseScale;
                uniform float uNoiseAmp;
                uniform float uHeight;
                uniform float uIntensity;

                vec3 mod289(vec3 x){ return x - floor(x*(1.0/289.0))*289.0; }
                vec2 mod289(vec2 x){ return x - floor(x*(1.0/289.0))*289.0; }
                vec3 permute(vec3 x){ return mod289(((x*34.0)+1.0)*x); }

                float snoise(vec2 v){
                    const vec4 C = vec4(
                        0.211324865405187,
                        0.366025403784439,
                        -0.577350269189626,
                        0.024390243902439
                    );

                    vec2 i = floor(v + dot(v,C.yy));
                    vec2 x0 = v - i + dot(i,C.xx);

                    vec2 i1 = x0.x > x0.y ? vec2(1.,0.) : vec2(0.,1.);
                    vec4 x12 = x0.xyxy + C.xxzz;
                    x12.xy -= i1;

                    vec3 p = permute(permute(i.y + vec3(0.,i1.y,1.)) + i.x + vec3(0.,i1.x,1.));
                    vec3 x = fract(p * C.w) * 2.0 - 1.0;
                    vec3 h = abs(x) - 0.5;
                    vec3 ox = floor(x + 0.5);
                    vec3 a0 = x - ox;

                    vec2 g0 = vec2(a0.x,h.x);
                    vec2 g1 = vec2(a0.y,h.y);
                    vec2 g2 = vec2(a0.z,h.z);

                    float t0 = 0.5 - dot(x0,x0);
                    float t1 = 0.5 - dot(x12.xy,x12.xy);
                    float t2 = 0.5 - dot(x12.zw,x12.zw);

                    float n0 = t0 < 0. ? 0. : pow(t0,4.)*dot(g0,x0);
                    float n1 = t1 < 0. ? 0. : pow(t1,4.)*dot(g1,x12.xy);
                    float n2 = t2 < 0. ? 0. : pow(t2,4.)*dot(g2,x12.zw);

                    return 70. * (n0 + n1 + n2);
                }

                void main(){
                    float x = (vUv.x - 0.5);
                    float y = vUv.y;

                    float wobble = snoise(vec2(y*uNoiseScale, uTime*0.3)) * uNoiseAmp;
                    float radius = abs(x) + wobble;

                    float core = smoothstep(uWidth, 0.0, radius);
                    float glow = smoothstep(1.3, 0.0, radius / (uWidth*uSoftness));

                    float hueShift = 0.5 + 0.5 * sin(uTime*0.5);
                    vec3 col = mix(uColorCore, uColorGlow, hueShift);

                    vec3 color = col * (core*1.3 + glow*0.8) * uIntensity;
                    float alpha = max(core, glow) * (0.8 - 0.4*y);

                    gl_FragColor = vec4(color, alpha);
                }
            `,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
        });

        materials.push(beamMatBase);

        const beams: THREE.Mesh[] = [];
        const beamGeo = new THREE.PlaneGeometry(5, p.BeamHeight);
        geometries.push(beamGeo);

        for (let i = 0; i < localBeamCount; i++) {
            const mat = beamMatBase.clone();
            materials.push(mat);

            const mesh = new THREE.Mesh(beamGeo, mat);
            mesh.rotation.y = (Math.PI / localBeamCount) * i;
            mesh.position.y = p.BeamHeight * 0.5 - 1.0;

            scene.add(mesh);
            objects.push(mesh);
            beams.push(mesh);
        }

        // Pool (Glow Circle) 
        const poolTex = makeCircleTexture(256, p.PoolInnerColor, p.PoolOuterColor);
        textures.push(poolTex);

        const poolMat = new THREE.MeshBasicMaterial({
            map: poolTex,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            opacity: p.PoolOpacity,
        });
        materials.push(poolMat);

        const poolGeo = new THREE.PlaneGeometry(p.PoolSize, p.PoolSize);
        geometries.push(poolGeo);

        const pool = new THREE.Mesh(poolGeo, poolMat);
        pool.rotation.x = -Math.PI / 2;
        pool.position.y = p.PoolYPosition;
        scene.add(pool);
        objects.push(pool);

        // Particles 
        const particlesGeo = new THREE.BufferGeometry();
        const pos = new Float32Array(localParticleCount * 3);

        for (let i = 0; i < localParticleCount; i++) {
            const r = Math.sqrt(Math.random()) * 1.5;
            const theta = Math.random() * Math.PI * 2;
            pos[i * 3] = Math.cos(theta) * r;
            pos[i * 3 + 1] = Math.random() * 5 - 1;
            pos[i * 3 + 2] = Math.sin(theta) * r;
        }

        particlesGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
        geometries.push(particlesGeo);

        const particleTex = makeCircleTexture(
            256,
            p.ParticleInnerColor,
            p.ParticleOuterColor
        );
        textures.push(particleTex);

        const particlesMat = new THREE.PointsMaterial({
            size: p.ParticleSize,
            map: particleTex,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            opacity: p.ParticleOpacity,
        });
        materials.push(particlesMat);

        const particles = new THREE.Points(particlesGeo, particlesMat);
        scene.add(particles);
        objects.push(particles);

        // Animation 
        const clock = new THREE.Clock();
        let rafId = 0;

        const animate = () => {
            const t = clock.getElapsedTime();

            beams.forEach((beam) => {
                const u = (beam.material as THREE.ShaderMaterial).uniforms;
                u.uTime.value = t;
                u.uIntensity.value =
                    p.BeamIntensity *
                    (0.9 + 0.1 * Math.sin(t * p.BeamIntensityFrequency));
            });

            pool.scale.setScalar(1 + 0.05 * Math.sin(t * p.PoolScaleFrequency));
            (pool.material as THREE.MeshBasicMaterial).opacity =
                p.PoolOpacity * (0.6 + 0.2 * Math.sin(t * p.PoolOpacityFrequency));

            particles.rotation.y = t * p.ParticleRotationSpeed;

            composer.render();
            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);

        // Resize 
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
            bloomPass.setSize(w, h);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup 
        const mountEl = mount; // safe reference snapshot

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("resize", handleResize);

            objects.forEach((o) => scene.remove(o));
            geometries.forEach((g) => g.dispose());
            materials.forEach((m) => m.dispose());
            textures.forEach((t) => t.dispose());

            composer.dispose();
            renderer.dispose();

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
        <div className="relative">
            <div ref={mountRef} className="w-screen h-screen" />
        </div>
    );
}
