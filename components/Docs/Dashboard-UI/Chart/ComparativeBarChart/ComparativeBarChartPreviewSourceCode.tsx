"use client"

import { motion } from "framer-motion"

import LinearReveal from "@/components/LinearReveal"
import Link from "next/link"
import ComparativeBarChartOpenCode from "./ComparativeBarChartOpenCode"
import SupportingDarkmode from "@/components/SupportingDarkmode"
import FramerMotionGlobalInstalation from "@/components/Docs/FramerMotionGlobalInstalation"
import Separator from "@/components/Docs/Separator"
import { stepsFont, titleFont } from "@/lib/fonts"

function ComparativeBarChartPreviewSourceCode() {
    return (
        <div>
            <FramerMotionGlobalInstalation />
            <div className='py-5'>
                <Separator
                    direction='horizontal'
                    className='w-full dark:bg-white/15 bg-black/15'
                />
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
                    delay: 0.3
                }}
            >
                <ComparativeBarChartOpenCode />
            </motion.div>

            <SupportingDarkmode />

            <div>
                <div className='pt-4 space-y-4'>
                    <LinearReveal
                        as={"h2"}
                        className={`${titleFont.className} font-[700] text-4xl`}
                        Text='Step 2'
                    />
                    <p className={`${stepsFont.className} font-[400] dark:text-white text-black text-sm`}>Use <Link href="/docs/text/linear-reveal">
                        <span className='underline underline-offset-2'>Linear Reveal</span></Link> </p>
                </div>

            </div>
        </div>
    )
}

export default ComparativeBarChartPreviewSourceCode