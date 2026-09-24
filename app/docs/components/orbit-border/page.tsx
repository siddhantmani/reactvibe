import RenderOnRoute from '@/components/RenderOnRoute'
import OrbitBorderItems from '@/components/Docs/Components/Orbit-Border/OrbitBorderItems'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "React Animated Border Button | React Vibe",
    description:
        "A React animated border button with a customizable multi-color gradient that continuously rotates around the edge. Perfect for CTAs and standout UI.",
}


function OrbitBorder() {
    return (
        <div>
            <RenderOnRoute path="/docs/components/orbit-border" withTransition>
                <OrbitBorderItems />
            </RenderOnRoute>
        </div>
    )
}

export default OrbitBorder