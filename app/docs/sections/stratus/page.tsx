import StratusItems from '@/components/Docs/Sections/Stratus/StratusItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React FAQ Accordion Component for Clean UI",
    description:
        "Build a clean React FAQ section with a responsive accordion UI. Ideal for docs, landing pages, and simple expandable FAQ layouts.",
}


function Stratus() {
    return (
        <div>
            <RenderOnRoute path="/docs/sections/stratus" withTransition>
                <StratusItems />
            </RenderOnRoute>
        </div>
    )
}

export default Stratus