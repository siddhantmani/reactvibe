import PrimeItems from '@/components/Docs/Sections/Prime/PrimeItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

function Prime() {
    return (
        <div>
            <RenderOnRoute path="/docs/sections/prime" withTransition>
                <PrimeItems />
            </RenderOnRoute>
        </div>
    )
}

export default Prime