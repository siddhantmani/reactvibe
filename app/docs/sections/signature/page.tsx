import SignatureItems from '@/components/Docs/Sections/Signature/SignatureItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Footer Component Free | Responsive UI",
    description:
        "Free React footer component with responsive multi-column layout, navigation links, social icons, and legal sections for modern SaaS websites.",
}

function Signature() {
    return (
        <div>
            <RenderOnRoute path="/docs/sections/signature" withTransition>
                <SignatureItems />
            </RenderOnRoute>
        </div>
    )
}

export default Signature