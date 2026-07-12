"use client"
import { motion } from "framer-motion"

import { RotateCw } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

function RefrashContent() {
    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(2px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0 }}
            viewport={{
                once: true,
                amount: 0.2,
                margin: "50px"
            }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2
            }}
            onClick={handleRefresh}
            className='flex items-center p-2 rounded-md bg-[#efeded] cursor-pointer dark:bg-gradient-to-r from-[#2c2b2b] from-[33%] to-[#222121] to-47%'
        >
            <Tooltip>
                <TooltipTrigger>
                    <RotateCw size={18} />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Refresh</p>
                </TooltipContent>
            </Tooltip>
        </motion.div>
    )
}

export default RefrashContent
