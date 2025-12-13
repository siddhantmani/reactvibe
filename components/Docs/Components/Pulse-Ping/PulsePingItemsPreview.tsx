"use client"

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Code, Eye } from 'lucide-react';
import React, { useRef, useState } from 'react'

import { motion } from "framer-motion"
import PulsePingPreview from './PulsePingPreview';
import PulsePingItemsPreviewSourceCode from './PulsePingItemsPreviewSourceCode';

function PulsePingItemsPreview() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const mountRef = useRef<HTMLDivElement>(null)
    return (
        <div className='relative'>
            <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <div className="z-0 inset-0 flex justify-between">
                    <TabList className="h-10 inline-flex p-1 w-full max-w-[130px] gap-1">
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(8px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            whileInView={{ opacity: 1 }}
                            viewport={{
                                once: true,
                                amount: 0.2, // Trigger when 20% visible
                                margin: "50px"
                            }}
                            transition={{
                                duration: 1.2,
                                ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                                delay: 0.5
                            }}

                        >
                            <Tab className="h-full gap-2 flex items-center px-2 py-0 cursor-pointer w-full text-sm border border-dashed border-gray-400 bg-[#eeeeee] dark:bg-[#171616] rounded-md outline-none">
                                <Eye className="h-4 w-4" />
                                Showcase
                            </Tab>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(8px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            whileInView={{ opacity: 1 }}
                            viewport={{
                                once: true,
                                amount: 0.2, // Trigger when 20% visible
                                margin: "50px"
                            }}
                            transition={{
                                duration: 1.2,
                                ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                                delay: 0.6
                            }}

                        >
                            <Tab className="h-full gap-2 flex items-center px-2 py-0 cursor-pointer w-full text-sm border border-dashed border-gray-400 bg-[#eeeeee] dark:bg-[#171616] rounded-md outline-none">
                                <Code className="h-4 w-4" />
                                Source
                            </Tab>
                        </motion.div>

                    </TabList>
                </div>

                <TabPanels className="mt-2">
                    <TabPanel
                        static
                        hidden={selectedIndex !== 0}
                        className="border border-gray-700 rounded-2xl"
                    >
                        <div
                            ref={mountRef}
                            className="w-full xl:h-[350px] lg:h-[550px] md:h-[550px] h-[550px] rounded-2xl"
                        >
                            <div
                                className="flex justify-center items-center z-40 w-full rounded-2xl h-full"
                            >
                                <PulsePingPreview />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel static hidden={selectedIndex !== 1}>
                        <PulsePingItemsPreviewSourceCode />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    )
}

export default PulsePingItemsPreview