"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import LinearReveal from "@/components/LinearReveal"

type ReviewItem = {
    key: string
    review: string
    image: string
    name: string
    work: string
}

type TestimonialsProps = {
    reviews: ReviewItem[]
    enableArrowNavigation?: boolean
    showDots?: boolean
}

function VoiceCard({ review, image, name, work }: Omit<ReviewItem, 'key'>) {
    return (
        <div className="flex flex-col gap-4 space-y-8">
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
                    delay: 0.2
                }}
            >
                <p className="text-md opacity-70 text-gray-800 dark:text-gray-200 transition-colors">
                    {review}
                </p>
            </motion.div>
            <div className="flex items-center gap-3">
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
                        delay: 0.2
                    }}
                >
                    <Image
                        src={image}
                        alt={name}
                        height={1000}
                        width={1000}
                        className="w-12 h-12 rounded-full object-cover p-1 bg-[#e7e7e7] dark:bg-[#2A2B30] transition-colors"
                    />
                </motion.div>
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
                        delay: 0.1
                    }}
                >
                    <LinearReveal
                        as={'div'}
                        Text={name}
                        className='text-sm text-[#1d1c1c] dark:text-[#E0E3E8] transition-colors'
                    />

                    <LinearReveal
                        as={'div'}
                        Text={work}
                        className='text-xs text-[#807d7d] dark:text-[#A0A5B0] transition-colors'
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default function VoiceFlow({
    reviews,
    enableArrowNavigation = true,
    showDots = true,
}: TestimonialsProps) {
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    if (!reviews || reviews.length === 0) {
        return <div className="p-8 text-center text-gray-500">No reviews available</div>
    }

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 40 : -40,
            opacity: 0,
        }),
        center: { x: 0, opacity: 1 },
        exit: (direction: number) => ({
            x: direction > 0 ? -40 : 40,
            opacity: 0,
        }),
    }

    const next = () => {
        setDirection(1)
        setIndex((prev) => (prev + 1) % reviews.length)
    }

    const prev = () => {
        setDirection(-1)
        setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    }

    // Destructure to separate key from other props
    const { key: reviewKey, ...reviewProps } = reviews[index]

    return (
        <div className="space-y-6 p-2">
            <div className="flex items-center">
                {enableArrowNavigation && (
                    <ArrowLeft
                        onClick={prev}
                        className="h-8 w-8 cursor-pointer border border-gray-200 dark:border-[#2A2B30] text-gray-700 dark:text-gray-300 rounded-md p-2 hover:bg-gray-100 dark:hover:bg-[#171717] transition-colors flex-shrink-0"
                    />
                )}
                <div className='h-[170px] w-[20px] bg-[#F1F2F4] dark:bg-[#1A1C23] rounded-l-full ml-3 transition-colors' />
                <div className="flex-1 bg-white dark:bg-[#141517] p-8 rounded-2xl shadow-sm dark:shadow-none border border-gray-100 dark:border-[#2A2B30] transition-colors duration-300">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={reviewKey}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                duration: 0.35,
                                ease: [0.4, 0, 0.2, 1],
                            }}
                        >
                            <VoiceCard {...reviewProps} />
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className='h-[170px] w-[20px] bg-[#F1F2F4] dark:bg-[#1A1C23] rounded-r-full mr-3 transition-colors' />

                {enableArrowNavigation && (
                    <ArrowRight
                        onClick={next}
                        className="h-8 w-8 cursor-pointer border border-gray-200 dark:border-[#2A2B30] text-gray-700 dark:text-gray-300 rounded-md p-2 hover:bg-gray-100 dark:hover:bg-[#171717] transition-colors flex-shrink-0"
                    />
                )}
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
                    delay: 0.2
                }}
            >
                {showDots && (
                    <div className="flex justify-center gap-1">
                        {reviews.map((_, i) => (
                            <motion.span
                                key={`dot-${i}`}
                                onClick={() => {
                                    setDirection(i > index ? 1 : -1)
                                    setIndex(i)
                                }}
                                className={`h-[5px] w-[5px] rounded-full cursor-pointer transition-colors duration-300 ${i === index ? "bg-[#454B57] dark:bg-[#E0E3E8]" : "bg-[#C0C7D0] dark:bg-[#454B57]"
                                    }`}
                                animate={{
                                    scale: i === index ? 1.2 : 1,
                                    opacity: i === index ? 1 : 0.4,
                                }}
                            />
                        ))}
                    </div>
                )}
            </motion.div>
        </div>
    )
}