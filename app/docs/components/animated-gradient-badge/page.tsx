import AnimatedGradientBadgeItems from '@/components/Docs/Components/AnimatedGradientBadge/AnimatedGradientBadgeItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Badge Component & Animated Gradient Badge | React Vibe",
    description:
        "A modern React badge component with an animated gradient border and shifting colors. Perfect for CTAs, labels, status indicators, and modern web interfaces.",
}

function AnimatedGradientBadge() {
    return (
        <div>
            <RenderOnRoute path="/docs/components/animated-gradient-badge" withTransition>
                <AnimatedGradientBadgeItems />
            </RenderOnRoute>
        </div>
    )
}

export default AnimatedGradientBadge