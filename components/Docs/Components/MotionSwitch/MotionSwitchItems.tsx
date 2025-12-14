import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import MotionSwitchItemsPreview from './MotionSwitchItemsPreview';

const OrbitFontFont = Bricolage_Grotesque({
    weight: '700', // Specify the font weight if needed  
    subsets: ['vietnamese']
});

function MotionSwitchItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl'>
            <LinearReveal
                as={'h1'}
                className={`${OrbitFontFont.className} text-5xl py-10`}
                text='Motion Switch'
            />
            <div className='border-black rounded-2xl'>
                <MotionSwitchItemsPreview />
            </div>
        </div>
    )
}

export default MotionSwitchItems