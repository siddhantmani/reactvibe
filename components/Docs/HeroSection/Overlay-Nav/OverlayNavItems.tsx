import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import OverlayNavItemsPreview from './OverlayNavItemsPreview';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700', 
    subsets: ['vietnamese']
});

function OverlayNavItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl'>
            <LinearReveal
                as={'h1'}
                className={`${LinearRevealFont.className} text-5xl py-10`}
                text='Overlay Nav'
            />
            <div className='border-black rounded-2xl'>
                <OverlayNavItemsPreview />
            </div>
        </div>
    )
}

export default OverlayNavItems