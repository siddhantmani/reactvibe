
import StratusItems from '@/components/Docs/Blocks/FAQ/Stratus/StratusItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React FAQ Section & Accordion | React Vibe",
    description:
        "A responsive React FAQ section with expandable accordion questions, clean spacing, and built-in dark mode for SaaS and landing pages.",
}

function Stratus() {
    return (
        <div>
            <RenderOnRoute path="/docs/blocks/faq/stratus" withTransition>
                <StratusItems />
            </RenderOnRoute>
        </div>
    )
}

export default Stratus