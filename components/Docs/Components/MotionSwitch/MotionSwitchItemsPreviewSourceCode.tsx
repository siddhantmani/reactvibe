"use client"

import FramerMotionGlobalInstalation from '../../FramerMotionGlobalInstalation'
import Separator from '../../Separator'

import { motion } from "framer-motion"
import MotionSwitchOpenCode from './MotionSwitchOpenCode'

function MotionSwitchItemsPreviewSourceCode() {
    return (
        <div>
            <FramerMotionGlobalInstalation />
            <div className='py-5'>
                <Separator direction='horizontal' className='dark:bg-white/15 bg-black/15 w-full' />
            </div>
            <motion.div
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                whileInView={{ opacity: 1 }}
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
                    <MotionSwitchOpenCode />
                </div>
            </motion.div>
        </div>
    )
}

export default MotionSwitchItemsPreviewSourceCode