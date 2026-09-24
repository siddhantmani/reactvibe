import LaunchItems from '@/components/Docs/Hero/Launch/LaunchItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Hero Section Component | Navbar and Hero",
    description:
        "Copy-paste React Hero Section Component with a complete Navbar and Hero, responsive navigation, and built-in dark mode for SaaS landing pages.",
}

function Launch() {
    return (
        <div>
            <RenderOnRoute path="/docs/blocks/hero/launch" withTransition>
                <LaunchItems />
            </RenderOnRoute>
        </div>
    )
}

export default Launch