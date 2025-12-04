import FluxCTAItems from '@/components/Docs/Sections/Flux-CTA/FluxCTAItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

function FluxCTA() {
    return (
        <div>
            <RenderOnRoute path="/docs/sections/flux-cta" withTransition>
                <FluxCTAItems />
            </RenderOnRoute>
        </div>
    )
}

export default FluxCTA