import React from 'react'
import HeadlinesGradientHalo from './HeadlineGradientHalo'
import Hero3ImagesGradientHalo from './Hero3ImagesGradientHalo'
import NavBarGradientHalo from './NavBarGradientHalo'

function GradientHaloToggleContent() {
    return (
        <div className='overflow-hidden'>
            <div className=' z-10'>
                <NavBarGradientHalo />
                <HeadlinesGradientHalo />
            </div>
            <div className='xl:h-[245px] lg:h-[173px] md:h-[150px] h-[199px]'>
                <Hero3ImagesGradientHalo />
            </div>
        </div >
    )
}

export default GradientHaloToggleContent