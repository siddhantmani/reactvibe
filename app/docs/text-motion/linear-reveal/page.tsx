import RenderOnRoute from '@/components/RenderOnRoute'
import LinearRevealItems from '@/components/Docs/Text-Motion/Linear-Reveal/LinearRevealItems'
import React from 'react'

function LinearReveal() {
    return (
        <div>
            <RenderOnRoute path="/docs/text-motion/linear-reveal" withTransition>
                <LinearRevealItems />
            </RenderOnRoute>
        </div>
    )
}

export default LinearReveal