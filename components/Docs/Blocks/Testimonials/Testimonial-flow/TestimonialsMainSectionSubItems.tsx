import React from 'react'
import TestimonialsMainSectionSubItemsOne from './TestimonialsMainSectionSubItemsOne'
import TestimonialsMainSectionSubItemsTwo from './TestimonialsMainSectionSubItemsTwo'

function TestimonialsMainSectionSubItems() {
    return (
        <div className="relative flex items-center gap-4">
            {/* Gradient overlays */}
            <div className="pointer-events-none absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent dark:from-black z-10" />


            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent dark:from-black z-10" />


            {/* Scrolling content */}
            <TestimonialsMainSectionSubItemsOne />
            <TestimonialsMainSectionSubItemsTwo />
        </div>
    )
}

export default TestimonialsMainSectionSubItems