import React from 'react'
import OverlayNavCode from './OverlayNavCode'
import OverlayMenuCode from '@/components/Docs/HeroSection/Overlay-Menu/OverlayMenuCode'

function OverlayNavPreview() {
    return (
        <div className=''>
            <div className='hidden md:inline-block w-full z-50'>
                <OverlayNavCode />
            </div>
            <div className='md:hidden z-50'>
                <OverlayMenuCode />
            </div>
        </div>
    )
}

export default OverlayNavPreview