import React from 'react'
import MorphNav from './MorphNav'
import MorphMenu from './MorphMenu'

function Page() {
    return (
        <div className='dark:bg-[#0c0c0c]'>
            <div className='hidden lg:inline-block w-full fixed top-0 z-50'>
                <MorphNav />
            </div>
            <div className='lg:hidden w-full z-50'>
                <MorphMenu />
            </div>
        </div>
    )
}

export default Page