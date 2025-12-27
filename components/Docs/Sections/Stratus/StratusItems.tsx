import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import React from 'react'
import StratusItemsPreview from './StratusItemsPreview';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700', // Specify the font weight if needed  
    subsets: ['vietnamese']
});
const CreditFont = JetBrains_Mono({
    weight: '300', // Specify the font weight if needed  
    subsets: ['vietnamese']
});
function StratusItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl pb-10'>
            <LinearReveal
                as={'h1'}
                className={`${LinearRevealFont.className} text-5xl py-10`}
                text='Stratus'
            />

            <div className='border-black rounded-2xl'>
                <StratusItemsPreview />
            </div>
            <div className={`${CreditFont.className} flex items-center gap-1 dark:text-white text-black text-xs pt-10`} >
                <p>Credit: Nova Pricing UI designed by</p>
                <Link href="https://x.com/grigoryzero" target='_blank'>
                    <p className='underline underline-offset-2'>Grigory</p>
                </Link>
            </div>
        </div>
    )
}

export default StratusItems