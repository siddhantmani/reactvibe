import React from 'react'
import OverlayNav from './OverlayNav'
import OverlayMenu from './OverlayMenu'

function OverLayNav() {
    return (
        <div className='border dark:bg-[#0c0c0c]'>
            <div className='hidden md:inline-block w-full z-50'>
                <OverlayNav />
            </div>
            <div className='md:hidden z-50'>
                <OverlayMenu />
            </div>
        </div>
    )
}

export default OverLayNav