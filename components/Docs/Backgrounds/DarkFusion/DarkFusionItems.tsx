import React from 'react'
import DarkFusionItemsPreview from './DarkFusionItemsPreview';
import TablePorpsForDarkFusionItems from './TablePorpsForDarkFusionItems';
import BestSettingsForDarkFusion from './BestSettingsForDarkFusion';
import LinearReveal from '@/components/LinearReveal';
import { Bricolage_Grotesque } from 'next/font/google';

const LinearRevealFont = Bricolage_Grotesque({
    weight: "700",
    subsets: ["latin"],
})

function DarkFusionItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl'>
            <LinearReveal
                as={'h1'}
                text='Dark Fusion'
                className={`text-5xl md:text-5xl py-10 ${LinearRevealFont.className}`}
            />
            <div className='border-black rounded-2xl'>
                <DarkFusionItemsPreview
                    // Scene
                    SceneBackgroundColor="#000000"

                    // Camera
                    CameraFOV={5}
                    CameraNear={2.1}
                    CameraFar={1000}
                    CameraPositionX={0}
                    CameraPositionY={0}
                    CameraPositionZ={10}

                    // Renderer
                    RendererAntialias={true}
                    RendererSetPixelRatio={2}

                    // Orbit Controls
                    OrbitEnableDamping={true}

                    // Shader Colors
                    ShaderColor1="#0a0a0a"
                    ShaderColor2="#000000"

                    // Bloom
                    UnrealBloomPassStrength={10.2}
                    UnrealBloomPassRadius={2.5}
                    UnrealBloomPassThreshold={0.0}

                    // Animation
                    ShaderWaveSpeed={1.0}
                    ShaderWaveFrequency={10.0}
                    ShaderGlowIntensity={400.0}
                />
            </div>
            <div className=''>
                <BestSettingsForDarkFusion />
            </div>
            <div className='pb-10'>
                <TablePorpsForDarkFusionItems />
            </div>
        </div>
    )
}

export default DarkFusionItems