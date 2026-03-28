"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { FaXTwitter } from "react-icons/fa6"
import LinearReveal from "@/public/Text-Motion/LinearReveal/LinearReveal"

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
                <p className=" xl:text-[22px] lg:text-[18px] text-[12px] opacity-90 text-white">
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
                        className="h-10 md:h-14 w-full rounded-sm md:rounded-lg object-cover p-[1px] bg-[#f1eeee]"
                    />
                </motion.div>
                <div className="flex items-center justify-between w-full">
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
                                as={'h2'}
                                text={name}
                                className='text-[12px] md:text-sm text-white'
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
                            className="text-white"
                        >
                            <LinearReveal
                                as={'p'}
                                text={work}
                                className='text-[8px] md:text-xs text-[#f4f4f4]'
                            />
                        </motion.div>
                    </div>
                    <div>
                        <FaXTwitter
                            style={{
                                background: `
                radial-gradient(
                  circle at 50% 40%,
                  rgba(255,255,255,0.08),
                  rgba(0,0,0,0.95) 70%
                )
              `
                            }}
                            className="md:size-[30px] size-[20px] fill-white border border-white/30 p-1.5 rounded-md" />
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
            <div className="flex items-center justify-between gap-1.5 overflow-hidden">
                {/* Left peek card */}
                <div className="flex-shrink-0 max-w-[60%] -ml-[40%] xl:max-w-lg xl:-ml-[10%] lg:-ml-[35%] lg:max-w-[60%] md:max-w-[60%] md:-ml-[40%] p-6 rounded-2xl border border-white/10 opacity-30 blur-[3px] scale-80 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at 50% 40%, rgba(255,255,255,0.08), rgba(0,0,0,0.95) 70%)`
                    }}
                >
                    <TestimonialCard {...prevProps} />
                </div>

                {/* Center main card */}
                <div
                    className="scale-[110%] md:scale-[100%] xl:w-[60%] lg:w-[90%] p-4 py-4 md:p-8 md:py-10 rounded-2xl border border-white/20"
                    style={{
                        background: `radial-gradient(circle at 50% 40%, rgba(255,255,255,0.08), rgba(0,0,0,0.95) 70%)`
                    }}
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
                    className="flex-shrink-0 max-w-[60%] -mr-[40%] xl:max-w-lg p-6 xl:-mr-[10%] lg:-mr-[35%] lg:max-w-[60%] md:max-w-[60%] md:-mr-[40%]  rounded-2xl border border-white/10 opacity-30 blur-[3px] scale-80 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at 50% 40%, rgba(255,255,255,0.08), rgba(0,0,0,0.95) 70%)`
                    }}
                >
                    <TestimonialCard {...nextProps} />
                </div>
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
                    <div className="flex justify-center items-center gap-1">
                        {enableArrowNavigation && (
                            <ArrowLeft
                                style={{
                                    background: `
                radial-gradient(
                  circle at 50% 40%,
                  rgba(255,255,255,0.08),
                  rgba(0,0,0,0.95) 70%
                )
              `
                                }}
                                onClick={prev}
                                className="h-8 w-8 cursor-pointer border rounded-md p-2 border-white/20 text-white bg-gray-100 dark:hover:bg-[#171717] transition-colors flex-shrink-0 mr-3"
                            />
                        )}

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
                                    width: i === index ? 25 : 5,
                                }}
                                style={{
                                    backgroundColor:
                                        i === index ? "#faf8f7" : "#C0C7D0",
                                }}
                            />
                        ))}

                        {enableArrowNavigation && (
                            <ArrowRight
                                style={{
                                    background: `
                radial-gradient(
                  circle at 50% 40%,
                  rgba(255,255,255,0.08),
                  rgba(0,0,0,0.95) 70%
                )
              `
                                }}
                                onClick={next}
                                className="h-8 w-8 cursor-pointer border border-white/20 text-white rounded-md p-2 bg-gray-100 dark:hover:bg-[#171717] transition-colors flex-shrink-0 ml-3"
                            />
                        )}
                    </div>
                )}
            </motion.div>
        </div>
    )
}