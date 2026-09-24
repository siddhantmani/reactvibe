"use client"
import { motion } from "framer-motion"

import FramerMotionGlobalInstalation from '../FramerMotionGlobalInstalation'
import Separator from '../Separator'
import ConnectionFlowOpenCode from "./ConnectionFlowOpenCode"
import SupportingDarkmode from "@/components/SupportingDarkmode"
import LinearReveal from "@/components/LinearReveal"
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google"
import Link from "next/link"

const LinearRevealFont = JetBrains_Mono({
    weight: "400",
    subsets: ["latin"],
})
const LinearRevealStep2Font = Bricolage_Grotesque({
    weight: "700",
    subsets: ["latin"],
})

function ConnectionFlowPreviewSourceCode() {
    return (
        <div>
            <FramerMotionGlobalInstalation />
            <div className='py-5'>
                <Separator
                    direction="horizontal"
                    className='bg-black/10 dark:bg-white/10' />
            </div>

            <motion.div
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                whileInView={{ opacity: 1 }}
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
                    <ConnectionFlowOpenCode />
                </div>
            </motion.div>
            <div className='py-5'>
                <Separator
                    direction="horizontal"
                    className='bg-black/10 dark:bg-white/10' />
            </div>

            <SupportingDarkmode />
            <div className='py-5'>
                <Separator
                    direction="horizontal"
                    className='bg-black/10 dark:bg-white/10' />
            </div>

            <div className="mt-4">
                Note: For ThemeProvider please setup Dark Mode!
                <div className='pt-4'>
                    <LinearReveal
                        as={"h2"}
                        className={`${LinearRevealStep2Font.className} text-4xl`}
                        Text='Step 2'
                    />
                    <p className={`${LinearRevealFont.className} dark:text-white text-black text-sm`}>Use <Link href="/docs/dark-mode" target="_blank">
                        <span className='underline underline-offset-2'>Dark Mode</span></Link> </p>
                </div>
                <div className='py-5'>
                    <Separator
                        direction="horizontal"
                        className='bg-black/10 dark:bg-white/10' />
                </div>

                <div className='pt-4'>
                    <LinearReveal
                        as={"h2"}
                        className={`${LinearRevealStep2Font.className} text-4xl`}
                        Text='Step 3'
                    />
                    <p className={`${LinearRevealFont.className} dark:text-white text-black text-sm`}>Use <Link href="/docs/components/orbit-border" target="_blank">
                        <span className='underline underline-offset-2'>Orbit Border</span></Link> </p>
                </div>
            </div>

        </div>
    )
}

export default ConnectionFlowPreviewSourceCode