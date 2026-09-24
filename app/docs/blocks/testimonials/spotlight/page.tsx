import SpotlightItems from '@/components/Docs/Blocks/Testimonials/Spotlight/SpotlightItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Customer Stories & React Testimonials | React Vibe",
    description:
        "Build a React customer review section with an interactive testimonial carousel for landing pages, product testimonials, and social proof.",
}

function Spotlight() {
    return (
        <div>
            <RenderOnRoute path="/docs/blocks/testimonials/spotlight" withTransition>
                <SpotlightItems />
            </RenderOnRoute>
        </div>
    )
}

export default Spotlight