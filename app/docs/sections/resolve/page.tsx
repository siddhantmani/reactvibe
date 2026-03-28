import ResolveItems from '@/components/Docs/Sections/Resolve/ResolveItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

function Resolve() {
    return (
        <div>
            <RenderOnRoute path="/docs/sections/resolve" withTransition>
                <ResolveItems />
            </RenderOnRoute>
        </div>
    )
}

export default Resolve