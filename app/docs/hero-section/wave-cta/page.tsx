import WaveCTAItems from '@/components/Docs/HeroSection/WaveCTA/WaveCTAItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

function WaveCTA() {
    return (
        <div>
            <RenderOnRoute path="/docs/hero-section/wave-cta" withTransition>
                <WaveCTAItems />
            </RenderOnRoute>
        </div>
    )
}

export default WaveCTA