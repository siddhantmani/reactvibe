import RenderOnRoute from '@/components/RenderOnRoute'
import OrbitBorderItems from '@/components/Docs/Components/Orbit-Border/OrbitBorderItems'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "React Animated Button with Border & Glow Effects",
    description:
        "A React animated button component with hover effects, glowing borders, and gradient animations for modern UI design.",
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