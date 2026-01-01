import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import React from 'react'
import AuroraPricingItemsPreview from './AuroraPricingItemsPreview';
import Link from 'next/link';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700', 
    subsets: ['vietnamese']
});
const CreditFont = JetBrains_Mono({
    weight: '300', 
    subsets: ['vietnamese']
});

function AuroraPricingItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl pb-10'>
            <LinearReveal
                as={'h1'}
                className={`${LinearRevealFont.className} text-5xl py-10`}
                text='Aurora Pricing'
            />

            <div className='border-black rounded-2xl'>
                <AuroraPricingItemsPreview />
            </div>
            <div className={`${CreditFont.className} flex items-center gap-1 dark:text-white text-black text-xs pt-3`} >
                <p>Credit: Aurora Pricing UI designed by</p>
                <Link href="https://x.com/MahmudHxn" target='_blank'>
                    <p className='underline underline-offset-2'>Mahmud</p>
                </Link>
            </div>
        </div>
    )
}

export default AuroraPricingItems