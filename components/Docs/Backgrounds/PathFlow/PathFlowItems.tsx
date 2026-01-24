import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import React from 'react'
import PathFlowItemsPreview from './PathFlowItemsPreview';
import Link from 'next/link';
const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

const CreditFont = JetBrains_Mono({
    weight: '300',
    subsets: ['vietnamese']
});


function PathFlowItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl'>
            <LinearReveal
                as={'h1'}
                className={`${LinearRevealFont.className} text-5xl py-10`}
                text='Path Flow'
            />
            <div className='border-black rounded-2xl'>
                <PathFlowItemsPreview />
            </div>
            <div className={`${CreditFont.className} flex items-center gap-1 dark:text-white text-black text-xs pt-3`} >
                <p>Credit: Subsence landing page UI designed by</p>
                <Link href="https://x.com/grigoryzero" target='_blank'>
                    <p className='underline underline-offset-2'>Grigory Zero</p>
                </Link>
            </div>
        </div>
    )
}

export default PathFlowItems