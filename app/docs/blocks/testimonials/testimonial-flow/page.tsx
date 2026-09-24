
import TestimonialsItems from '@/components/Docs/Blocks/Testimonials/Testimonial-flow/TestimonialsItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Social Proof Cards & Customer Reviews | React Vibe",
    description:
        "Build React social proof cards with customer reviews scrolling in opposite directions. Ideal for landing pages, product testimonials, and dark mode.",
}


function TestimonialFlow() {
    return (
        <div>
            <RenderOnRoute path="/docs/blocks/testimonials/testimonial-flow" withTransition>
                <TestimonialsItems />
            </RenderOnRoute>
        </div>
    )
}

export default TestimonialFlow