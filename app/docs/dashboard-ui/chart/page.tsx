"use client"

import { motion } from "framer-motion";

import { manrope } from '@/lib/fonts'
import Link from "next/link";
import { PreviewCanvas } from "@/components/PreviewCanvas";
import { ArrowUpRight } from "lucide-react";
import { chartBlocks } from "@/lib/dashboardUi/chart";

function Chart() {
    return (
        <div className="space-y-10 max-w-7xl mx-auto px-2">
            <motion.div
                initial={{ opacity: 0, filter: "blur(2px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                    duration: 1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="space-y-2"
            >
                <h1
                    className={`${manrope.className} text-4xl font-semibold tracking-tight`}
                >
                    Chart
                </h1>

                <p className="text-muted-foreground">
                    A growing collection of ready-to-use React dashboard charts and data visualization UI components for building polished SaaS and analytics dashboards.
                </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {chartBlocks.map((block, index) => {
                    const Preview = block.preview;

                    return (
                        <motion.div
                            key={block.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.05,
                                duration: 0.45,
                            }}
                        >
                            <Link
                                href={`/docs/dashboard-ui/chart/${block.slug}`}
                                className="group block"
                            >
                                <div className="overflow-hidden  rounded-2xl border border-border bg-background transition-all duration-300 hover:border-neutral-500 p-2">

                                    {/* Preview */}
                                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-50/50 dark:bg-[#020202] border">

                                        <PreviewCanvas>
                                            <div className="w-full h-full">
                                                <Preview preview />
                                            </div>
                                        </PreviewCanvas>

                                        <div className="absolute right-3 top-1 flex p-[5px] items-center justify-center rounded-full bg-black/40 opacity-0 backdrop-blur transition group-hover:opacity-100">
                                            <ArrowUpRight size={16} className="text-white" />
                                        </div>
                                    </div>
                                    {/* Content */}

                                    <div className="space-y-3 p-1 pt-2">

                                        <div>

                                            <div className="flex items-center gap-2">
                                                <h3 className="font-medium">
                                                    {block.name}
                                                </h3>
                                                {block.badge && (
                                                    <div className="rounded-full bg-violet-600 px-2 py-1 text-[8px] font-medium text-white">
                                                        {block.badge}
                                                    </div>
                                                )}

                                            </div>

                                            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                                                {block.description}
                                            </p>

                                        </div>

                                        <div className="flex flex-wrap gap-2">

                                            {block.tags?.map((tag: string) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full capitalize border px-2 py-1 text-xs text-muted-foreground"
                                                >
                                                    {tag}
                                                </span>
                                            ))}

                                        </div>

                                    </div>

                                </div>
                            </Link>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default Chart