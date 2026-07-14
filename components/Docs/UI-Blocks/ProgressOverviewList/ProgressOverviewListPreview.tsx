"use client"

import { motion } from "framer-motion"
import React from "react"
import LinearReveal from "@/components/LinearReveal"
import { Manrope } from "next/font/google"

export const manrope = Manrope({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
})

const list = [
    {
        title: "List 1",
        spent: 320,
        total: 500,
        progress: 64,
    },
    {
        title: "List 2",
        spent: 120,
        total: 250,
        progress: 48,
    },
    {
        title: "List 3",
        spent: 200,
        total: 400,
        progress: 50,
    },
    {
        title: "List 4",
        spent: 80,
        total: 200,
        progress: 40,
    },
]

interface ProgressProps {
    progress: number
}

function Progress({ progress }: ProgressProps) {
    const [value, setValue] = React.useState(0)

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setValue(progress)
        }, 250)

        return () => clearTimeout(timer)
    }, [progress])

    return (
        <div className="relative h-[4px] w-full overflow-hidden rounded-full bg-gray-200 dark:bg-white/10">
            <div
                className="h-full rounded-full bg-green-600 transition-all duration-[1200ms] ease-out dark:bg-green-500"
                style={{
                    width: `${value}%`,
                }}
            />
        </div>
    )
}

interface ProgressOverviewListItemProps {
    title: string
    spent: number
    total: number
    progress: number
}

function ProgressOverviewListItem({
    title,
    spent,
    total,
    progress,
}: ProgressOverviewListItemProps) {
    return (
        <div className="space-y-[1px]">
            {/* Top */}
            <div className="flex items-start justify-between">
                <div>
                    <h3
                        className={`${manrope.className} text-[11px] font-[500] text-gray-900 dark:text-white`}
                    >
                        {title}
                    </h3>

                    <LinearReveal
                        delay={0.4}
                        as="p"
                        Text={`${spent} of ${total}`}
                        className={`${manrope.className} mt-3 text-[11px] font-[600] text-gray-600 dark:text-gray-400`}
                    />
                </div>

                <LinearReveal
                    as="p"
                    delay={0.4}
                    Text={`${progress}%`}
                    className={`${manrope.className} mt-3 text-[12px] text-gray-900 dark:text-white`}
                />
            </div>

            {/* Progress */}
            <Progress progress={progress} />
        </div>
    )
}

function ProgressOverviewListPreview() {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(2px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{
                once: true,
                amount: 0.2,
                margin: "50px",
            }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2,
            }}
            exit={{ opacity: 0, y: -10 }}
            className="rounded-[15px] border border-black/10 bg-white p-3 px-3 shadow-[0_15px_40px_rgba(0,0,0,0.03)] dark:border-white/10 dark:bg-[#0c0c0c] dark:shadow-none"
        >
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
                <h1
                    className={`${manrope.className} text-[12px] font-[500] text-gray-900 dark:text-white`}
                >
                    Progress Overview List
                </h1>

                <button
                    className={`${manrope.className} text-[12px] font-[500] text-green-700 transition-opacity hover:opacity-80 dark:text-green-400`}
                >
                    View All
                </button>
            </div>

            {/* List */}
            <div className="space-y-4">
                {list.map((item, index) => (
                    <ProgressOverviewListItem
                        key={index}
                        title={item.title}
                        spent={item.spent}
                        total={item.total}
                        progress={item.progress}
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default ProgressOverviewListPreview