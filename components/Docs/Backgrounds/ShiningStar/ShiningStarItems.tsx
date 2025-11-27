import React from 'react'
import ShiningStarItemsPreview from './ShiningStarItemsPreview';
import TablePorpsForShiningStarItems from './TablePorpsForShiningStarItems';
import LinearReveal from '@/components/LinearReveal';
import { Bricolage_Grotesque } from 'next/font/google';

const ShiningStarFont = Bricolage_Grotesque({
    weight: "700",
    subsets: ["latin"],
})


function ShiningStarItems() {

    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl'>
            <LinearReveal
                as={'h1'}
                text='Shining Star'
                className={`${ShiningStarFont.className} text-5xl py-10`}
            />
            <div className=' border-black rounded-2xl'>
                <ShiningStarItemsPreview
                    // Scene
                    SceneBackgroundColor="#000000"

                    // Camera
                    CameraFOV={10}
                    CameraNear={3}
                    CameraFar={1000}
                    CameraPositionX={0}
                    CameraPositionY={1}
                    CameraPositionZ={6}

                    // Renderer
                    RendererAntialias={true}
                    RendererPowerPreference="high-performance"
                    RendererSetPixelRatio={2}
                    RendererOutputColorSpace="sRGB"

                    // Bloom
                    UnrealBloomPassStrength={20}
                    UnrealBloomPassRadius={0.9}
                    UnrealBloomPassThreshold={0.6}

                    // Beam Shader
                    BeamColorCore="#573939"
                    BeamColorGlow="#573939"
                    BeamWidth={0.1}
                    BeamSoftness={0.0}
                    BeamNoiseScale={3.0}
                    BeamNoiseAmp={0.3}
                    BeamHeight={4.5}
                    BeamIntensity={1.0}
                    BeamCount={5}

                    // Pool (Glow Circle)
                    PoolInnerColor="rgba(160,120,255,1)"
                    PoolOuterColor="rgba(160,120,255,0)"
                    PoolSize={5}
                    PoolYPosition={-2}
                    PoolOpacity={0.7}

                    // Particles
                    ParticleCount={10000}
                    ParticleSize={0.01}
                    ParticleOpacity={0.6}
                    ParticleInnerColor="rgba(255,255,255,0.9)"
                    ParticleOuterColor="rgba(255,255,255,0)"

                    // Animation
                    PoolScaleFrequency={1.5}
                    PoolOpacityFrequency={1.3}
                    ParticleRotationSpeed={0.02}
                    BeamIntensityFrequency={1.2}
                />
            </div>
            <div>
                <TablePorpsForShiningStarItems />
            </div>
        </div>
    )
}

export default ShiningStarItems