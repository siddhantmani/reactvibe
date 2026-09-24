"use client"

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { useState } from 'react'

import { Code, Eye } from 'lucide-react';
import ResolvePreview from './ResolvePreview';
import ResolvePreviewSourceCode from './ResolvePreviewSourceCode';
import DeviceToggleGroup from '@/components/DeviceToggleGroup';
import SpotlightBackground from '@/components/SpotlightBackground';
import ResizablePreview from '@/components/ResizablePreview';
import RelatedBlocks from '@/components/RelatedBlocks';
import { faqBlocks } from '@/lib/blocks/faq';
import RefrashContent from '@/components/Docs/RefrashContent';

function ResolveItemsPreview() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [previewWidth, setPreviewWidth] = useState(1190);

    return (
        <div className='relative'>
            <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <div className="z-0 inset-0 flex justify-between">
                    <TabList className="h-10 flex justify-between p-1 w-full gap-1">
                        <div className='flex items-center gap-2 max-w-[130px] hidden md:block md:flex-row md:flex'>
                            {/* NOTE: You can extract these Animated Tabs next! */}
                            <Tab className="h-full gap-2 flex items-center px-2 py-[5px] cursor-pointer w-full text-sm border rounded-md outline-none">
                                <Eye className="h-4 w-4" /> Showcase
                            </Tab>
                            <Tab className="h-full gap-2 flex items-center px-2 py-[5px] cursor-pointer w-full text-sm border rounded-md outline-none">
                                <Code className="h-4 w-4" /> Source
                            </Tab>
                        </div>
                        <div className='md:hidden flex items-center gap-2 max-w-[130px]'>
                            {/* NOTE: You can extract these Animated Tabs next! */}
                            <Tab className="h-full gap-2 flex items-center px-2 py-[5px] cursor-pointer w-full text-sm border rounded-md outline-none">
                                <Eye className="h-4 w-4" />
                            </Tab>
                            <Tab className="h-full gap-2 flex items-center px-2 py-[5px] cursor-pointer w-full text-sm border rounded-md outline-none">
                                <Code className="h-4 w-4" />
                            </Tab>
                        </div>

                        <div className='flex items-center gap-2'>
                            {/* 1. DROP IN THE TOGGLE GROUP */}
                            <DeviceToggleGroup
                                activeWidth={previewWidth}
                                onWidthChange={setPreviewWidth}
                            />

                            <RefrashContent />
                        </div>
                    </TabList>
                </div>

                <TabPanels className="mt-2">
                    <TabPanel
                        static
                        hidden={selectedIndex !== 0}
                        className="border border-gray-700 rounded-2xl relative h-[800px] bg-white dark:bg-[#0b0b0b]"
                    >
                        {/* 2. DROP IN THE BACKGROUND */}
                        <SpotlightBackground className="rounded-2xl z-0" spotlightSize={180} />

                        {/* 3. DROP IN THE CANVAS AND PASS THE STATE */}
                        <ResizablePreview
                            width={previewWidth}
                            onWidthChange={setPreviewWidth}
                            className="absolute inset-0 z-10 py-2"
                        >
                            <ResolvePreview />
                        </ResizablePreview>
                    </TabPanel>
                    <TabPanel static hidden={selectedIndex !== 1}>
                        <ResolvePreviewSourceCode />
                    </TabPanel>
                </TabPanels>
            </TabGroup>

            <div className="max-w-7xl mx-auto pb-24">
                <RelatedBlocks
                    currentSlug="resolve"
                    blocks={faqBlocks}
                    basePath="/docs/blocks/faq"
                    title="Explore more FAQ blocks"
                />
            </div>
        </div>
    )
}

export default ResolveItemsPreview