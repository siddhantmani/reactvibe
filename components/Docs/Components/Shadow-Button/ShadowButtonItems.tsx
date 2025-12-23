import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import ShadowButtonItemsPreview from './ShadowButtonItemsPreview';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700', // Specify the font weight if needed  
    subsets: ['vietnamese']
});

function ShadowButtonItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl'>
            <LinearReveal
                as={'h1'}
                className={`${LinearRevealFont.className} text-5xl py-10`}
                text='Shadow Button'
            />
            <div className='border-black rounded-2xl'>
                <ShadowButtonItemsPreview />
            </div>
        </div>
    )
}

export default ShadowButtonItems