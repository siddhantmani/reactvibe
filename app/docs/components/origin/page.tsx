import OriginItems from '@/components/Docs/Components/Origin/OriginItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Logo Grid & Brand Showcase Component",
    description:
        "A React logo grid component with animation for brand showcases, trusted-by sections, and integration or network UI layouts.",
}

function Origin() {
    return (
        <div>
            <RenderOnRoute path="/docs/components/origin" withTransition>
                <OriginItems />
            </RenderOnRoute>
        </div>
    )
}

export default Origin