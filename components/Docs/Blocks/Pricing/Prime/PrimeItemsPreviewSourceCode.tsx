import React from 'react'
import PrimeOpenCode from './PrimeOpenCode'
import LinearReveal from '@/components/LinearReveal'
import Link from 'next/link'

import FramerMotionGlobalInstalation from '@/components/Docs/FramerMotionGlobalInstalation'
import { creditFont, LinearRevealFont } from '@/lib/fonts'

function PrimeItemsPreviewSourceCode() {
    return (
        <div className='space-y-4'>
            <FramerMotionGlobalInstalation />
            <div>
                <PrimeOpenCode />
            </div>
            <div className='pt-4 space-y-4'>
                <LinearReveal
                    as={"h2"}
                    className={`${LinearRevealFont.className}  font-[700] text-4xl`}
                    Text='Step 2'
                />
                <p className={`${creditFont.className} font-[400] dark:text-white text-black text-sm`}>Use <Link href="/docs/components/orbit-border">
                    <span className='underline underline-offset-2'>Orbit Border</span></Link> </p>
            </div>
            <div className='pt-4 space-y-4'>
                <LinearReveal
                    as={"h2"}
                    className={`${LinearRevealFont.className} font-[500] text-4xl`}
                    Text='Step 3'
                />
                <p className={`${creditFont.className} font-[400] dark:text-white text-black text-sm`}>Use <Link href="/docs/text/linear-reveal">
                    <span className='underline underline-offset-2'>Linear Reveal</span></Link> </p>
            </div>
        </div>
    )
}

export default PrimeItemsPreviewSourceCode