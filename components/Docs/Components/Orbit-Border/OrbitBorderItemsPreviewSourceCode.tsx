"use client"

import { Separator } from '@/components/ui/separator';
import OrbitBorderCode from './OrbitBorderCode';
import FramerMotionGlobalInstalation from '../../FramerMotionGlobalInstalation';

import { motion } from "framer-motion"
function OrbitBorderItemsPreviewSourceCode() {
    return (
        <div>
            <FramerMotionGlobalInstalation />
            <div className='py-5'>
                <Separator className='' />
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
                    <OrbitBorderCode />
                </div>
            </motion.div>
        </div>
    )
}

export default OrbitBorderItemsPreviewSourceCode