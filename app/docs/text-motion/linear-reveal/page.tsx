import RenderOnRoute from '@/components/RenderOnRoute'
import LinearRevealItems from '@/components/Docs/Text-Motion/Linear-Reveal/LinearRevealItems'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "React Text Animation (Character Reveal Effect)",
    description:
        "A React text animation component for character-by-character reveal using Framer Motion. Perfect for hero sections and landing pages.",
}


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