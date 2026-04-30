import NexusItems from '@/components/Docs/Components/Nexus/NexusItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Network Diagram & Integration UI Component",
    description:
        "A React network diagram UI component for integrations, brand showcases, and connected logo sections with smooth animated layouts.",
}

function Nexus() {
    return (
        <div>
            <RenderOnRoute path="/docs/components/nexus" withTransition>
                <NexusItems />
            </RenderOnRoute>
        </div>
    )
}

export default Nexus