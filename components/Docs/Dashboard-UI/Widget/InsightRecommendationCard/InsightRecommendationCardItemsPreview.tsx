"use client"
import React, { useRef, useState } from 'react'

import { motion } from "framer-motion"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Code, Eye } from 'lucide-react';
import InsightRecommendationCardPreview from './InsightRecommendationCardPreview';
import InsightRecommendationCardPreviewSourceCode from './InsightRecommendationCardPreviewSourceCode';
import SpotlightBackground from '@/components/SpotlightBackground';
import RelatedBlocks from '@/components/RelatedBlocks';
import { widgetBlocks } from '@/lib/dashboardUi/widget';
import RefrashContent from '@/components/Docs/RefrashContent';

function InsightRecommendationCardItemsPreview() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <div className='relative'>
            <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <div className="z-0 inset-0 flex justify-between">
                    <TabList className="h-10 flex justify-between p-1 w-full gap-1">
                        <div className='flex items-center gap-2 max-w-[130px] '>
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(3px)" }}
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
                            >
                                <Tab className="h-full gap-2 flex items-center px-2 py-1 cursor-pointer w-full text-sm border border-gray-200 dark:border-white/10 rounded-md outline-none">
                                    <Eye className="h-4 w-4" />
                                    Showcase
                                </Tab>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(3px)" }}
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
                                    delay: 0.3
                                }}
                            >
                                <Tab className="h-full gap-2 flex items-center px-2 py-1 cursor-pointer w-full text-sm border border-gray-200 dark:border-white/10 rounded-md outline-none">
                                    <Code className="h-4 w-4" />
                                    Source
                                </Tab>
                            </motion.div>
                        </div>
                        <div>
                            <RefrashContent />
                        </div>
                    </TabList>
                </div>

                <TabPanels className="mt-2">
                    <TabPanel
                        static
                        hidden={selectedIndex !== 0}
                        className="border border-gray-700 rounded-2xl relative h-[500px] bg-white dark:bg-[#0b0b0b]"
                    >
                        <SpotlightBackground className="rounded-2xl z-0" spotlightSize={180} />

                        <div className='absolute inset-0 max-w-lg mx-auto pt-35'>
                            <InsightRecommendationCardPreview />
                        </div>
                    </TabPanel>
                    <TabPanel static hidden={selectedIndex !== 1}>
                        <InsightRecommendationCardPreviewSourceCode />
                    </TabPanel>
                </TabPanels>
            </TabGroup>

            <div className="max-w-7xl mx-auto pb-24">
                <RelatedBlocks
                    currentSlug="insight-recommendation-card"
                    blocks={widgetBlocks}
                    basePath="/docs/dashboard-ui/widget"
                    title="Explore more Widget blocks"
                />
            </div>
        </div>
    )
}

export default InsightRecommendationCardItemsPreview