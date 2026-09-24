import PipelineItems from '@/components/Docs/Motion/Pipeline/PipelineItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Pipeline Diagram | Workflow Pipeline & Data Animation",
    description:
        "Build animated process flows and data pipelines with moving particles, connected nodes, and rotating workflow states. Free and customizable.",
}

function Pipeline() {
    return (
        <div>
            <RenderOnRoute path="/docs/motion/pipeline" withTransition>
                <PipelineItems />
            </RenderOnRoute>
        </div>
    )
}

export default Pipeline