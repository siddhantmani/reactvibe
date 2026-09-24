"use client"
import { motion } from "framer-motion"

import FramerMotionGlobalInstalation from '../../FramerMotionGlobalInstalation'
import Separator from '../../Separator'
import SupportingDarkmode from "@/components/SupportingDarkmode"
import PipelineOpenCode from "./PipelineOpenCode"

function PipelinePreviewSourceCode() {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{
                once: true,
                amount: 0.2, // Trigger when 20% visible
                margin: "50px"
            }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                delay: 0.9
            }}
        >
            <FramerMotionGlobalInstalation />
            <div className='py-5'>
                <Separator className='' />
            </div>

            <div>
                <div>
                    <PipelineOpenCode />
                </div>
                <SupportingDarkmode />

            </div>
        </motion.div>
    )
}

export default PipelinePreviewSourceCode