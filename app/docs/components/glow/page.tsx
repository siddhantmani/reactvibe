import GlowItems from '@/components/Docs/Components/Glow/GlowItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Spotlight Effect & Interactive Background | React Vibe",
    description:
        "A React spotlight effect with a smooth cursor-following glow. Use it to create interactive backgrounds for hero sections, and modern web interfaces.",
}

function Page() {
    return (
        <div>
            <RenderOnRoute path="/docs/components/glow" withTransition>
                <GlowItems />
            </RenderOnRoute>
        </div>
    )
}

export default Page