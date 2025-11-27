// Copy and paste this code into your page.tsx 

import React from 'react'
import LordStar from './LordStar'

function Page() {
    return (
        <div className=' border-black rounded-2xl'>
            <LordStar
                // Scene
                SceneBackgroundColor="#000000"

                // Camera
                CameraFOV={15}
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
    )
}

export default Page