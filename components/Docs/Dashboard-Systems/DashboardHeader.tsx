"use client"
import { motion } from "framer-motion"

import React from 'react'

import { Bell, ChevronDown, Mail, Search } from 'lucide-react'
import { Manrope } from 'next/font/google';
import Image from 'next/image'
import LinearReveal from "@/components/LinearReveal";
import Separator from "@/components/Docs/Separator";
import { Dropdown, DropdownItem, DropdownNestedContainer, DropdownNestedHeading, DropdownNestedItem } from "@/components/Docs/Components/MotionDropdown/Dropdown";
import { usePathname } from "next/navigation";
import { getDashboard } from "@/lib/dashboards";


const menuName = Manrope({
    weight: '400',
    subsets: ['latin']
});

const fontBold = Manrope({
    weight: '600',
    subsets: ['latin']
});


function DashboardHeader() {
    const pathname = usePathname()
    const dashboard = getDashboard(pathname)
    return (
        <div className="relative flex items-center justify-end @md:justify-between gap-4">

            {/* Title: hidden on mobile, visible from md */}
            <div className="hidden @md:block min-w-0">
                <LinearReveal
                    key={dashboard.href}
                    as='h1'
                    Text={dashboard.name}
                    className={`${fontBold.className} text-[15px] @lg:text-[18px] text-[#111827] dark:text-white whitespace-nowrap`}
                />

                <p className={`${fontBold.className} text-[10px] @lg:text-[12px] text-[#6b7280] truncate`}>
                    {dashboard.subtitle}
                </p>
            </div>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-2 @lg:gap-4">

                <div className="flex items-center gap-2 @lg:gap-4">

                    {/* Search: icon-only below lg, full input from lg */}
                    <div className="flex items-center justify-between rounded-[10px] border border-black/10 dark:border-white/10 bg-white dark:bg-[#0a0a0a] px-2 py-2 @lg:py-0 @lg:w-[200px] @xl:w-[240px]">

                        <input
                            type="text"
                            placeholder="Search here..."
                            className={`${menuName.className} hidden @lg:inline-block w-full min-w-0 rounded-[2px] px-2 py-2 text-[12px] text-black dark:text-white placeholder:text-black dark:placeholder:text-white/70 focus:outline-none`}
                        />

                        <Search
                            className="shrink-0 text-[#111827] dark:text-white"
                            size={12}
                            strokeWidth={2.2}
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="relative p-2 rounded-full bg-white dark:bg-[#0a0a0a] flex items-center justify-center border border-black/12 dark:border-white/8">
                            <Bell
                                size={15}
                                className="text-[#111827] dark:text-white"
                                strokeWidth={2.2}
                            />

                            <span className="absolute top-[10px] right-[10px] w-[9px] h-[9px] bg-red-500 rounded-full border-2 border-white" />
                        </button>

                        <button className="p-2 rounded-full bg-white dark:bg-[#0a0a0a] flex items-center justify-center border border-black/12 dark:border-white/8">
                            <Mail
                                size={15}
                                className="text-[#111827] dark:text-white"
                                strokeWidth={2.2}
                            />
                        </button>
                    </div>

                    <Separator
                        direction='vertical'
                        className='bg-black/20 dark:bg-white/20'
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                    className="flex justify-start p-2"
                >
                    <Dropdown
                        menuClassName="bg-white text-black dark:bg-[#0c0c0c] border-white/10"
                        itemClassName="text-black dark:text-white"
                        trigger={
                            <div className="relative z-50 flex items-center gap-2 cursor-pointer">

                                <Image
                                    src="https://i.pravatar.cc/100?img=12"
                                    alt="profile"
                                    width={1000}
                                    height={1000}
                                    className="w-[33px] h-[33px] shrink-0 rounded-full object-cover"
                                />

                                <div>
                                    <h3 className={`${fontBold.className} text-[11px] text-[#111827] dark:text-white whitespace-nowrap flex items-center gap-1`}>
                                        Alex Johnson <span><ChevronDown size={13} /></span>
                                    </h3>

                                    <p className={`${fontBold.className} text-[10px] text-[#119F25] mt-0`}>
                                        Premium
                                    </p>
                                </div>
                            </div>
                        }
                    >
                        <DropdownItem>My Profile</DropdownItem>
                        <DropdownItem>Account Settings</DropdownItem>
                        <DropdownItem>Connected Banks & Cards</DropdownItem>

                        <Separator direction='horizontal' className='dark:bg-white/15 bg-black/15 w-full my-1' />

                        <DropdownNestedContainer>
                            <DropdownNestedHeading>Security</DropdownNestedHeading>
                            <DropdownNestedItem>Two-Factor Authentication</DropdownNestedItem>
                            <DropdownNestedItem>Login Activity</DropdownNestedItem>
                            <DropdownNestedItem>Device Management</DropdownNestedItem>
                            <DropdownNestedItem>Change Password</DropdownNestedItem>
                        </DropdownNestedContainer>

                        {/* FINANCIAL */}
                        <DropdownNestedContainer>
                            <DropdownNestedHeading>Financial Preferences</DropdownNestedHeading>
                            <DropdownNestedItem>Default Currency</DropdownNestedItem>
                            <DropdownNestedItem>Budget Alerts</DropdownNestedItem>
                            <DropdownNestedItem>Monthly Reports</DropdownNestedItem>
                            <DropdownNestedItem>Spending Categories</DropdownNestedItem>
                        </DropdownNestedContainer>

                        <Separator direction='horizontal' className='dark:bg-white/15 bg-black/15 w-full my-1' />

                        {/* BILLING */}
                        <DropdownItem>Subscription & Billing</DropdownItem>
                        <DropdownItem>Payment Methods</DropdownItem>
                        <DropdownItem>Transaction History</DropdownItem>
                        <DropdownItem>Tax Documents</DropdownItem>

                        <Separator direction='horizontal' className='dark:bg-white/15 bg-black/15 w-full my-1' />

                        {/* APP */}
                        <DropdownNestedContainer>
                            <DropdownNestedHeading>Appearance</DropdownNestedHeading>
                            <DropdownNestedItem>Light Mode</DropdownNestedItem>
                            <DropdownNestedItem>Dark Mode</DropdownNestedItem>
                            <DropdownNestedItem>System Theme</DropdownNestedItem>
                        </DropdownNestedContainer>

                        <DropdownItem>Notifications</DropdownItem>
                        <DropdownItem>Help Center</DropdownItem>

                        <Separator direction='horizontal' className='dark:bg-white/15 bg-black/15 w-full my-1' />

                        <DropdownItem>Sign Out</DropdownItem>
                    </Dropdown>
                </motion.div>
            </div>
        </div>
    )
}

export default DashboardHeader