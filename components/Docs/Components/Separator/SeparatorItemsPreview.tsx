"use client"

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import React, { useRef, useState } from 'react'

import { motion } from "framer-motion"
import { Code, Eye } from 'lucide-react';
import SeparatorPreview from './SeparatorPreview';
import SeparatorItemsPreviewSourceCode from './SeparatorItemsPreviewSourceCode';
import RefrashContent from '../../RefrashContent';

function SeparatorItemsPreview() {
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

                        <div className='flex items-center gap-2'>
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
                            className="w-full xl:h-[650px] lg:h-[550px] md:h-[550px] h-[550px] rounded-2xl"
                        >

                            <div className=" dark:text-white text-black z-40 w-full rounded-2xl h-full"
                            >
                                <SeparatorPreview />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel static hidden={selectedIndex !== 1}>
                        <SeparatorItemsPreviewSourceCode />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    )
}

export default SeparatorItemsPreview