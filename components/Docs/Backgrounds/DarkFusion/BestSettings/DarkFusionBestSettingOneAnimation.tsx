import React from 'react'
import DarkFusionBestSettingOneAnimationProps from './DarkFusionBestSettingOneAnimationProps'

function DarkFusionBestSettingOneAnimation() {
    return (
        <div>
            <DarkFusionBestSettingOneAnimationProps
                // Scene
                SceneBackgroundColor="#000000"

                // Camera
                CameraFOV={5}
                CameraNear={7.2}
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
                UnrealBloomPassRadius={6.5}
                UnrealBloomPassThreshold={0.0}

                // Animation
                ShaderWaveSpeed={1.0}
                ShaderWaveFrequency={10.0}
                ShaderGlowIntensity={400.0}
            />
        </div>
    )
}

export default DarkFusionBestSettingOneAnimation