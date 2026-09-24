
import SignatureItems from '@/components/Docs/Blocks/Footer/Signature/SignatureItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Footer with Social Links | React Vibe",
    description:
        "Build a React Footer Component with social links, multi-column navigation, and built-in dark mode for landing pages and SaaS websites.",
}

function Signature() {
    return (
        <div>
            <RenderOnRoute path="/docs/blocks/footer/signature" withTransition>
                <SignatureItems />
            </RenderOnRoute>
        </div>
    )
}

export default Signature