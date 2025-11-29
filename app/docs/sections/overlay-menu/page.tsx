import RenderOnRoute from '@/components/RenderOnRoute'
import OverlayMenuItems from '@/components/Docs/Sections/Overlay-Menu/OverlayMenuItems'
import React from 'react'

function OverlayMenu() {
    return (
        <div className='relative'>
            <RenderOnRoute path="/docs/sections/overlay-menu" withTransition>
                <OverlayMenuItems />
            </RenderOnRoute>
        </div>
    )
}

export default OverlayMenu