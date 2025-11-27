import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import OrbitBorderItemsPreview from './OrbitBorderItemsPreview';
import LinearReveal from '@/components/LinearReveal';

const OrbitFontFont = Bricolage_Grotesque({
    weight: '700', // Specify the font weight if needed  
    subsets: ['vietnamese']
});

function OrbitBorderItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl'>
            <LinearReveal
                as={'h1'}
                className={`${OrbitFontFont.className} text-5xl py-10`}
                text='Orbit Border'
            />
            <div className='border-black rounded-2xl'>
                <OrbitBorderItemsPreview />
            </div>
        </div>
    )
}

export default OrbitBorderItems