import React from 'react'
import FramerMotionGlobalInstalation from '../../FramerMotionGlobalInstalation'
import PrimeOpenCode from './PrimeOpenCode'
import LinearReveal from '@/components/LinearReveal'
import Link from 'next/link'
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google'

const LinearRevealFont = JetBrains_Mono({
    weight: "400",
    subsets: ["latin"],
})

const LinearRevealStep2Font = Bricolage_Grotesque({
    weight: "700",
    subsets: ["latin"],
})


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
                    className={`${LinearRevealStep2Font.className} text-4xl`}
                    Text='Step 2'
                />
                <p className={`${LinearRevealFont.className} dark:text-white text-black text-sm`}>Use <Link href="/docs/components/orbit-border">
                    <span className='underline underline-offset-2'>Orbit Border</span></Link> </p>
            </div>
            <div className='pt-4 space-y-4'>
                <LinearReveal
                    as={"h2"}
                    className={`${LinearRevealStep2Font.className} text-4xl`}
                    Text='Step 3'
                />
                <p className={`${LinearRevealFont.className} dark:text-white text-black text-sm`}>Use <Link href="/docs/text-motion/linear-reveal">
                    <span className='underline underline-offset-2'>Linear Reveal</span></Link> </p>
            </div>
        </div>
    )
}

export default PrimeItemsPreviewSourceCode