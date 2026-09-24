import React from 'react'
import FramerMotionGlobalInstalation from '../../FramerMotionGlobalInstalation'
import Separator from '../../Separator'
import MorphNavOpenCode from '../../Blocks/Navigation/MorphNav/MorphNavOpenCode'
import SupportingDarkmode from '@/components/SupportingDarkmode'
import AnimatedGradientBadgeOpenCode from './AnimatedGradientBadgeOpenCode'
import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google'
import Link from 'next/link'

const LinearRevealFont = JetBrains_Mono({
    weight: "400",
    subsets: ["latin"],
})
const LinearRevealStep2Font = Bricolage_Grotesque({
    weight: "700",
    subsets: ["latin"],
})

function AnimatedGradientBadgePreviewSourceCode() {
    return (
        <div>
            <FramerMotionGlobalInstalation />
            <div className='py-5'>
                <Separator />
            </div>
            <div>
                <AnimatedGradientBadgeOpenCode />
            </div>

            <SupportingDarkmode />

            <div className='py-5'>
                <Separator direction='horizontal' className='w-full h-1 dark:bg-white/10 bg-black/10' />
            </div>
            <div className='pt-4 space-y-4'>
                <LinearReveal
                    as={"h2"}
                    className={`${LinearRevealStep2Font.className} text-4xl`}
                    Text='Step 2'
                />
                <p className={`${LinearRevealFont.className} dark:text-white text-black text-sm`}>Use <Link href="/docs/components/orbit-border" target='_blank'>
                    <span className='underline underline-offset-2'>Orbit Border</span></Link> </p>
            </div>
            <div className='py-5'>
                <Separator direction='horizontal' className='w-full h-1 dark:bg-white/10 bg-black/10' />
            </div>
            <div className='pt-4 space-y-4'>
                <LinearReveal
                    as={"h2"}
                    className={`${LinearRevealStep2Font.className} text-4xl`}
                    Text='Step 3'
                />
                <p className={`${LinearRevealFont.className} dark:text-white text-black text-sm`}>Use <Link href="/docs/components/animated-gradient-badge" target='_blank'>
                    <span className='underline underline-offset-2'>Animated Gradient Badge</span></Link> </p>
            </div>
        </div>
    )
}

export default AnimatedGradientBadgePreviewSourceCode