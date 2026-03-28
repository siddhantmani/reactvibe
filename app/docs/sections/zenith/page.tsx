import ZenithItems from '@/components/Docs/Sections/Zenith/ZenithItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

function Zenith() {
    return (
        <div>
            <RenderOnRoute path="/docs/sections/zenith" withTransition>
                <ZenithItems />
            </RenderOnRoute>
        </div>
    )
}

export default Zenith