import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import FluxCTAItemsPreview from './FluxCTAItemsPreview';
const LinearRevealFont = Bricolage_Grotesque({
    weight: '700', // Specify the font weight if needed  
    subsets: ['vietnamese']
});

function FluxCTAItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl pb-10'>
            <LinearReveal
                as={'h1'}
                className={`${LinearRevealFont.className} text-5xl py-10`}
                text='Flux CTA'
            />

            <div className='border-black rounded-2xl'>
                <FluxCTAItemsPreview />
            </div>
        </div>
    )
}

export default FluxCTAItems