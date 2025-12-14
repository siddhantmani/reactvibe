import React from 'react'
import FramerMotionGlobalInstalation from '../../FramerMotionGlobalInstalation'
import GlideAccordionOpenCode from './GlideAccordionOpenCode'
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


function GlideAccordionItemsPreviewSourceCode() {
    return (
        <div className='space-y-4'>
            <FramerMotionGlobalInstalation />
            <div>
                <GlideAccordionOpenCode />
            </div>
            <div className='pt-4 space-y-4'>
                <LinearReveal
                    as={"h2"}
                    className={`${LinearRevealStep2Font.className} text-4xl`}
                    text='Steps 2'
                />
                <p className={`${LinearRevealFont.className} dark:text-white text-black text-sm`}>Use <Link href="/docs/components/orbit-border">
                    <span className='underline underline-offset-2'>Orbit Border</span></Link> </p>
            </div>
        </div>
    )
}

export default GlideAccordionItemsPreviewSourceCode