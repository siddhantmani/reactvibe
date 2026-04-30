import RenderOnRoute from '@/components/RenderOnRoute'
import SeparatorItems from '@/components/Docs/Components/Separator/SeparatorItems'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "React Divider & Separator Component (Horizontal/Vertical)",
    description:
        "A reusable React divider component for horizontal and vertical layouts. Perfect for clean UI separation with Tailwind support.",
}


function Separator() {
    return (
        <div>
            <RenderOnRoute path="/docs/components/separator" withTransition>
                <SeparatorItems />
            </RenderOnRoute>
        </div>
    )
}

export default Separator