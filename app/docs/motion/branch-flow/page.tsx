import BranchFlowItems from '@/components/Docs/Motion/BranchFlow/BranchFlowItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Workflow Flow Animation | React Vibe",
    description:
        "React Workflow Flow Animation with branching paths and particles for Process Flow Animation, Pipeline Flow Animation, and data visualization.",
}

function BranchFlow() {
    return (
        <div>
            <RenderOnRoute path="/docs/motion/branch-flow" withTransition>
                <BranchFlowItems />
            </RenderOnRoute>
        </div>
    )
}

export default BranchFlow