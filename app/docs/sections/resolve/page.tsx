import ResolveItems from '@/components/Docs/Sections/Resolve/ResolveItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React FAQ Accordion Component with Animation",
    description:
        "Build a responsive React FAQ accordion component with smooth animation using Framer Motion. Perfect for SaaS landing pages and modern UI.",
}


function Resolve() {
    return (
        <div>
            <RenderOnRoute path="/docs/sections/resolve" withTransition>
                <ResolveItems />
            </RenderOnRoute>
        </div>
    )
}

export default Resolve