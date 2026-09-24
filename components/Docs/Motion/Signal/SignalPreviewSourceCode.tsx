"use client"
import { motion } from "framer-motion"

import FramerMotionGlobalInstalation from '../../FramerMotionGlobalInstalation'
import Separator from '../../Separator'
import SupportingDarkmode from "@/components/SupportingDarkmode"
import SignalOpenCode from "./SignalOpenCode"
import FramerMotionIconsGlobalInstalation from "../../FramerMotionIconsGlobalInstalation"

function SignalPreviewSourceCode() {
    return (
        <div>
            <FramerMotionIconsGlobalInstalation />
            <div className='py-5'>
                <Separator className='' />
            </div>

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
                <div>
                    <SignalOpenCode />
                </div>
                <SupportingDarkmode />

            </motion.div>
        </div>
    )
}

export default SignalPreviewSourceCode