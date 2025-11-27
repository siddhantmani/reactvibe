import RenderOnRoute from '@/components/RenderOnRoute'
import ShiningStarItems from '@/components/Docs/Backgrounds/ShiningStar/ShiningStarItems'
import React from 'react'

function ShiningStar() {
    return (
        <div>
            <RenderOnRoute path="/docs/backgrounds/shining-star" withTransition>
                <ShiningStarItems />
            </RenderOnRoute>
        </div>
    )
}

export default ShiningStar