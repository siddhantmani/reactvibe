import LinearReveal from '@/components/LinearReveal'
import {Manrope } from 'next/font/google';
import React from 'react'

const LinearRevealFont = Manrope({
    weight: '700',
    subsets: ['vietnamese']
});

function LinearRevealPreview() {
    return (
        <div className='flex justify-center items-center h-screen '>
            <LinearReveal
                as='h1'
                className={`${LinearRevealFont.className} text-7xl`}
                Text='The Linear Reveal'
                delay={0.4}
            />
        </div>
    )
}

export default LinearRevealPreview