"use client"

import React, { useState } from 'react'
import { motion } from "framer-motion";

function MotionSwtich() {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div>
            <label className='flex cursor-pointer select-none items-center'>
                <div className='relative'>
                    <input
                        type='checkbox'
                        className='sr-only'
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                    />
                    <div className="scale-[75%]">
                        <motion.div
                            className='block h-8 w-14 rounded-full'
                            animate={{ backgroundColor: isChecked ? '#323232' : '#E5E7EB' }}
                        />
                        <motion.div
                            className="dot absolute top-1 h-6 w-6 rounded-full bg-white"
                            animate={{ left: isChecked ? "28px" : "4px", background: isChecked ? '#ffffff' : "#323232" }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        />
                    </div>
                </div>
            </label>
        </div>
    )
}

export default MotionSwtich