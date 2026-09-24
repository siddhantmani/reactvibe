"use client"
import React, { useRef, useState } from 'react'

import { motion } from "framer-motion"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Code, Eye } from 'lucide-react';
import AuroraPricingPreview from './AuroraPricingPreview';
import AuroraPricingItemsPreviewSourceCode from './AuroraPricingItemsPreviewSourceCode';
import DeviceToggleGroup from '@/components/DeviceToggleGroup';
import SpotlightBackground from '@/components/SpotlightBackground';
import ResizablePreview from '@/components/ResizablePreview';
import RelatedBlocks from '@/components/RelatedBlocks';
import { pricingBlocks } from '@/lib/blocks/pricing';
import RefrashContent from '@/components/Docs/RefrashContent';

function AuroraPricingItemsPreview() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const mountRef = useRef<HTMLDivElement>(null)

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
                            <AuroraPricingPreview />
                        </ResizablePreview>
                    </TabPanel>
                    <TabPanel static hidden={selectedIndex !== 1}>
                        <AuroraPricingItemsPreviewSourceCode />
                    </TabPanel>
                </TabPanels>
            </TabGroup>

            <div className="max-w-7xl mx-auto pb-24">
                <RelatedBlocks
                    currentSlug="aurora-pricing"
                    blocks={pricingBlocks}
                    basePath="/docs/blocks/pricing"
                    title="Explore more Pricing blocks"
                />
            </div>
        </div>
    )
}

export default AuroraPricingItemsPreview