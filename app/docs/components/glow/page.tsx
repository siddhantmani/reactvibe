import GlowItems from '@/components/Docs/Components/Glow/GlowItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Cursor Follow Glow Effect with Gradient Background",
    description:
        "Create a React cursor follow effect with glowing spotlight and gradient background animation. Build interactive UI with smooth mouse tracking.",
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