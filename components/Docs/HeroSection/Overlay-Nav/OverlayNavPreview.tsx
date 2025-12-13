import React from 'react'
import OverlayNavCode from './OverlayNavCode'
import OverlayMenuCode from '@/components/Docs/HeroSection/Overlay-Menu/OverlayMenuCode'

function OverlayNavPreview() {
    return (
        <div className=''>
            <div className='hidden md:inline-block w-full'>
                <OverlayNavCode />
            </div>
            <div className='md:hidden '>
                <OverlayMenuCode />
            </div>
        </div>
    )
}

export default OverlayNavPreview