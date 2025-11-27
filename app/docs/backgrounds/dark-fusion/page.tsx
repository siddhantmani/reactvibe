import DarkFusionItems from '@/components/Docs/Backgrounds/DarkFusion/DarkFusionItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

function DarkFusion() {
    return (
        <div>
            <RenderOnRoute path="/docs/backgrounds/dark-fusion" withTransition>
                <DarkFusionItems />
            </RenderOnRoute>
        </div>
    )
}

export default DarkFusion