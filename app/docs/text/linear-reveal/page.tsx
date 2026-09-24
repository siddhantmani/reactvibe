import RenderOnRoute from '@/components/RenderOnRoute'
import LinearRevealItems from '@/components/Docs/Text-Motion/Linear-Reveal/LinearRevealItems'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "React Text Reveal | React Vibe",
    description:
        "A smooth React text reveal component that animates text character by character. Perfect for hero headings, landing pages, and modern web interfaces.",
}


function LinearReveal() {
    return (
        <div>
            <RenderOnRoute path="/docs/text/linear-reveal" withTransition>
                <LinearRevealItems />
            </RenderOnRoute>
        </div>
    )
}

export default LinearReveal