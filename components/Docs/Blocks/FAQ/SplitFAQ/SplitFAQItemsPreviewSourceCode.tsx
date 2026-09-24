"use client"

import { motion } from "framer-motion"
import FlowlistFAQOpenCode from "./SplitFAQItemsOpenCode"
import LinearReveal from "@/components/LinearReveal"
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import SupportingDarkmode from "@/components/SupportingDarkmode";

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});


const CreditFont = JetBrains_Mono({
    weight: '300',
    subsets: ['vietnamese']
});

function SplitFAQItemsPreviewSourceCode() {
    return (
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
            <FlowlistFAQOpenCode />

            <SupportingDarkmode />

            <LinearReveal
                className={`${LinearRevealFont.className} text-4xl mb-2 mt-5`}
                Text='Step 2'
            />
            <div className={`${CreditFont.className} flex items-center gap-1 dark:text-white text-black text-xs pt-3`} >
                <p>Use</p>
                <Link href="/docs/components/orbit-border" target='_blank'>
                    <p className='underline underline-offset-2'>Orbit Border</p>
                </Link>
            </div>

        </motion.div>
    )
}

export default SplitFAQItemsPreviewSourceCode