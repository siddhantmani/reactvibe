import RadiantFrameItems from '@/components/Docs/Sections/Radiant-Frame/RadiantFrameItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

function RadiantFrame() {
    return (
        <div>
            <RenderOnRoute path="/docs/sections/radiant-frame" withTransition>
                <RadiantFrameItems />
            </RenderOnRoute>
        </div>
    )
}

export default RadiantFrame