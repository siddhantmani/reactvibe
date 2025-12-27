import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import React from 'react'
import AuraBaseItemsPreview from './AuraBaseItemsPreview';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});
const CreditFont = JetBrains_Mono({
    weight: '300',
    subsets: ['vietnamese']
});

function AuraBaseItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl pb-10'>
            <LinearReveal
                as={'h1'}
                className={`${LinearRevealFont.className} text-5xl py-10`}
                text='Aura Base'
            />

            <div className='border-black rounded-2xl'>
                <AuraBaseItemsPreview />
            </div>
            <div className={`${CreditFont.className} flex items-center gap-1 dark:text-white text-black text-xs pt-10`} >
                <p>Credit: Aura Base UI designed by</p>
                <Link href="https://x.com/grigoryzero" target='_blank'>
                    <p className='underline underline-offset-2'>Grigory</p>
                </Link>
            </div>
        </div>
    )
}

export default AuraBaseItems