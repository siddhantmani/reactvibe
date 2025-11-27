import RenderOnRoute from '@/components/RenderOnRoute'
import OrbitBorderItems from '@/components/Docs/Components/Orbit-Border/OrbitBorderItems'
import React from 'react'

function OrbitBorder() {
    return (
        <div>
            <RenderOnRoute path="/docs/components/orbit-border" withTransition>
                <OrbitBorderItems />
            </RenderOnRoute>
        </div>
    )
}

export default OrbitBorder