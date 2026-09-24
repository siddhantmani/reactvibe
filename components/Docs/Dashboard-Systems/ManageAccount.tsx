"use client"

import { motion } from "framer-motion"
import { Dropdown, DropdownItem, DropdownNestedContainer, DropdownNestedHeading, DropdownNestedItem } from "../Components/MotionDropdown/Dropdown"
import Separator from "../Separator"
import Image from "next/image"
import { Manrope } from "next/font/google"
import { ChevronsUpDown } from "lucide-react"
import { useTheme } from "@/components/ThemeProvider"

const fontBold = Manrope({
    weight: '600',
    subsets: ['latin']
});

function ManageAccount() {
    const { setTheme } = useTheme();
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(2px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{
                once: true,
                amount: 0.2,
                margin: "50px"
            }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2
            }}
            exit={{ opacity: 0, y: -10 }}
            className="relative"
        >
            <Dropdown
                forceDirection="up"
                menuClassName="absolute z-50 bottom-full mb-2 origin-bottom bg-white dark:bg-[#0c0c0c] text-black border-white/10"
                itemClassName="text-black dark:text-white"
                trigger={
                    <div className="flex items-center justify-between w-full dark:bg-[#0c0c0c] gap-10 bg-white border border-black/10 dark:border-white/10 px-2 py-2 rounded-md">
                        <div className="flex items-center gap-4 cursor-pointer z-50">
                            <Image
                                src="https://i.pravatar.cc/100?img=12"
                                alt="profile"
                                width={1000}
                                height={1000}
                                className="w-[33px] h-[33px] rounded-full object-cover"
                            />

                            <div>
                                <h3 className={`${fontBold.className} text-[11px] text-[#111827] dark:text-white whitespace-nowrap flex items-center gap-1 `}>
                                    Alex Johnson
                                </h3>

                                <p className={`${fontBold.className} text-[10px] text-[#119F25] mt-0 `}>
                                    Premium
                                </p>
                            </div>
                        </div>
                        <div>
                            <ChevronsUpDown size={13} />
                        </div>
                    </div>
                }
            >
                <DropdownItem>
                    Profile
                </DropdownItem>

                <DropdownItem>
                    Settings
                </DropdownItem>

                <DropdownItem>
                    Notifications
                </DropdownItem>

                <Separator
                    direction='horizontal'
                    className='bg-black/15 dark:bg-white/15 w-full my-1'
                />

                <DropdownNestedContainer>
                    <DropdownNestedHeading>
                        Theme
                    </DropdownNestedHeading>
                    <DropdownNestedItem onClick={() => setTheme("dark")}>
                        Dark
                    </DropdownNestedItem>
                    <DropdownNestedItem onClick={() => setTheme("light")}>
                        Light
                    </DropdownNestedItem>
                </DropdownNestedContainer>

                <DropdownNestedContainer>
                    <DropdownNestedHeading>
                        Language
                    </DropdownNestedHeading>
                    <DropdownNestedItem>
                        English
                    </DropdownNestedItem>
                    <DropdownNestedItem>
                        Spanish
                    </DropdownNestedItem>
                    <DropdownNestedItem>
                        French
                    </DropdownNestedItem>
                    <DropdownNestedItem>
                        German
                    </DropdownNestedItem>
                </DropdownNestedContainer>

                <Separator
                    direction='horizontal'
                    className='bg-black/15 dark:bg-white/15 w-full my-1'
                />
                <DropdownItem>
                    Billing
                </DropdownItem>

                <DropdownNestedContainer>
                    <DropdownNestedHeading>
                        Invite
                    </DropdownNestedHeading>
                    <DropdownNestedItem>
                        By Email
                    </DropdownNestedItem>
                    <DropdownNestedItem>
                        By Link
                    </DropdownNestedItem>
                    <DropdownNestedItem>
                        By QR Code
                    </DropdownNestedItem>
                </DropdownNestedContainer>

                <DropdownItem>
                    Help & Support
                </DropdownItem>

                <Separator
                    direction='horizontal'
                    className='bg-black/15 dark:bg-white/15 w-full my-1'
                />
                <DropdownItem>
                    Logout
                </DropdownItem>
            </Dropdown>
        </motion.div>
    )
}

export default ManageAccount