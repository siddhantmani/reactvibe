import TestimonialsItems from '@/components/Docs/Sections/Testimonials/TestimonialsItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

function TestimonialsPage() {
    return (
        <div>
            <RenderOnRoute path="/docs/sections/testimonials" withTransition>
                <TestimonialsItems />
            </RenderOnRoute>
        </div>
    )
}

export default TestimonialsPage