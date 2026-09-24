import RisingLinesItems from '@/components/Docs/Backgrounds/RisingLines/RisingLinesItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Background Animation | Rising Lines",
    description:
        "React background animation with rising lines, configurable direction, and subtle motion for hero sections, landing pages, and modern UI.",
}

function RisingLines() {
    return (
        <div>
            <RenderOnRoute path="/docs/backgrounds/rising-lines" withTransition>
                <RisingLinesItems />
            </RenderOnRoute>
        </div>
    )
}

export default RisingLines