import TestimonialsItems from '@/components/Docs/Sections/Testimonial-flow/TestimonialsItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

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