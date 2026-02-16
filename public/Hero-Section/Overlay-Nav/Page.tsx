import React from 'react'
import OverlayNav from './OverlayNav'
import OverlayMenu from './OverlayMenu'

function OverLayNav() {
    return (
        <div>
            <div className='hidden md:inline-block w-full absolute top-0 z-50'>
                <OverlayNav />
            </div>
            <div className='md:hidden fixed top-0 left-0 w-full z-50'>
                <OverlayMenu />
            </div>
        </div>
    )
}

export default OverLayNav