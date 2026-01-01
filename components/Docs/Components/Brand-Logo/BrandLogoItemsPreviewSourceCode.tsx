"use client"

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Copy, CopyCheck } from 'lucide-react';
import React, { useRef, useState } from 'react'
import FramerMotionGlobalInstalation from '../../FramerMotionGlobalInstalation'
import Separator from '../../Separator'
import { motion } from "framer-motion"
import BrandLogoOpenCode from './BrandLogoOpenCode'
import { toast } from 'sonner';
import SyntaxHighlighter from 'react-syntax-highlighter';

function BrandLogoItemsPreviewSourceCode() {
    const ref = useRef<null | HTMLDivElement>(null)
    const [copied, setCopied] = useState<boolean>(false)

    const copyToClipboardFramerMotion = () => {
        toast.success('Copied!');
        navigator.clipboard.writeText('npm i react-icons').then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div>
            <FramerMotionGlobalInstalation />

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
                <div className='space-y-3'>
                    {/* react icons*/}
                    <TabGroup className="mt-2 space-y-1">
                        <div className="z-0 inset-0 flex justify-between ">
                            <TabList className="inline-flex p-0 w-full max-w-[60px]">
                                <Tab
                                    className="h-full cursor-pointer w-full text-md border border-dashed border-gray-400 bg-[#eeeeee] dark:bg-[#171616] rounded-md outline-none p-1"
                                >
                                    npm
                                </Tab>
                            </TabList>
                        </div>


                        <TabPanels>
                            <TabPanel className=" rounded-lg border border-dashed border-gray-400 bg-[#eeeeee]  dark:bg-[#171616] flex justify-between px-5 py-3">
                                <div ref={ref} style={{ width: '100%' }}>
                                    <SyntaxHighlighter
                                        language="javascript"
                                        customStyle={{ backgroundColor: 'transparent', color: "dark:white" }}

                                    >
                                        npm i react-icons
                                    </SyntaxHighlighter>
                                </div>
                                <div onClick={copyToClipboardFramerMotion} >
                                    {copied ? <CopyCheck className='h-7 w-7 p-1 border rounded-sm  dark:border-white cursor-pointer' /> : <Copy className='h-7 w-7 p-1 border rounded-sm  dark:border-white cursor-pointer' />}
                                </div>
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </div>
            </motion.div>
            <div className='py-5'>
                <Separator className='' />
            </div>
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
                    delay: 0.9
                }}

            >
                <div>
                    <BrandLogoOpenCode />
                </div>
            </motion.div>
        </div>
    )
}

export default BrandLogoItemsPreviewSourceCode