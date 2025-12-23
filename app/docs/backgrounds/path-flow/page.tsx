import PathFlowItems from '@/components/Docs/Backgrounds/PathFlow/PathFlowItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

function PathFlow() {
    return (
        <div>
            <RenderOnRoute path="/docs/backgrounds/path-flow" withTransition>
                <PathFlowItems />
            </RenderOnRoute>
        </div>
    )
}

export default PathFlow