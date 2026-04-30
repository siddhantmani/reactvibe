import TestimonialsItems from '@/components/Docs/Sections/Testimonial-flow/TestimonialsItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Testimonial Card UI for SaaS Landing Pages",
    description:
        "Build a modern React testimonial section with card UI and smooth animation. Ideal for SaaS landing pages and customer feedback display.",
}

function TestimonialsPage() {
    return (
        <div>
            <RenderOnRoute path="/docs/sections/testimonial-flow" withTransition>
                <TestimonialsItems />
            </RenderOnRoute>
        </div>
    )
}

export default TestimonialsPage