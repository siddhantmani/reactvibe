import React from 'react'
import OverlayNav from './OverlayNav'
import OverlayMenu from './OverlayMenu'

function OverLayNav() {
    return (
        <div>
            <div className='hidden md:inline-block w-full'>
                <OverlayNav />
            </div>
            <div className='md:hidden '>
                <OverlayMenu />
            </div>
        </div>
    )
}

export default OverLayNav