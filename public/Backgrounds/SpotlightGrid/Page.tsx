import React from 'react'
import SpotlightGrid from './SpotlightGrid'

function Page() {
    return (
        <div className='dark:bg-[#0c0c0c] h-screen'>
            <SpotlightGrid
                spotlightSize={230}
                gap={20}
                dotSize={2}
                hoverDotSize={2}
                dotColor="#333333"
                hoverDotColor="#ffffff"
            />
        </div>
    )
}

export default Page