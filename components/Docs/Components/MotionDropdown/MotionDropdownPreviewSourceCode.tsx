import React from 'react'
import FramerMotionGlobalInstalation from '../../FramerMotionGlobalInstalation'
import Separator from '../../Separator'
import MotionDropdownCode from './MotionDropdownCode'
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

function MotionDropdownPreviewSourceCode() {
    return (
        <div>
            <FramerMotionGlobalInstalation />
            <div className='py-3'>
                <Separator
                    direction='horizontal'
                    className=' bg-black/15 dark:bg-white/15 w-full'
                />
            </div>
            <div>
                <MotionDropdownCode />
            </div>
            <div className='pt-4 space-y-4'>
                <LinearReveal
                    as={"h2"}
                    className={`${LinearRevealStep2Font.className} text-4xl`}
                    text='Steps 2'
                />
                <p className={`${LinearRevealFont.className} dark:text-white text-black text-sm`}>Use <Link href="/docs/components/separator">
                    <span className='underline underline-offset-2'>Separator</span></Link> </p>
            </div>
        </div>
    )
}

export default MotionDropdownPreviewSourceCode