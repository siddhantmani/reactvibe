import RadiantFrameItems from '@/components/Docs/Sections/Radiant-Frame/RadiantFrameItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Modern React Footer UI with Animated Frame Design",
    description:
        "Build a responsive React footer with modern UI, multi-column layout, and animated frame design. Ideal for landing pages and websites.",
}

function RadiantFrame() {
    return (
        <div>
            <RenderOnRoute path="/docs/sections/radiant-frame" withTransition>
                <RadiantFrameItems />
            </RenderOnRoute>
        </div>
    )
}

export default RadiantFrame