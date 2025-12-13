import OverlayNavItems from '@/components/Docs/HeroSection/Overlay-Nav/OverlayNavItems'
import RenderOnRoute from '@/components/RenderOnRoute'

import React from 'react'

function OverlayNav() {
    return (
        <div className='relative'>
            <RenderOnRoute path="/docs/hero-section/overlay-nav" withTransition>
                <OverlayNavItems />
            </RenderOnRoute>
        </div>
    )
}

export default OverlayNav