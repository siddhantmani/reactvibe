import ShadowButtonItems from '@/components/Docs/Components/Shadow-Button/ShadowButtonItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Custom Button | React Vibe",
    description:
        "A polished React custom button with a bold shadow and modern styling.Use it for primary CTAs, landing pages, SaaS apps, and modern web interfaces.",
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