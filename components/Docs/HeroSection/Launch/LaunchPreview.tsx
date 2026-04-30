import React from 'react'
import OverlayNavbar from './OverlayNavbar'
import OverlayMenubar from './OverlayMenubar'
import HeroSection from './HeroSection'

function LaunchPreview() {
    return (
        <div className="bg-gradient-to-t from-[#141313] to-[#141313] relative">
            <div className="relative bg-[#080707]">
                <div className='hidden md:inline-block w-full bg-transparent z-50'>
                    <OverlayNavbar />
                </div>
                <div className='md:hidden left-0 w-full z-50'>
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