"use client"

import { motion } from 'framer-motion';
import TestimonialsMainSectionSubItems from './TestimonialsMainSectionSubItems';
import { manrope } from '@/lib/fonts';

function TestimonialsMainSection() {
    return (
        <div className='flex flex-col @md:flex-row @md:items-center @md:justify-center gap-10 py-10 px-3 dark:bg-black'>
            <div className='flex flex-col justify-start items-start'>
                <motion.div
                    initial={{ opacity: 0, filter: "blur(2px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{
                        once: true,
                        amount: 0.2, // Trigger when 20% visible
                        margin: "50px"
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                        delay: 0.2
                    }}

                >
                    <label className={`${manrope.className} font-[600] p-3 rounded-full px-3 text-[#ffffff] bg-[#191b1b] border-2 border-[#181919] @xl:text-base text-sm @xl:px-5`}>Testimonial</label>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, filter: "blur(2px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{
                        once: true,
                        amount: 0.2, // Trigger when 20% visible
                        margin: "50px"
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                        delay: 0.3
                    }}

                >
                    <h1 className={`${manrope.className} font-[600] @md:text-2xl @lg:text-4xl @xl:text-5xl text-3xl pt-6 pb-1 text-start max-w-lg dark:text-white text-black`}>What Our Clients Say</h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, filter: "blur(2px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{
                        once: true,
                        amount: 0.2, // Trigger when 20% visible
                        margin: "50px"
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                        delay: 0.4
                    }}

                >
                    <p className={`${manrope.className} font-[400] text-base max-w-xs text-start dark:text-white text-black`}>Real words from the people we&#39;ve helped grow.</p>
                </motion.div>

            </div>
            <div>
                <motion.div
                    initial={{ opacity: 0, filter: "blur(2px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{
                        once: true,
                        amount: 0.2, // Trigger when 20% visible
                        margin: "50px"
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                        delay: 0.8
                    }}

                >
                    <TestimonialsMainSectionSubItems />
                </motion.div>

            </div>
        </div>
    )
}

export default TestimonialsMainSection