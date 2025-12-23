"use client"

import { sidebarConfig } from "@/lib/sidebar";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub } from "../ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import PingtoNew from "./WhatsNew/PingtoNew";
import { JetBrains_Mono } from "next/font/google";
import LinearReveal from "../LinearReveal";

type SidebarProps = {
    onItemClick?: () => void;
};

const LinearRevealHeadingFont = JetBrains_Mono({
    weight: "400",
    subsets: ["latin"]
})
const LinearRevealFont = JetBrains_Mono({
    weight: "300",
    subsets: ["latin"]
})

import { motion } from "framer-motion"

export default function Sidebar({ onItemClick }: SidebarProps) {
    const isNew = (createdAt: string) => {
        const diff = (Date.now() - new Date(createdAt).getTime()) / 86400000;
        return diff <= 15;
    };

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

            <SidebarMenu className="pb-32">
                {sidebarConfig.map((section, i) => (
                    <Collapsible key={i} asChild defaultOpen className="group/collapsible">
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild className="w-64 dark:hover:bg-[#323232]">
                                <SidebarMenuButton className="flex justify-between">
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
                                        <span className={`${LinearRevealHeadingFont.className} text-[17px]`}>
                                            <LinearReveal
                                                text={section.title}
                                            />
                                        </span>
                                    </motion.div>
                                    {/* <motion.div
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
                                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 h-5 w-5" />
                                    </motion.div> */}
                                </SidebarMenuButton>
                            </CollapsibleTrigger>

                            <CollapsibleContent>
                                {section.items.map((item, index) => (
                                    <SidebarMenuSub key={index}>
                                        <SidebarMenuItem className="">
                                            <Link href={section.base + item.slug} onClick={onItemClick}>
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
                                                        delay: 0.3
                                                    }}
                                                >
                                                    <div className="flex items-center space-x-2 p-[8px] hover:bg-muted rounded-md w-56">
                                                        <p className={`${LinearRevealFont.className} text-[15px]`}>
                                                            {item.name}
                                                        </p>
                                                        {isNew(item.createdAt) && <PingtoNew size={7} />}
                                                    </div>
                                                </motion.div>
                                            </Link>
                                        </SidebarMenuItem>
                                    </SidebarMenuSub>
                                ))}
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </div >

    );
}
