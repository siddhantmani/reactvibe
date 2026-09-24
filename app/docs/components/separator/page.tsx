import RenderOnRoute from '@/components/RenderOnRoute'
import SeparatorItems from '@/components/Docs/Components/Separator/SeparatorItems'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "React Separator Component | React Vibe",
    description:
        "A simple React separator component for dividing content, sections, lists, and UI groups. Supports horizontal and vertical orientations with a clean, customizable design.",
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