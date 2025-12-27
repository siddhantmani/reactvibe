import AuraBaseItems from '@/components/Docs/Sections/AuraBase/AuraBaseItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

function AuraBase() {
    return (
        <RenderOnRoute path="/docs/sections/aura-base" withTransition>
            <AuraBaseItems />
        </RenderOnRoute>
    )
}

export default AuraBase