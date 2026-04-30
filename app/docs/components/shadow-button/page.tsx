import ShadowButtonItems from '@/components/Docs/Components/Shadow-Button/ShadowButtonItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Button with Shadow & Hover Animation",
    description:
        "A modern React button component with shadow depth and smooth hover animation. Perfect for clean, high-quality UI interactions.",
}


function ShadowButton() {
    return (
        <div>
            <RenderOnRoute path="/docs/components/shadow-button" withTransition>
                <ShadowButtonItems />
            </RenderOnRoute>
        </div>
    )
}

export default ShadowButton