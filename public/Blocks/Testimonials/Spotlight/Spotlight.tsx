"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { FaXTwitter } from "react-icons/fa6"
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

// Fixed: Removed 'key' from the props since it should not be spread
function TestimonialCard({ review, image, name, work }: Omit<ReviewItem, 'key'>) {
    return (

        <div className="flex flex-col gap-4 space-y-8">
            <motion.div
                initial={{ opacity: 0, filter: "blur(2px)" }}
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
                <p className=" xl:text-[22px] lg:text-[18px] text-[12px] opacity-90 text-gray-800 dark:text-white transition-colors">
                    {review}
                </p>
            </motion.div>
            <div className="flex items-center gap-3">
                <motion.div
                    initial={{ opacity: 0, filter: "blur(2px)" }}
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
                        className="aspect-square h-10 w-full rounded-sm md:rounded-lg object-cover p-[1px] bg-gray-200 dark:bg-[#f1eeee] transition-colors"
                    />
                </motion.div>
                <div className="flex items-center justify-between w-full">
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(2px)" }}
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
                            as={'h2'}
                            Text={name}
                            className='text-[12px] md:text-sm text-gray-900 dark:text-white transition-colors'
                        />


                        <LinearReveal
                            as={'p'}
                            Text={work}
                            className='text-[8px] md:text-xs text-gray-500 dark:text-[#f4f4f4] transition-colors'
                        />
                    </motion.div>
                    <div>
                        <FaXTwitter
                            className="md:size-[30px] size-[20px] p-1.5 rounded-md transition-all duration-300
                            fill-gray-700 dark:fill-white 
                            border border-gray-200 dark:border-white/30 
                            bg-gray-50 dark:bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.08),rgba(0,0,0,0.95)_70%)]"
                        />
                    </div>

                </div>

            </div>
        </div>


    )
}

export default function Spotlight({
    reviews,
    enableArrowNavigation = true,
    showDots = true,
}: TestimonialsProps) {
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const prevIndex = (index - 1 + reviews.length) % reviews.length
    const nextIndex = (index + 1) % reviews.length

    const { key: prevKey, ...prevProps } = reviews[prevIndex]
    const { key: currKey, ...currProps } = reviews[index]
    const { key: nextKey, ...nextProps } = reviews[nextIndex]

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
            <div className="flex items-center justify-between gap-0 overflow-hidden">
                {/* Left peek card */}
                <div className="flex-shrink-0 max-w-[60%] -ml-[40%] xl:max-w-[35%] xl:-ml-[10%] lg:-ml-[35%] lg:max-w-[60%] md:max-w-[60%] md:-ml-[40%] p-6 rounded-2xl border opacity-30 blur-[3px] scale-[80%] pointer-events-none transition-colors duration-300
                bg-white border-gray-200 
                dark:border-white/10 dark:bg-transparent dark:bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.08),rgba(0,0,0,0.95)_70%)]"
                >
                    <TestimonialCard {...prevProps} />
                </div>

                {/* Center main card */}
                <div
                    className="scale-[110%] md:scale-[90%] xl:max-w-[110%] lg:w-[90%] p-4 py-4 md:p-8 md:py-10 rounded-2xl border w-[100%] transition-colors duration-300
                    bg-white border-gray-200 shadow-md 
                    dark:shadow-none dark:border-white/20 dark:bg-transparent dark:bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.08),rgba(0,0,0,0.95)_70%)]"
                >
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currKey}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <TestimonialCard {...currProps} />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right peek card */}
                <div
                    className="flex-shrink-0 max-w-[60%] -mr-[40%] xl:max-w-[35%] p-6 xl:-mr-[10%] lg:-mr-[35%] lg:max-w-[60%] md:max-w-[60%] md:-mr-[40%] rounded-2xl border opacity-30 blur-[3px] pointer-events-none scale-[90%] transition-colors duration-300
                    bg-white border-gray-200 
                    dark:border-white/10 dark:bg-transparent dark:bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.08),rgba(0,0,0,0.95)_70%)]"
                >
                    <TestimonialCard {...nextProps} />
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, filter: "blur(2px)" }}
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
                    <div className="flex justify-center items-center gap-1">
                        {enableArrowNavigation && (
                            <ArrowLeft
                                onClick={prev}
                                className="h-8 w-8 cursor-pointer border rounded-md p-2 flex-shrink-0 mr-3 transition-colors duration-300
                                border-gray-200 text-gray-700 bg-white hover:bg-gray-50 
                                dark:border-white/20 dark:text-white dark:bg-transparent dark:hover:bg-[#171717] dark:bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.08),rgba(0,0,0,0.95)_70%)]"
                            />
                        )}

                        {reviews.map((_, i) => (
                            <motion.span
                                key={`dot-${i}`}
                                onClick={() => {
                                    setDirection(i > index ? 1 : -1)
                                    setIndex(i)
                                }}
                                className={`h-[5px] w-[5px] rounded-full cursor-pointer transition-colors duration-300 ${i === index ? "bg-gray-800 dark:bg-[#faf8f7]" : "bg-gray-300 dark:bg-[#C0C7D0]"
                                    }`}
                                animate={{
                                    scale: i === index ? 1.2 : 1,
                                    opacity: i === index ? 1 : 0.4,
                                    width: i === index ? 25 : 5,
                                }}
                            />
                        ))}

                        {enableArrowNavigation && (
                            <ArrowRight
                                onClick={next}
                                className="h-8 w-8 cursor-pointer border rounded-md p-2 flex-shrink-0 ml-3 transition-colors duration-300
                                border-gray-200 text-gray-700 bg-white hover:bg-gray-50 
                                dark:border-white/20 dark:text-white dark:bg-transparent dark:hover:bg-[#171717] dark:bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.08),rgba(0,0,0,0.95)_70%)]"
                            />
                        )}
                    </div>
                )}
            </motion.div>
        </div>
    )
}