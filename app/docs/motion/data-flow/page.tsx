import DataFlowItems from '@/components/Docs/Motion/DataFlow/DataFlowItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
    title: "React Data Flow Component & UI | React Vibe",
    description:
        "Build stunning React data flow visualizations with animated particles, integration flows, and reusable data flow UI for SaaS, AI, APIs, and modern web apps.",
}

function DataFlow() {
    return (
        <div>
            <RenderOnRoute path="/docs/motion/data-flow" withTransition>
                <DataFlowItems />
            </RenderOnRoute>
        </div>
    )
}

export default DataFlow