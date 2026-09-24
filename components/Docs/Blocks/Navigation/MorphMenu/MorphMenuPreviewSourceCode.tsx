import FramerMotionGlobalInstalation from '@/components/Docs/FramerMotionGlobalInstalation'
import Separator from '@/components/Docs/Separator'
import SupportingDarkmode from '@/components/SupportingDarkmode'
import React from 'react'
import MorphMenuOpenCode from './MorphMenuOpenCode'
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


function MorphMenuPreviewSourceCode() {
    return (
        <div>
            <FramerMotionGlobalInstalation />
            <div className='py-5'>
                <Separator />
            </div>
            
            <div>
                <MorphMenuOpenCode />
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
                <p className={`${LinearRevealFont.className} dark:text-white text-black text-sm`}>Use <Link href="/docs/text/linear-reveal" target='_blank'>
                    <span className='underline underline-offset-2'>Liner Reveal</span></Link> </p>
            </div>
        </div>
    )
}

export default MorphMenuPreviewSourceCode