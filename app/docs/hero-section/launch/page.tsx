import LaunchItems from '@/components/Docs/HeroSection/Launch/LaunchItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

function Launch() {
    return (
        <div>
            <RenderOnRoute path="/docs/hero-section/launch" withTransition>
                <LaunchItems />
            </RenderOnRoute>
        </div>
    )
}

export default Launch