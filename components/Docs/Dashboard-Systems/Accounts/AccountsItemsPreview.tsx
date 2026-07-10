"use client"

import { motion } from "framer-motion"
import { Code, LockKeyhole } from 'lucide-react';
import RefrashContent from '../../RefrashContent';
import AccountsPreview from './AccountsPreview';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Banner from '@/components/Banner';

function AccountsItemsPreview() {

    return (
        <div className='space-y-1'>

            <div className="z-0 inset-0 flex justify-between">
                <motion.div
                    initial={{ opacity: 0, filter: "blur(2px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0 }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                        margin: "50px"
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94], 
                        delay: 0.3
                    }}
                    className="h-10 flex items-center justify-end p-1 w-full gap-1">
                    <div className='flex items-center gap-2 max-w-[130px] '>
                        <Link href="/docs/templates/taskforge">
                            <div>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <span className="h-full gap-2 flex items-center px-2 py-2 cursor-pointer w-full text-sm border-gray-400 bg-[#eeeeee] dark:bg-[#171616] rounded-md outline-none">
                                            <Code className="h-4 w-4" />
                                            Source
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent className='flex items-center gap-1'>
                                        <LockKeyhole size={12} />
                                        <p>Source code available in TaskForge</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <RefrashContent />
                    </div>
                </motion.div>
            </div>
            <div>
                <Banner />
            </div>
            <div
                className="w-full bg-white border rounded-3xl"
            >
                <div className="text-black z-40 w-full h-full scale-[99%]">
                    <AccountsPreview />
                </div>
            </div>


        </div>
    )
}

export default AccountsItemsPreview