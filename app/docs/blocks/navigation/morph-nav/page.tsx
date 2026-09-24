import MorphNavItems from '@/components/Docs/Blocks/Navigation/MorphNav/MorphNavItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Responsive Navbar Component | Scroll Pill Navbar",
    description:
        "Responsive Navbar Component that morphs into a pill on scroll, with a Navbar Mobile Menu, social proof, and built-in dark mode.",
}


function MorphNav() {
    return (
        <RenderOnRoute path="/docs/blocks/navigation/morph-nav" withTransition>
            <MorphNavItems />
        </RenderOnRoute>
    )
}

export default MorphNav