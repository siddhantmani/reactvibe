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

function TestimonialCard({ review, image, name, work }: Omit<ReviewItem, 'key'>) {
    return (
        <div className="flex flex-col gap-4 space-y-8">
            <motion.div
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                whileInView={{ opacity: 1 }}
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
                <p className=" text-md opacity-70 dark:text-black">
                    {review}
                </p>
            </motion.div>
            <div className="flex items-center gap-3">
                <motion.div
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    whileInView={{ opacity: 1 }}
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
                        className="w-12 h-12 rounded-full object-cover p-1 bg-[#e7e7e7]"
                    />
                </motion.div>
                <div>
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(8px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        whileInView={{ opacity: 1 }}
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
                            text={name}
                            className='text-sm text-[#1d1c1c]'
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, filter: "blur(8px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        whileInView={{ opacity: 1 }}
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
                            text={work}
                            className='text-xs text-[#807d7d]'
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default function TestimonialsFlow({
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
                        className="h-8 w-8 cursor-pointer border rounded-md p-2 hover:bg-gray-100 dark:hover:bg-[#171717] transition-colors flex-shrink-0"
                    />
                )}
                <div className='h-[170px] w-[20px] bg-[#F1F2F4] rounded-l-full ml-3' />
                <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
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
                            <TestimonialCard {...reviewProps} />
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className='h-[170px] w-[20px] bg-[#F1F2F4] rounded-r-full mr-3' />

                {enableArrowNavigation && (
                    <ArrowRight
                        onClick={next}
                        className="h-8 w-8 cursor-pointer border rounded-md p-2 hover:bg-gray-100 dark:hover:bg-[#171717] transition-colors flex-shrink-0"
                    />
                )}
            </div>

            <motion.div
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                whileInView={{ opacity: 1 }}
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
                                className="h-[5px] w-[5px] rounded-full cursor-pointer"
                                animate={{
                                    scale: i === index ? 1.2 : 1,
                                    opacity: i === index ? 1 : 0.4,
                                }}
                                style={{
                                    backgroundColor:
                                        i === index ? "#454B57" : "#C0C7D0",
                                }}
                            />
                        ))}
                    </div>
                )}
            </motion.div>
        </div>
    )
}