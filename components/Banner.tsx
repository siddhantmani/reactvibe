"use client"

import {motion} from "framer-motion"
import Image from "next/image"
import { CheckCircle2, Crown, MoveRight } from "lucide-react"
import Link from "next/link"

import bannerImg from "@/images/Banner.png"
import { manrope } from "@/lib/fonts"

function Banner() {
    const features = [
        "7 Complete Dashboards",
        "35+ UI Blocks",
        "Production Ready",
        "Easy to Customize",
    ]

    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(2px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0 }}
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
            className="overflow-hidden rounded-3xl border border-zinc-200 bg-white p-3 transition-colors dark:border-zinc-800 dark:bg-[#171616]">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center">

                {/* Left */}
                <div className="flex flex-1 gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-lg shadow-violet-500/20 dark:shadow-violet-900/30">
                        <Crown className="h-7 w-7 fill-white" />
                    </div>

                    <div className="flex-1">
                        <h2
                            className={`${manrope.className} text-[20px] font-[700] text-slate-900 dark:text-white`}
                        >
                            Part of the{" "}
                            <span className="text-violet-600 dark:text-violet-400">
                                TaskForge
                            </span>{" "}
                            Admin Template
                        </h2>

                        <p
                            className={`${manrope.className} mt-1 text-[14px] font-[500] text-slate-600 dark:text-zinc-400`}
                        >
                            Explore 7 production-ready dashboards and UI Blocks
                            built with React Vibe components.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {features.map((feature) => (
                                <div
                                    key={feature}
                                    className={`${manrope.className} flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-2 text-[13px] text-slate-700 transition-colors dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300`}
                                >
                                    <CheckCircle2
                                        size={16}
                                        className="fill-violet-500 text-white"
                                    />
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Preview */}
                <div className="hidden 2xl:block">
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors dark:border-zinc-700 dark:bg-zinc-900">
                        <Image
                            src={bannerImg}
                            alt="TaskForge Preview"
                            width={330}
                            height={180}
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* CTA */}
                <div className="w-full xl:w-[240px]">
                    <div
                        className={`${manrope.className} rounded-2xl bg-violet-50 p-3 py-6 transition-colors dark:bg-zinc-900`}
                    >
                        <h3 className="text-[16px] font-[600] text-slate-900 dark:text-white">
                            Get the complete template
                        </h3>

                        <p className="mt-2 text-[12px] text-slate-600 dark:text-zinc-400">
                            Unlock all dashboards, pages and components.
                        </p>

                        <Link href="/docs/templates/taskforge">
                            <button className="mt-5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-violet-600 py-3 text-[14px] font-[500] text-white transition-all duration-200 hover:scale-[1.03] hover:bg-violet-700 dark:hover:bg-violet-500">
                                View TaskForge
                                <MoveRight size={17} />
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default Banner