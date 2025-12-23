"use client"

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Code, Eye } from 'lucide-react';

import { motion } from "framer-motion"
import RefrashContent from '../../RefrashContent';
import { useRef, useState } from 'react';
import PathFlowPreview from './PathFlowPreview';
import PathFlowPreviewSourceCode from './PathFlowPreviewSourceCode';

function PathFlowItemsPreview() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const mountRef = useRef<HTMLDivElement>(null)
    return (
        <div className='relative'>
            <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <div className="z-0 inset-0 flex justify-between">
                    <TabList className="h-10 flex justify-between p-1 w-full gap-1">
                        <div className='flex items-center gap-2 max-w-[130px] '>
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(8px)" }}
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
                                    delay: 0.2
                                }}
                            >
                                <Tab className="h-full gap-2 flex items-center px-2 py-1 cursor-pointer w-full text-sm border border-dashed border-gray-400 bg-[#eeeeee] dark:bg-[#171616] rounded-md outline-none">
                                    <Eye className="h-4 w-4" />
                                    Showcase
                                </Tab>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(8px)" }}
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
                            >
                                <Tab className="h-full gap-2 flex items-center px-2 py-1 cursor-pointer w-full text-sm border border-dashed border-gray-400 bg-[#eeeeee] dark:bg-[#171616] rounded-md outline-none">
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
                        className="border border-gray-700 rounded-2xl"
                    >
                        <div
                            ref={mountRef}
                            className="w-full rounded-2xl"
                        >
                            <div
                                className="z-40 w-full rounded-2xl h-full bg-white"
                            >
                                <PathFlowPreview />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel static hidden={selectedIndex !== 1}>
                        <PathFlowPreviewSourceCode />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    )
}

export default PathFlowItemsPreview