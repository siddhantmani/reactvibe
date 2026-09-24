"use client"

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Code, Eye } from 'lucide-react';
import React, { useRef, useState } from 'react'
import { motion } from "framer-motion"
import MotionSwtichPreview from './MotionSwtichPreview';
import MotionSwitchItemsPreviewSourceCode from './MotionSwitchItemsPreviewSourceCode';
import DeviceToggleGroup from '@/components/DeviceToggleGroup';
import RefrashContent from '../../RefrashContent';

function MotionSwitchItemsPreview() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const mountRef = useRef<HTMLDivElement>(null)

    return (
        <div className='relative'>
            <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <div className="z-0 inset-0 flex justify-between">
                    <TabList className="h-10 flex justify-between p-1 w-full gap-1">
                        <div className='flex items-center gap-2 max-w-[130px] hidden md:block md:flex-row md:flex'>

                            <Tab className="h-full gap-2 flex items-center px-2 py-[5px] cursor-pointer w-full text-sm border rounded-md outline-none">
                                <Eye className="h-4 w-4" /> Showcase
                            </Tab>
                            <Tab className="h-full gap-2 flex items-center px-2 py-[5px] cursor-pointer w-full text-sm border rounded-md outline-none">
                                <Code className="h-4 w-4" /> Source
                            </Tab>
                        </div>
                        <div className='md:hidden flex items-center gap-2 max-w-[130px]'>

                            <Tab className="h-full gap-2 flex items-center px-2 py-[5px] cursor-pointer w-full text-sm border rounded-md outline-none">
                                <Eye className="h-4 w-4" />
                            </Tab>
                            <Tab className="h-full gap-2 flex items-center px-2 py-[5px] cursor-pointer w-full text-sm border rounded-md outline-none">
                                <Code className="h-4 w-4" />
                            </Tab>
                        </div>

                    </TabList>
                    <div className='flex items-center gap-2'>
                        <RefrashContent />
                    </div>
                </div>

                <TabPanels className="mt-2">
                    <TabPanel
                        static
                        hidden={selectedIndex !== 0}
                        className="border border-black/10 dark:border-white/10 rounded-2xl"
                    >
                        <div
                            ref={mountRef}
                            className="w-full xl:h-[350px] lg:h-[550px] md:h-[550px] h-[550px] rounded-2xl"
                        >
                            <div
                                className="flex justify-center items-center bg-white dark:bg-black z-40 w-full rounded-2xl h-full"
                            >
                                <MotionSwtichPreview />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel static hidden={selectedIndex !== 1}>
                        <MotionSwitchItemsPreviewSourceCode />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    )
}

export default MotionSwitchItemsPreview