import StratusItems from '@/components/Docs/Sections/Stratus/StratusItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

function Stratus() {
    return (
        <div>
            <RenderOnRoute path="/docs/sections/stratus" withTransition>
                <StratusItems />
            </RenderOnRoute>
        </div>
    )
}

export default Stratus