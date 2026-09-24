"use client"

import { motion } from "framer-motion"
import VoiceFlowCode from './VoiceFlowCode'
import LinearReveal from '@/components/LinearReveal'
import Link from 'next/link'
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google'
import SupportingDarkmode from '@/components/SupportingDarkmode'
import FramerMotionGlobalInstalation from "@/components/Docs/FramerMotionGlobalInstalation"
import Separator from "@/components/Docs/Separator"

const LinearRevealFont = JetBrains_Mono({
    weight: "400",
    subsets: ["latin"],
})
const LinearRevealStep2Font = Bricolage_Grotesque({
    weight: "700",
    subsets: ["latin"],
})

function VoiceFlowPreviewPreviewSourceCode() {
    return (
        <div>
            <FramerMotionGlobalInstalation />
            <div className='py-5'>
                <Separator direction='horizontal' className='bg-black/15 dark:bg-white/15 w-full' />
            </div>
            <motion.div
                initial={{ opacity: 0, filter: "blur(3px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{
                    once: true,
                    amount: 0.2, 
                    margin: "50px"
                }}
                transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94], 
                    delay: 0.9
                }}

            >
                <div>
                    <VoiceFlowCode />
                </div>
            </motion.div>

            <SupportingDarkmode />

            <div className='pt-4 space-y-4'>
                <LinearReveal
                    as={"h2"}
                    className={`${LinearRevealStep2Font.className} text-4xl`}
                    Text='Steps 2'
                />
                <p className={`${LinearRevealFont.className} dark:text-white text-black text-sm`}>Use <Link href="/docs/text/linear-reveal">
                    <span className='underline underline-offset-2'>Linear Reveal</span></Link> </p>
            </div>
        </div>
    )
}

export default VoiceFlowPreviewPreviewSourceCode