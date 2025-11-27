import RenderOnRoute from '@/components/RenderOnRoute'
import LordStarItems from '@/components/Docs/Backgrounds/LordStar/LordStarItems'
import React from 'react'

function LordStar() {
    return (
        <div>
            <RenderOnRoute path="/docs/backgrounds/lord-star" withTransition>
                <LordStarItems />
            </RenderOnRoute>
        </div>
    )
}

export default LordStar