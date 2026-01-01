import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import GlideAccordionItemsPreview from './GlideAccordionItemsPreview';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function GlideAccordionItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl pb-10'>
            <LinearReveal
                as={'h1'}
                className={`${LinearRevealFont.className} text-5xl py-10`}
                text='Glide Accordion'
            />

            <div className='border-black rounded-2xl'>
                <GlideAccordionItemsPreview />
            </div>
        </div>
    )
}

export default GlideAccordionItems