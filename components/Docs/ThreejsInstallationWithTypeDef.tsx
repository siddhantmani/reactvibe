"use client"

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Copy, CopyCheck } from 'lucide-react';
import React, { useRef, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';


import AnimatedText from '@/components/LinearReveal';

const LinearRevealFont = Bricolage_Grotesque({
    weight: "700",
    subsets: ["latin"],
})

import { toast } from 'sonner';
import { Bricolage_Grotesque } from 'next/font/google';

import { motion } from "framer-motion"

function ThreejsInstallationWithTypeDef() {
    const [copied, setCopied] = useState<boolean>(false)
    const ref = useRef<null | HTMLDivElement>(null)

    const copyToClipboardSecondNPM = () => {
        toast.success('Copied!');
        navigator.clipboard.writeText('npm i --save-dev @types/three - npm').then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const copyToClipboardFirstNPM = () => {
        toast.success('Copied!');
        navigator.clipboard.writeText('npm install --save three').then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };
    return (
        <div>
            <AnimatedText
                as={'h2'}
                className={`${LinearRevealFont.className} text-4xl`}
                text='Installation'
            />

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
                <div>
                    <TabGroup className="mt-2 space-y-1">
                        <div className=" z-0 inset-0 flex justify-between ">
                            <TabList className="h-10 inline-flex p-0 w-full max-w-[60px] gap-0">
                                <Tab
                                    className="h-full cursor-pointer w-full text-md border border-dashed border-gray-400 bg-[#eeeeee]  dark:bg-[#171616] rounded-md outline-none"
                                >
                                    npm
                                </Tab>


                            </TabList>

                        </div>
                        <TabPanels
                            className=""
                        >
                            <TabPanel className=" rounded-lg border border-dashed border-gray-400 bg-[#eeeeee]  dark:bg-[#171616] flex justify-between px-5 py-3">
                                <div ref={ref} style={{ width: '100%' }}>
                                    <SyntaxHighlighter
                                        language="javascript"
                                        customStyle={{ backgroundColor: 'transparent', color: "dark:white" }}

                                    >
                                        npm install --save three

                                    </SyntaxHighlighter>
                                </div>
                                <div onClick={copyToClipboardFirstNPM} >
                                    {copied ? <CopyCheck className='h-7 w-7 p-1 border rounded-sm  dark:border-white cursor-pointer' /> : <Copy className='h-7 w-7 p-1 border rounded-sm  dark:border-white cursor-pointer' />}
                                </div>
                            </TabPanel>

                        </TabPanels>
                    </TabGroup>
                    <TabGroup className="mt-2 space-y-1">
                        <div className=" z-0 inset-0 flex justify-between ">
                            <TabList className="h-10 inline-flex p-0 w-full max-w-[60px] gap-0">
                                <Tab
                                    className="h-full cursor-pointer w-full text-md  border border-dashed border-gray-400 bg-[#eeeeee]  dark:bg-[#171616] rounded-md outline-none"
                                >
                                    npm
                                </Tab>


                            </TabList>

                        </div>
                        <TabPanels
                            className=""
                        >
                            <TabPanel className=" rounded-lg border border-dashed border-gray-400 bg-[#eeeeee]  dark:bg-[#171616] flex justify-between px-5 py-3">
                                <div ref={ref} style={{ width: '100%' }}>
                                    <SyntaxHighlighter
                                        language="javascript"
                                        customStyle={{ backgroundColor: 'transparent', color: "dark:white" }}

                                    >
                                        npm i --save-dev @types/three - npm

                                    </SyntaxHighlighter>
                                </div>
                                <div onClick={copyToClipboardSecondNPM} >
                                    {copied ? <CopyCheck className='h-7 w-7 p-1 border rounded-sm  dark:border-white cursor-pointer' /> : <Copy className='h-7 w-7 p-1 border rounded-sm  dark:border-white cursor-pointer' />}
                                </div>
                            </TabPanel>

                        </TabPanels>
                    </TabGroup>
                </div>
            </motion.div>
        </div>
    )
}

export default ThreejsInstallationWithTypeDef