import ConvergeItems from '@/components/Docs/Motion/Converge/ConvergeItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "AI Orchestration Animation | React Vibe",
    description:
        "AI Orchestration Animation with AI Workflow Animation, Workflow Flow Animation, and Pipeline Flow Animation for modern AI interfaces.",
}

function Converge() {
    return (
        <div>
            <RenderOnRoute path="/docs/motion/converge" withTransition>
                <ConvergeItems />
            </RenderOnRoute>
        </div>
    )
}

export default Converge