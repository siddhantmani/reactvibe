
import RadiantFrameItems from '@/components/Docs/Blocks/Footer/Radiant-Frame/RadiantFrameItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Animated React Footer Component | React Vibe",

    description:
        "Build an animated React footer with a color-shifting frame for landing pages and SaaS websites. Responsive and dark mode ready.",
}
function RadiantFrame() {
    return (
        <div>
            <RenderOnRoute path="/docs/blocks/footer/radiant-frame" withTransition>
                <RadiantFrameItems />
            </RenderOnRoute>
        </div>
    )
}

export default RadiantFrame