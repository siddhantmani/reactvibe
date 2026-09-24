import React from 'react'
import MorphNav from './MorphNav'
import { manrope } from '@/lib/fonts'
import MorphMenu from '../MorphMenu/MorphMenu'

function MorphNavPreview() {
    return (
        <div className=''>
            <div className='hidden @lg:inline-block w-full fixed top-0 z-50'>
                <MorphNav />
            </div>
            <div className='@md:hidden w-full z-50'>
                <MorphMenu />
            </div>

            <h1 className={`${manrope.className} flex justify-center items-center absolute bottom-50 w-full text-6xl text-black/10 dark:text-white/10`}>Scroll</h1>
        </div>
    )
}

export default MorphNavPreview