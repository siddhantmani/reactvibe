import PathFlowItems from '@/components/Docs/Backgrounds/PathFlow/PathFlowItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Logo Flow & Animated Logo Cloud | React Vibe",
    description:
        "Build a floating logos background with animated logo cloud, technology logo animation, and React logo flow for SaaS and tech websites.",
}

function PathFlow() {
    return (
        <div>
            <RenderOnRoute path="/docs/backgrounds/path-flow" withTransition>
                <PathFlowItems />
            </RenderOnRoute>
        </div>
    )
}

export default PathFlow