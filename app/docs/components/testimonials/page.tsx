import RenderOnRoute from '@/components/RenderOnRoute'
import TestimonialsItems from '@/components/Docs/Components/TestimonialsItems'
import React from 'react'

function TestimonialsPage() {
    return (
        <div>
            <RenderOnRoute path="/docs/components/testimonials" withTransition>
                <TestimonialsItems />
            </RenderOnRoute>
        </div>
    )
}

export default TestimonialsPage