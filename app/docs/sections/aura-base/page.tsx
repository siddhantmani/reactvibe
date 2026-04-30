import AuraBaseItems from '@/components/Docs/Sections/AuraBase/AuraBaseItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Footer Component with App Links & Navigation",
    description:
        "Build a responsive React footer with navigation, legal links, and app download sections. Ideal for modern SaaS and product websites.",
}

function AuraBase() {
    return (
        <RenderOnRoute path="/docs/sections/aura-base" withTransition>
            <AuraBaseItems />
        </RenderOnRoute>
    )
}

export default AuraBase