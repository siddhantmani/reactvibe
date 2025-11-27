// copy and paste this code into your page.tsx

import React from "react";
import DarkFusion from "./DarkFusion";

function Page() {
    return (
        <DarkFusion
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
    );
}

export default Page;


