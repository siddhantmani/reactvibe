"use client"

import React from 'react'

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub } from '@/components/ui/sidebar';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { JetBrains_Mono } from 'next/font/google';

type SidebarProps = {
    onItemClick: () => void;
};

const LinearRevealFont = JetBrains_Mono({
    weight: "400",
    subsets: ["latin"],
})
const LinearRevealHeadingFont = JetBrains_Mono({
    weight: "400",
    subsets: ["latin"],
})

import { motion } from "framer-motion"
import PingtoNew from './WhatsNew/PingtoNew';

function Sidebar({ onItemClick }: SidebarProps) {
    function isNew(createdAt: string) {
        const created = new Date(createdAt);
        const now = new Date();
        const diff = (now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24);
        return diff <= 15;
    }


    const BackgroundMenuItems = [
        { subMenu: 'Gradient Halo', subMenu_key: 'GradientHalo', link: '/docs/backgrounds/gradient-halo', createdAt: "11-29-2025" },
        { subMenu: 'Shining Star', subMenu_key: 'shiningStar', link: '/docs/backgrounds/shining-star', createdAt: "11-29-2025" },
        { subMenu: 'Lord Star', subMenu_key: 'lordStar', link: '/docs/backgrounds/lord-star', createdAt: "11-29-2025" },
        { subMenu: 'Dark Fusion', subMenu_key: 'darkFusion', link: '/docs/backgrounds/dark-fusion', createdAt: "11-29-2025" },
    ];

    const HeroSectionMenuItems = [
        { subMenu: "Wave CTA", subMenu_key: 'waveCTA', link: '/docs/hero-section/wave-cta', createdAt: "11-29-2025" }
    ]

    const SectionsItems = [
        { subMenu: "Aurora Pricing", subMenu_key: "auroraPricing", link: '/docs/sections/aurora-pricing', createdAt: "11-29-2025" },
        { subMenu: 'Testimonials', subMenu_key: 'testimonials', link: '/docs/sections/testimonials', createdAt: "11-29-2025" },
        { subMenu: 'Overlay Menu', subMenu_key: 'overlayMenu', link: '/docs/sections/overlay-menu', createdAt: "11-29-2025" }
    ]

    const ComponentsMenuItems = [
        { subMenu: 'Orbit Border', subMenu_key: 'orbitBorder', link: '/docs/components/orbit-border', createdAt: "11-29-2025" },
        { subMenu: 'Separator', subMenu_key: 'separator', link: '/docs/components/separator', createdAt: "11-29-2025" }
    ];

    const TextMotionMenuItems = [
        { subMenu: 'Linear Reveal', subMenu_key: 'LinearReveal', link: '/docs/text-motion/linear-reveal', createdAt: "11-29-2025" },
    ];

    return (
        <div>
            <div>
                <motion.div
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
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
                    <button onClick={onItemClick} className='pb-4' >
                        <Link href="/docs">
                            <div className='flex items-center space-x-2 p-[6px] dark:text-gray-200 hover:bg-[#f3f1f1] dark:hover:bg-[#323232] rounded-md flex-1 w-[230px] hover:text-black'>
                                <p className={`${LinearRevealFont.className} text-[17px]`}>Introduction</p>
                            </div>
                        </Link>
                    </button>
                </motion.div>
            </div>
            <div>
                <SidebarMenu>
                    <Collapsible asChild defaultOpen={true} className="group/collapsible">
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild className='w-64 dark:hover:bg-[#323232]'>
                                <SidebarMenuButton>
                                    <span className={`${LinearRevealHeadingFont.className} text-[17px]`}>Backgrounds</span>
                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                {BackgroundMenuItems.map((item, index) => (
                                    <SidebarMenuSub key={index} className='border-gray-400'>
                                        <SidebarMenuItem className='grid grid-cols-1'>
                                            <button>
                                                <Link href={item.link}>
                                                    <div onClick={onItemClick} className='flex items-center space-x-2 p-[6px] dark:text-gray-200 hover:bg-[#f3f1f1] dark:hover:bg-[#323232] rounded-md flex-1 w-[230px] hover:text-black'>
                                                        <div className='flex items-center space-x-2 p-[6px] dark:text-gray-200 hover:bg-[#f3f1f1] dark:hover:bg-[#454545]   rounded-md flex-1 w-[230px] hover:text-black'>
                                                            <p className={`${LinearRevealFont.className} text-[14px]`}>{item.subMenu}</p>
                                                            {isNew(item.createdAt) && <PingtoNew />}
                                                        </div>
                                                    </div>
                                                </Link>
                                            </button>
                                        </SidebarMenuItem>
                                    </SidebarMenuSub>
                                ))}
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                    {/* Hero Section */}
                    <Collapsible asChild defaultOpen={true} className="group/collapsible">
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild className='w-64 dark:hover:bg-[#323232]'>
                                <SidebarMenuButton>
                                    <span className={`${LinearRevealHeadingFont.className} text-[17px]`}>Hero Section</span>
                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                {HeroSectionMenuItems.map((item, index) => (
                                    <SidebarMenuSub key={index} className='border-gray-400'>
                                        <SidebarMenuItem className='grid grid-cols-1'>
                                            <button>
                                                <Link href={item.link}>
                                                    <div onClick={onItemClick} className='flex items-center space-x-2 p-[6px] dark:text-gray-200 hover:bg-[#f3f1f1] dark:hover:bg-[#323232] rounded-md flex-1 w-[230px] hover:text-black'>
                                                        <div className='flex items-center space-x-2 p-[6px] dark:text-gray-200 hover:bg-[#f3f1f1] dark:hover:bg-[#454545]   rounded-md flex-1 w-[230px] hover:text-black'>
                                                            <p className={`${LinearRevealFont.className} text-[14px]`}>{item.subMenu}</p>
                                                            {isNew(item.createdAt) && <PingtoNew />}
                                                        </div>
                                                    </div>
                                                </Link>
                                            </button>
                                        </SidebarMenuItem>
                                    </SidebarMenuSub>
                                ))}
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>

                    {/* Sections */}
                    <Collapsible asChild defaultOpen={true} className="group/collapsible">
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild className='w-64 dark:hover:bg-[#323232]'>
                                <SidebarMenuButton>
                                    <span className={`${LinearRevealHeadingFont.className} text-[17px]`}>Sections</span>
                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                {SectionsItems.map((item, index) => (
                                    <SidebarMenuSub key={index} className='border-gray-400'>
                                        <SidebarMenuItem className='grid grid-cols-1'>
                                            <button>
                                                <Link href={item.link}>
                                                    <div onClick={onItemClick} className='flex items-center space-x-2 p-[6px] dark:text-gray-200 hover:bg-[#f3f1f1] dark:hover:bg-[#323232] rounded-md flex-1 w-[230px] hover:text-black'>
                                                        <div className='flex items-center space-x-2 p-[6px] dark:text-gray-200 hover:bg-[#f3f1f1] dark:hover:bg-[#454545]   rounded-md flex-1 w-[230px] hover:text-black'>
                                                            <p className={`${LinearRevealFont.className} text-[14px]`}>{item.subMenu}</p>
                                                            {isNew(item.createdAt) && <PingtoNew />}
                                                        </div>
                                                    </div>
                                                </Link>
                                            </button>
                                        </SidebarMenuItem>
                                    </SidebarMenuSub>
                                ))}
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>

                    <Collapsible asChild defaultOpen={true} className="group/collapsible">
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild className='w-64 dark:hover:bg-[#323232]'>
                                <SidebarMenuButton>
                                    <span className={`${LinearRevealHeadingFont.className} text-[17px]`}>Components</span>
                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                {ComponentsMenuItems.map((item, index) => (
                                    <SidebarMenuSub key={index} className='border-gray-400'>
                                        <SidebarMenuItem className='grid grid-cols-1'>
                                            <button>
                                                <Link href={item.link}>
                                                    <div onClick={onItemClick} className='flex items-center space-x-2 p-[6px] dark:text-gray-200 hover:bg-[#f3f1f1] dark:hover:bg-[#323232] rounded-md flex-1 w-[230px] hover:text-black text-base/5'>
                                                        <div className='flex items-center space-x-2 p-[6px] dark:text-gray-200 hover:bg-[#f3f1f1] dark:hover:bg-[#454545]   rounded-md flex-1 w-[230px] hover:text-black'>
                                                            <p className={`${LinearRevealFont.className} text-[14px]`}>{item.subMenu}</p>
                                                            {isNew(item.createdAt) && <PingtoNew />}
                                                        </div>
                                                    </div>
                                                </Link>
                                            </button>
                                        </SidebarMenuItem>
                                    </SidebarMenuSub>
                                ))}
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>

                    <Collapsible asChild defaultOpen={true} className="group/collapsible">
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild className='w-64 dark:hover:bg-[#323232]'>
                                <SidebarMenuButton>
                                    <span className={`${LinearRevealHeadingFont.className} text-[17px]`}>Text Motion</span>
                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                {TextMotionMenuItems.map((item, index) => (

                                    <SidebarMenuSub key={index} className='border-gray-400'>
                                        <SidebarMenuItem className='grid grid-cols-1'>
                                            <button>
                                                <Link href={item.link}>
                                                    <div onClick={onItemClick} className='flex items-center space-x-2 p-[6px] dark:text-gray-200 hover:bg-[#f3f1f1] dark:hover:bg-[#323232] rounded-md flex-1 w-[230px] hover:text-black'>
                                                        <div className='flex items-center space-x-2 p-[6px] dark:text-gray-200 hover:bg-[#f3f1f1] dark:hover:bg-[#454545]   rounded-md flex-1 w-[230px] hover:text-black'>
                                                            <p className={`${LinearRevealFont.className} text-[14px]`}>{item.subMenu}</p>
                                                            {isNew(item.createdAt) && <PingtoNew />}
                                                        </div>
                                                    </div>
                                                </Link>
                                            </button>

                                        </SidebarMenuItem>
                                    </SidebarMenuSub>
                                ))}
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                </SidebarMenu>
            </div>
        </div>
    )
}

export default Sidebar