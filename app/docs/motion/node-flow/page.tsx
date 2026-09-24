import NodeFlowItems from '@/components/Docs/Motion/NodeFlow/NodeFlowItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Node Graph & AI Agent Flow | React Vibe",
    description:
        "Build interactive React node graphs and AI agent flows with connected nodes, network relationships, and smooth animated connections for modern apps.",
}


function NodeFlow() {
    return (
        <div>
            <RenderOnRoute path="/docs/motion/node-flow" withTransition>
                <NodeFlowItems />
            </RenderOnRoute>
        </div>
    )
}

export default NodeFlow