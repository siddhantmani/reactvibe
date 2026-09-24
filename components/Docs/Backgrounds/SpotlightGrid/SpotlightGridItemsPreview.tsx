"use client"

import DeviceToggleGroup from '@/components/DeviceToggleGroup';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Code, Eye } from 'lucide-react';
import React, { useState } from 'react'
import RefrashContent from '../../RefrashContent';
import SpotlightBackground from '@/components/SpotlightBackground';
import ResizablePreview from '@/components/ResizablePreview';
import SpotlightGridPreview from './SpotlightGridPreview';
import SpotlightGridPreviewSourceCode from './SpotlightGridPreviewSourceCode';

function SpotlightGridItemsPreview() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [previewWidth, setPreviewWidth] = useState(1440);
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

                        <DeviceToggleGroup
                            activeWidth={previewWidth}
                            onWidthChange={setPreviewWidth}
                        />

                        <RefrashContent />
                    </div>
                </div>

                <TabPanels className="mt-2">
                    <TabPanel
                        static
                        hidden={selectedIndex !== 0}
                        className="border border-gray-700 rounded-2xl relative h-[700px] bg-white dark:bg-[#0b0b0b]"
                    >
                        <SpotlightBackground className="rounded-2xl z-0" spotlightSize={180} />

                        <ResizablePreview
                            width={previewWidth}
                            onWidthChange={setPreviewWidth}
                            className="absolute inset-0 z-10 py-2"
                        >
                            <SpotlightGridPreview spotlightSize={180}/>
                        </ResizablePreview>
                    </TabPanel>
                    <TabPanel static hidden={selectedIndex !== 1}>
                        <SpotlightGridPreviewSourceCode />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    )
}

export default SpotlightGridItemsPreview