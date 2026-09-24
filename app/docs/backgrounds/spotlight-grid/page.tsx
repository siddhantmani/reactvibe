import SpotlightGridItems from '@/components/Docs/Backgrounds/SpotlightGrid/SpotlightGridItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Background Animation | React Vibe",
    description:
        "Create interactive React background animations with a customizable dot grid and cursor spotlight effect. Perfect for Landing pages, and modern SaaS websites.",
}

function SpotlightGrid() {
    return (
        <div>
            <RenderOnRoute path="/docs/backgrounds/spotlight-grid" withTransition>
                <SpotlightGridItems />
            </RenderOnRoute>
        </div>
    )
}

export default SpotlightGrid