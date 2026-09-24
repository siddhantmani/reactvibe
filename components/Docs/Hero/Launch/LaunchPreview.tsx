import React from 'react'
import OverlayNavbar from './OverlayNavbar'
import OverlayMenubar from './OverlayMenubar'
import HeroSection from './HeroSection'

function LaunchPreview() {
    return (
        <div className="bg-[#ffffff] bg-gradient-to-t dark:from-[#141313] dark:to-[#141313] relative w-full">
            <div className="relative bg-[#ffffff] dark:bg-[#080707]">
                <div className='hidden @md:inline-block w-full bg-transparent z-50'>
                    <OverlayNavbar />
                </div>
                <div className='@md:hidden left-0 w-full z-50'>
                    <OverlayMenubar />
                </div>
            </div>
            <div className="">
                <HeroSection />
            </div>
        </div>
    )
}

export default LaunchPreview