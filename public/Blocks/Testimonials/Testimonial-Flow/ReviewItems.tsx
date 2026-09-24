import React from 'react'
import ReviewItemsOne from './ReviewItemsOne'
import ReviewItemsTwo from './ReviewItemsTwo'

function ReviewItems() {
    return (
        <div className="relative flex items-center gap-4">
            {/* Gradient overlays */}
            <div className="pointer-events-none absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent dark:from-black z-10" />


            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent dark:from-black z-10" />


            {/* Scrolling content */}
            <ReviewItemsOne />
            <ReviewItemsTwo />
        </div>
    )
}

export default ReviewItems