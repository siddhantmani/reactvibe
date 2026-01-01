import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import TestimonialsItemsPreview from './TestimonialsItemsPreview';
import LinearReveal from '@/components/LinearReveal';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function TestimonialsItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl'>
            <LinearReveal
                as={'h1'}
                className={`${LinearRevealFont.className} text-5xl py-10`}
                text='Testimonial Flow'
            />
            <div className='border-black rounded-2xl'>
                <TestimonialsItemsPreview />
            </div>
        </div>
    )
}

export default TestimonialsItems