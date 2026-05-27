"use client"
import { motion } from "framer-motion"

import React from 'react'


import { Bell, ChevronDown, Mail, Search } from 'lucide-react'
import { Manrope } from 'next/font/google';
import Image from 'next/image'
import LinearReveal from "@/components/LinearReveal";
import Separator from "@/components/Docs/Separator";
import { Dropdown, DropdownItem, DropdownNestedContainer, DropdownNestedHeading, DropdownNestedItem } from "@/components/Docs/Components/MotionDropdown/Dropdown";

const menuName = Manrope({
    weight: '400', // Specify the font weight if needed  
    subsets: ['latin']
});

const fontBold = Manrope({
    weight: '600', // Specify the font weight if needed  
    subsets: ['latin']
});


function TransactionsHeader() {
    return (
        <div className='flex justify-between'>
            {/* Left Content */}
            <div>
                <LinearReveal
                    as='h1'
                    Text="Dashboard"
                    className={`${fontBold.className} text-[19px] text-[#111827] `}
                />

                <p className={`${fontBold.className} text-[11px] text-[#6b7280] `}>
                    Welcome back, Alex! Here&#39;s your Transactions overview.
                </p>
            </div>

            {/* Right Content */}
            <div className="flex items-center gap-5">

                {/* Search */}
                <div className="rounded-[5px] border border-black/10 bg-white px-5 flex items-center justify-between w-[100%]">
                    <input
                        type="text"
                        placeholder="Search transactions, accounts..."
                        className={`${menuName.className} placeholder:text-black text-[12px] rounded-[2px] px-6 py-2 text-black focus:outline-none w-full max-w-lg`}
                    />

                    <Search
                        className="text-[#111827]"
                        size={14}
                        strokeWidth={2.2}
                    />
                </div>
                <div className='flex items-center gap-3'>

                    {/* Notification */}
                    <button className="relative p-2 rounded-full bg-white flex items-center justify-center shadow-sm border border-black/5">
                        <Bell
                            size={18}
                            className="text-[#111827]"
                            strokeWidth={2.2}
                        />

                        <span className="absolute top-[10px] right-[10px] w-[9px] h-[9px] bg-red-500 rounded-full border-2 border-white" />
                    </button>

                    {/* Mail */}
                    <button className="p-2 rounded-full bg-white flex items-center justify-center shadow-sm border border-black/5">
                        <Mail
                            size={18}
                            className="text-[#111827]"
                            strokeWidth={2.2}
                        />
                    </button>
                </div>

                <div>
                    <Separator
                        direction='vertical'
                        className='bg-black/20'
                    />
                </div>
                {/* Profile */}


                <div className="flex justify-start p-2">
                    <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                        className="flex justify-start p-2"
                    >
                        <Dropdown
                            trigger={
                                <div className="flex items-center gap-4 cursor-pointer z-50">

                                    <Image
                                        src="https://i.pravatar.cc/100?img=12"
                                        alt="profile"
                                        width={1000}
                                        height={1000}
                                        className="w-[33px] h-[33px] rounded-full object-cover"
                                    />

                                    <div>
                                        <h3 className={`${fontBold.className} text-[11px] text-[#111827] whitespace-nowrap flex items-center gap-1 `}>
                                            Alex Johnson <span><ChevronDown size={13} /></span>
                                        </h3>

                                        <p className={`${fontBold.className} text-[10px] text-[#119F25] mt-0 `}>
                                            Premium
                                        </p>
                                    </div>
                                </div>
                            }
                        >

                            <DropdownItem>
                                My Profile
                            </DropdownItem>

                            <DropdownItem>
                                Account Settings
                            </DropdownItem>

                            <DropdownItem>
                                Connected Banks & Cards
                            </DropdownItem>

                            <Separator
                                direction='horizontal'
                                className='dark:bg-white/15 bg-black/15 w-full my-1'
                            />

                            {/* SECURITY */}
                            <DropdownNestedContainer>
                                <DropdownNestedHeading>
                                    Security
                                </DropdownNestedHeading>

                                <DropdownNestedItem>
                                    Two-Factor Authentication
                                </DropdownNestedItem>

                                <DropdownNestedItem>
                                    Login Activity
                                </DropdownNestedItem>

                                <DropdownNestedItem>
                                    Device Management
                                </DropdownNestedItem>

                                <DropdownNestedItem>
                                    Change Password
                                </DropdownNestedItem>
                            </DropdownNestedContainer>

                            {/* FINANCIAL */}
                            <DropdownNestedContainer>
                                <DropdownNestedHeading>
                                    Financial Preferences
                                </DropdownNestedHeading>

                                <DropdownNestedItem>
                                    Default Currency
                                </DropdownNestedItem>

                                <DropdownNestedItem>
                                    Budget Alerts
                                </DropdownNestedItem>

                                <DropdownNestedItem>
                                    Monthly Reports
                                </DropdownNestedItem>

                                <DropdownNestedItem>
                                    Spending Categories
                                </DropdownNestedItem>
                            </DropdownNestedContainer>

                            <Separator
                                direction='horizontal'
                                className='dark:bg-white/15 bg-black/15 w-full my-1'
                            />

                            {/* BILLING */}
                            <DropdownItem>
                                Subscription & Billing
                            </DropdownItem>

                            <DropdownItem>
                                Payment Methods
                            </DropdownItem>

                            <DropdownItem>
                                Transaction History
                            </DropdownItem>

                            <DropdownItem>
                                Tax Documents
                            </DropdownItem>

                            <Separator
                                direction='horizontal'
                                className='dark:bg-white/15 bg-black/15 w-full my-1'
                            />

                            {/* APP */}
                            <DropdownNestedContainer>
                                <DropdownNestedHeading>
                                    Appearance
                                </DropdownNestedHeading>

                                <DropdownNestedItem>
                                    Light Mode
                                </DropdownNestedItem>

                                <DropdownNestedItem>
                                    Dark Mode
                                </DropdownNestedItem>

                                <DropdownNestedItem>
                                    System Theme
                                </DropdownNestedItem>
                            </DropdownNestedContainer>

                            <DropdownItem>
                                Notifications
                            </DropdownItem>

                            <DropdownItem>
                                Help Center
                            </DropdownItem>

                            <Separator
                                direction='horizontal'
                                className='dark:bg-white/15 bg-black/15 w-full my-1'
                            />

                            <DropdownItem>
                                Sign Out
                            </DropdownItem>
                        </Dropdown>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default TransactionsHeader