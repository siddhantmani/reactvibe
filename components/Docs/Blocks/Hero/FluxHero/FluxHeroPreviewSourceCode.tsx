import FramerMotionGlobalInstalation from '@/components/Docs/FramerMotionGlobalInstalation'
import Separator from '@/components/Docs/Separator'
import SupportingDarkmode from '@/components/SupportingDarkmode'
import React from 'react'
import FluxHeroOpenCode from './FluxHeroOpenCode'
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


function FluxHeroPreviewSourceCode() {
    return (
        <div>
            <FramerMotionGlobalInstalation />
            <div className='py-5'>
                <Separator direction='horizontal' className='w-full h-1 dark:bg-white/10 bg-black/10' />
            </div>

            <div>
                <FluxHeroOpenCode />
            </div>
            <div className='py-5'>
                <Separator direction='horizontal' className='w-full h-1 dark:bg-white/10 bg-black/10' />
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
                <p className={`${LinearRevealFont.className} dark:text-white text-black text-sm`}>Use <Link href="/docs/backgrounds/spotlight-grid" target='_blank'>
                    <span className='underline underline-offset-2'>Spotlight Grid</span></Link> </p>
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
                <p className={`${LinearRevealFont.className} dark:text-white text-black text-sm`}>Use <Link href="/docs/blocks/navigation/morph-nav" target='_blank'>
                    <span className='underline underline-offset-2'>Morph Nav</span></Link> </p>
            </div>
            <div className='py-5'>
                <Separator direction='horizontal' className='w-full h-1 dark:bg-white/10 bg-black/10' />
            </div>
            <div className='pt-4 space-y-4'>
                <LinearReveal
                    as={"h2"}
                    className={`${LinearRevealStep2Font.className} text-4xl`}
                    Text='Step 4'
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
                    Text='Step 5'
                />
                <p className={`${LinearRevealFont.className} dark:text-white text-black text-sm`}>Use <Link href="/docs/components/animated-gradient-badge" target='_blank'>
                    <span className='underline underline-offset-2'>Animated Gradient Badge</span></Link> </p>
            </div>
            <div className='py-5'>
                <Separator direction='horizontal' className='w-full h-1 dark:bg-white/10 bg-black/10' />
            </div>
            <div className='pt-4 space-y-4'>
                <LinearReveal
                    as={"h2"}
                    className={`${LinearRevealStep2Font.className} text-4xl`}
                    Text='Step 6'
                />
                <p className={`${LinearRevealFont.className} dark:text-white text-black text-sm`}>Use <Link href="/docs/blocks/navigation/morph-menu" target='_blank'>
                    <span className='underline underline-offset-2'>Morph Menu</span></Link> </p>
            </div>
            <div className='py-5'>
                <Separator direction='horizontal' className='w-full h-1 dark:bg-white/10 bg-black/10' />
            </div>

            <div className='pt-4 space-y-4'>
                <LinearReveal
                    as={"h2"}
                    className={`${LinearRevealStep2Font.className} text-4xl`}
                    Text='Step 7'
                />
                <p className={`${LinearRevealFont.className} dark:text-white text-black text-sm`}>Use <Link href="/docs/text-motion/linear-reveal" target='_blank'>
                    <span className='underline underline-offset-2'>Liner Reveal</span></Link> </p>
            </div>
            <div className='py-5'>
                <Separator direction='horizontal' className='w-full h-1 dark:bg-white/10 bg-black/10' />
            </div>
            <div className='pt-4 space-y-4'>
                <LinearReveal
                    as={"h2"}
                    className={`${LinearRevealStep2Font.className} text-4xl`}
                    Text='Step 8'
                />
                <p className={`${LinearRevealFont.className} dark:text-white text-black text-sm`}>Use <Link href="/docs/motion/wave-cta" target='_blank'>
                    <span className='underline underline-offset-2'>Wave CTA</span></Link> </p>
            </div>
       
        </div>
    )
}

export default FluxHeroPreviewSourceCode