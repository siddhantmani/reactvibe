import React from 'react'
import LordStarItemsPreview from './LordStarItemsPreview';
import TablePorpsForLordStarItems from './TablePorpsForLordStarItems';
import LinearReveal from '@/components/LinearReveal';
import { Bricolage_Grotesque } from 'next/font/google';

const LinearRevealFont = Bricolage_Grotesque({
    weight: "700",
    subsets: ["latin"],
})

function LordStarItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl'>
            <LinearReveal
                as={'h1'}
                text='Lord Star'
                className={`${LinearRevealFont.className} text-5xl py-10`}
            />
            <div className=' border-black rounded-2xl'>
                <LordStarItemsPreview
                    // Scene
                    SceneBackgroundColor="#000000"

                    // Camera
                    CameraFOV={4}
                    CameraNear={0.1}
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
                    ShaderColor1="#0d0d0b"
                    ShaderColor2="#1a1919"

                    // Particles
                    ParticleCount={4000}
                    ParticleSize={0.02}
                    ParticleOpacity={0.8}
                    ParticleInnerColor="#ffffff"
                    ParticleOuterColor="#000000"

                    // Bloom
                    UnrealBloomPassStrength={1.5}
                    UnrealBloomPassRadius={0.5}
                    UnrealBloomPassThreshold={0.0}

                    // Animation
                    ParticleRotationSpeed={0.0001}
                    ShaderWaveSpeed={2.0}
                    ShaderWaveFrequency={10.0}
                    ShaderGlowIntensity={20.0}

                    // Interaction
                    MouseInfluence={5.0}
                />
            </div>
            <div>
                <TablePorpsForLordStarItems />
            </div>
        </div>
    )
}

export default LordStarItems