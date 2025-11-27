"use client"

import Link from 'next/link'
import React from 'react'
import ToggleDarkMode from '../ToggleDarkMode'
import SearchForComponents from './SearchForComponents'
import MobileSidebar from './MobileSidebar'
import ReactVibeLogo from '../ReactVibeLogo'

import { motion } from "framer-motion"
import { Manrope } from 'next/font/google'
import Separator from './Separator'
import GithubStars from '../GithubStars'

const ReactVibeFontLogo = Manrope({
    weight: "800",
    subsets: ["latin"],
})

function NavbarDashboard() {
    return (
        <div className=' w-full bg-transparent backdrop-blur-md py-3 flex items-center justify-between rounded-md px-1 md:px-5'>
            <div>
                <button className='pb-0' >
                    <Link href="/docs">
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
                                <h1 className={`${ReactVibeFontLogo.className} text-xl whitespace-nowrap`}>React Vibe</h1>
                            </motion.div>
                        </div>
                    </Link>
                </button>
            </div>
            <div className='flex items-center gap-3'>
                <div className=''>
                    <SearchForComponents />
                </div>
                <div className='hidden md:inline-block'>
                    <ToggleDarkMode />
                </div>
                {/* <div className='h-[20px] w-[1px] bg-[#ffffff] opacity-15' /> */}
                <Separator
                    orientation='vertical'
                    className='dark:bg-white/15 bg-black/15'
                />
                <div>
                    <GithubStars />
                </div>
                <div className='lg:hidden'>
                    <MobileSidebar />
                </div>
            </div>
        </div>
    )
}

export default NavbarDashboard