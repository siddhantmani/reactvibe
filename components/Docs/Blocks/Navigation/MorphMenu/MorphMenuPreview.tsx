import { manrope } from '@/lib/fonts'
import React from 'react'
import MorphMenu from './MorphMenu'

function MorphMenuPreview() {
    return (
        <div>
            <MorphMenu />
            <h1 className={`${manrope.className} flex justify-center items-center absolute bottom-50 w-full text-6xl text-black/10 dark:text-white/10`}>Scroll</h1>
        </div>
    )
}

export default MorphMenuPreview