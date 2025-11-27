// Copy and paste this code inside your page.tsx 

import React from 'react'
import GradientHalo from './GradientHalo'

function Page() {
    return (

        <div>
            <GradientHalo
                // Scene
                SceneFogColor="#000000"
                SceneFogNearDistance={0.1}
                SceneFogFarDistance={1.1}
                SceneBackgroundColor="#ffffff"

                // Camera
                CameraFOV={25}
                CameraNear={0.2}
                CameraFar={1000}
                CameraPositionZ={1.5}

                // Renderer
                RendererAntialias={true}
                RendererPowerPreference="high-performance"
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

    )
}

export default Page
