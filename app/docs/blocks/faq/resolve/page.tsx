
import ResolveItems from '@/components/Docs/Blocks/FAQ/Resolve/ResolveItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React FAQ Accordion Component | React Vibe",
    description:
        "Build a responsive React FAQ accordion for landing pages with expandable questions, clean UI, and built-in dark mode support.",
}

function Resolve() {
    return (
        <div>
            <RenderOnRoute path="/docs/blocks/faq/resolve" withTransition>
                <ResolveItems />
            </RenderOnRoute>
        </div>
    )
}

export default Resolve