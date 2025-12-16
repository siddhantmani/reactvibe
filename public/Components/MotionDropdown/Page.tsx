"use client"

import React from 'react'

import { motion } from "framer-motion"
import { Dropdown, DropdownItem, DropdownNestedContainer, DropdownNestedHeading, DropdownNestedItem } from './Dropdown'
import Separator from '../Separator/Separator'

function Page() {
    return (
        <div className="flex justify-start p-2">
            <motion.div
                initial={{ opacity: 0, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{
                    once: true,
                    amount: 0.2,
                    margin: "50px"
                }}
                transition={{
                    duration: 1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.2
                }}
            >
                <Dropdown triggerLabel="Menu">
                    <DropdownItem>
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                            viewport={{ once: true, amount: 0.2, margin: "50px" }}
                            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                        >
                            Profile
                        </motion.div>
                    </DropdownItem>

                    <DropdownItem>
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                            viewport={{ once: true, amount: 0.2, margin: "50px" }}
                            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                        >
                            Settings
                        </motion.div>
                    </DropdownItem>

                    <DropdownItem>
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                            viewport={{ once: true, amount: 0.2, margin: "50px" }}
                            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                        >
                            Notifications
                        </motion.div>
                    </DropdownItem>

                    <Separator
                        direction='horizontal'
                        className='dark:bg-white/15 bg-black/15 w-full my-1'
                    />

                    <DropdownNestedContainer>
                        <DropdownNestedHeading>
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, amount: 0.2, margin: "50px" }}
                                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                            >
                                Theme
                            </motion.div>
                        </DropdownNestedHeading>
                        <DropdownNestedItem>
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, amount: 0.2, margin: "50px" }}
                                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                            >
                                Dark
                            </motion.div>
                        </DropdownNestedItem>
                        <DropdownNestedItem>
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, amount: 0.2, margin: "50px" }}
                                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                            >
                                Light
                            </motion.div>
                        </DropdownNestedItem>
                        <DropdownNestedItem>
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, amount: 0.2, margin: "50px" }}
                                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                            >
                                System
                            </motion.div>
                        </DropdownNestedItem>
                    </DropdownNestedContainer>

                    <DropdownNestedContainer>
                        <DropdownNestedHeading>
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, amount: 0.2, margin: "50px" }}
                                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                            >
                                Language
                            </motion.div>
                        </DropdownNestedHeading>
                        <DropdownNestedItem>
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, amount: 0.2, margin: "50px" }}
                                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                            >
                                English
                            </motion.div>
                        </DropdownNestedItem>
                        <DropdownNestedItem>
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, amount: 0.2, margin: "50px" }}
                                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                            >
                                Spanish
                            </motion.div>
                        </DropdownNestedItem>
                        <DropdownNestedItem>
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, amount: 0.2, margin: "50px" }}
                                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                            >
                                French
                            </motion.div>
                        </DropdownNestedItem>
                        <DropdownNestedItem>
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, amount: 0.2, margin: "50px" }}
                                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                            >
                                German
                            </motion.div>
                        </DropdownNestedItem>
                    </DropdownNestedContainer>

                    <Separator
                        direction='horizontal'
                        className='dark:bg-white/15 bg-black/15 w-full my-1'
                    />

                    <DropdownItem>
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                            viewport={{ once: true, amount: 0.2, margin: "50px" }}
                            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                        >
                            Billing
                        </motion.div>
                    </DropdownItem>

                    <DropdownNestedContainer>
                        <DropdownNestedHeading>
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, amount: 0.2, margin: "50px" }}
                                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                            >
                                Invite
                            </motion.div>
                        </DropdownNestedHeading>
                        <DropdownNestedItem>
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, amount: 0.2, margin: "50px" }}
                                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                            >
                                By Email
                            </motion.div>
                        </DropdownNestedItem>
                        <DropdownNestedItem>
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, amount: 0.2, margin: "50px" }}
                                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                            >
                                By Link
                            </motion.div>
                        </DropdownNestedItem>
                        <DropdownNestedItem>
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, amount: 0.2, margin: "50px" }}
                                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                            >
                                By QR Code
                            </motion.div>
                        </DropdownNestedItem>
                    </DropdownNestedContainer>

                    <DropdownItem>
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                            viewport={{ once: true, amount: 0.2, margin: "50px" }}
                            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                        >
                            Help & Support
                        </motion.div>
                    </DropdownItem>

                    <Separator
                        direction='horizontal'
                        className='dark:bg-white/15 bg-black/15 w-full my-1'
                    />

                    <DropdownItem>
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                            viewport={{ once: true, amount: 0.2, margin: "50px" }}
                            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                        >
                            Logout
                        </motion.div>
                    </DropdownItem>
                </Dropdown>
            </motion.div>
        </div>
    )
}

export default Page