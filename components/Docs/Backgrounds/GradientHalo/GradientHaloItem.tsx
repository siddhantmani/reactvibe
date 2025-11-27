"use client"

import GradientHaloPreview from './GradientHaloPreview';
import TablePorpsForGradientHaloPreview from './TablePorpsForGradientHaloPreview';
import { Bricolage_Grotesque } from 'next/font/google';
import LinearReveal from '@/components/LinearReveal';

const LinearRevealFont = Bricolage_Grotesque({
    weight: "700",
    subsets: ["latin"],
})

function GradientHaloItem() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl'>
            <LinearReveal
                as={'h1'}
                text='Gradient Halo'
                className={`${LinearRevealFont.className} text-5xl py-10`}
            />

            <div className='border-black rounded-2xl'>

                <GradientHaloPreview
                    // Scene
                    SceneFogColor="#000000"
                    SceneFogNearDistance={0.1}
                    SceneFogFarDistance={1.1}
                    SceneBackgroundColor="#ffffff"

                    // Camera
                    CameraFOV={31}
                    CameraNear={0.2}
                    CameraFar={1000}
                    CameraPositionZ={1.5}

                    // Renderer
                    RendererAntialias={true}
                    RendererPowerPreference="default"
                    // RendererPowerPreference="high-performance"
                    // RendererPowerPreference="low-power"

                    RendererSetPixelRatio={2}

                    // Mesh
                    MeshColor="0xffffff"
                    MeshMetalness={0.7}
                    MeshRoughness={0.2}
                    MeshCubeWidth={1}
                    MeshCubeHeight={1}
                    MeshCubeDepth={1}

                    // Lights
                    DirectionalLightColor="0xffffff"
                    DirectionalLightValue={1}
                    DirectionalLightPositionX={2}
                    DirectionalLightPositionY={2}
                    DirectionalLightPositionZ={2}
                    SceneAmbientLightColor="0xffffff"
                    SceneAmbientLightValue={0.5}

                    // Bloom
                    UnrealBloomPassStrength={1}
                    UnrealBloomPassRadius={0.1}
                    UnrealBloomPassThreshold={0.1}

                    // RGB Shift
                    RGBShiftAmount={0.0025}

                    // Animation
                    CubeRotationX={0.001}
                    CubeRotationY={0.001}
                />


            </div>
            <div>
                <TablePorpsForGradientHaloPreview />
            </div>
        </div>
    )
}

export default GradientHaloItem