import StreamItems from '@/components/Docs/Backgrounds/Stream/StreamItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
    title: "React Path Animation | React Vibe",
    description:
        "Add a React background animation with flowing paths and smooth motion. Build animated hero backgrounds and interactive visual effects with a customizable React component.",
}

function Stream() {
    return (
        <div>
            <RenderOnRoute path="/docs/backgrounds/stream" withTransition>
                <StreamItems />
            </RenderOnRoute>
        </div>
    )
}

export default Stream