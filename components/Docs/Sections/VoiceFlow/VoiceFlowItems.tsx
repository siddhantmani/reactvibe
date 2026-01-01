import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import VoiceFlowItemsPreview from './VoiceFlowItemsPreview';
const OrbitFontFont = Bricolage_Grotesque({
    weight: '700', 
    subsets: ['vietnamese']
});
function VoiceFlowItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl'>
            <LinearReveal
                as={'h1'}
                className={`${OrbitFontFont.className} text-5xl py-10`}
                text='Voice Flow'
            />
            <div className='border-black rounded-2xl'>
                <VoiceFlowItemsPreview />
            </div>
        </div>
    )
}

export default VoiceFlowItems