import React from 'react'
import FramerMotionGlobalInstalation from '../../FramerMotionGlobalInstalation'
import Separator from '../../Separator'
import FluxCTAOpenCode from './FluxCTAOpenCode'
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


function FluxCTAItemsPreviewSourceCode() {
    return (
        <div>
            <FramerMotionGlobalInstalation />
            <div className='py-5'>
                <Separator
                    orientation='horizontal'
                    className='bg-black/20 dark:bg-white/20 w-full'
                />
            </div>
            <div>
                <FluxCTAOpenCode />
            </div>
            <div className='pt-4 space-y-4'>
                <LinearReveal
                    as={"h2"}
                    className={`${LinearRevealStep2Font.className} text-4xl`}
                    text='Steps 2'
                />
                <p className={`${LinearRevealFont.className} dark:text-white text-black text-sm`}>Use <Link href="/docs/text-motion/linear-reveal">
                    <span className='underline underline-offset-2'>Linear Reveal</span></Link> </p>
            </div>
        </div>
    )
}

export default FluxCTAItemsPreviewSourceCode