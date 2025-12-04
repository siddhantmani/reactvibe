import OverlayMenuItems from '@/components/Docs/HeroSection/Overlay-Menu/OverlayMenuItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

function OverlayMenu() {
    return (
        <div className='relative'>
            <RenderOnRoute path="/docs/hero-section/overlay-menu" withTransition>
                <OverlayMenuItems />
            </RenderOnRoute>
        </div>
    )
}

export default OverlayMenu