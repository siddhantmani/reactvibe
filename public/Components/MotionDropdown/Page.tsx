"use client"

import { motion } from "framer-motion"
import { Dropdown, DropdownItem, DropdownNestedContainer, DropdownNestedHeading, DropdownNestedItem } from './Dropdown'
import Separator from '../Separator/Separator'

function Page() {
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
            className="flex justify-start p-2"
        >
            <Dropdown
                menuClassName="bg-white text-black border-white/10"
                itemClassName="text-black"
                trigger={
                    <div className="flex items-center gap-4 cursor-pointer z-50 border px-2 py-1 rounded-md">
                        <h1>Menu</h1>
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
                    className='bg-black/15 w-full my-1'
                />

                <DropdownNestedContainer>
                    <DropdownNestedHeading>
                        Theme
                    </DropdownNestedHeading>
                    <DropdownNestedItem>
                        Dark
                    </DropdownNestedItem>
                    <DropdownNestedItem>
                        Light
                    </DropdownNestedItem>
                    <DropdownNestedItem>
                        System
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
                    className='bg-black/15 w-full my-1'
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
                    className='bg-black/15 w-full my-1'
                />

                <DropdownItem>
                    Logout
                </DropdownItem>
            </Dropdown>
        </motion.div>
    )
}

export default Page