"use client"

import { Menu } from 'lucide-react'
import React, { useState } from 'react'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import Sidebar from "@/components/Docs/Sidebar";
import { SidebarProvider } from '../ui/sidebar';
import ReactVibeLogo from '../ReactVibeLogo';

import { motion } from "framer-motion"
import { Figtree } from 'next/font/google'
import ToggleDarkMode from '../ToggleDarkMode';

const ReactVibeFontLogo = Figtree({
    weight: "800",
    subsets: ["latin"],
})

function MobileSidebar() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger>
                    <div className='mt-[7px]'>
                        <Menu className='h-5 w-5' />
                    </div>
                </SheetTrigger>
                <SheetContent className='w-full'>
                    <SheetTitle />
                    <SheetDescription />
                    <div className='flex items-center gap-3'>
                        <div className='scale-[52%]'>
                            <ReactVibeLogo />
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
                                delay: 0.4
                            }}

                        >
                            <h1 className={`${ReactVibeFontLogo.className} text-xl`}>React Vibe</h1>
                        </motion.div>
                    </div>
                    <div className='px-3'>
                        <ToggleDarkMode />
                    </div>
                    <SidebarProvider className="w-full p-3">
                        <Sidebar onItemClick={() => setOpen(false)} />
                    </SidebarProvider>
                </SheetContent>
            </Sheet>
        </div >
    )
}

export default MobileSidebar