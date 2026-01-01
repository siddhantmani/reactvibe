import LinearReveal from '@/components/LinearReveal'
import React from 'react'
import OverlayMenuItemsPreview from './OverlayMenuItemsPreview'
import { Bricolage_Grotesque } from 'next/font/google';
const LinearRevealFont = Bricolage_Grotesque({
    weight: '700', 
    subsets: ['vietnamese']
});

function OverlayMenuItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl'>
            <LinearReveal
                as={'h1'}
                className={`${LinearRevealFont.className} text-5xl py-10`}
                text='Overlay Menu'
            />
            <div className='border-black rounded-2xl'>
                <OverlayMenuItemsPreview />
            </div>
        </div>
    )
}

export default OverlayMenuItems