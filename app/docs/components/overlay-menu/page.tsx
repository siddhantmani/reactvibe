import RenderOnRoute from '@/components/RenderOnRoute'
import OverlayMenuItems from '@/components/Docs/Components/Overlay-Menu/OverlayMenuItems'
import React from 'react'

function OverlayMenu() {
    return (
        <div className='relative'>
            <RenderOnRoute path="/docs/components/overlay-menu" withTransition>
                <OverlayMenuItems />
            </RenderOnRoute>
        </div>
    )
}

export default OverlayMenu