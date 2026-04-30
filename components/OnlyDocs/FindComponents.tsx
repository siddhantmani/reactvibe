"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link";

import { motion } from "framer-motion"
import SearchForComponents from "../Docs/SearchForComponents";
import { SearchIcon } from "lucide-react";
import { CommandDialog, CommandEmpty, CommandInput, CommandItem, CommandList } from "../ui/command";
import { searchableComponents } from "@/lib/searchable-components";

const suggestions = [
    { title: 'react animation library', subMenu_key: 'react_animation_library', link: '/docs/introduction' },
    { title: 'framer motion components', subMenu_key: 'framer_motion_components', link: '/docs/explore-components' },
    { title: 'copy paste react components', subMenu_key: 'copy_paste_react_components', link: '#howitworks' },
    { title: 'react ui components', subMenu_key: 'react_ui_components', link: '/docs/explore-components' },
    { title: 'tailwind react components', subMenu_key: 'tailwind_react_components', link: '/docs/explore-components' },
    { title: 'animated react components', subMenu_key: 'animated_react_components', link: '/docs/explore-components' },
    { title: 'react ui blocks', subMenu_key: 'react_ui_blocks', link: '/docs/explore-components' },
];

function FindComponents({ className }: { className?: string }) {
    const [query, setQuery] = React.useState("");
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const handleClicked = () => {
        setOpen(true);
    }


    return (
        <div className={cn("w-full py-4", className)}>
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
                    delay: 0.5
                }}
                className={cn(
                    "flex items-center gap-3 w-full rounded-full px-5 py-3 border transition-all",

                    "bg-background border-border",

                    "dark:bg-gradient-to-r dark:from-[#0b0b0b] dark:from-[33%] dark:to-[#131212] dark:border-[#2a2040]"
                )}
            >
                {/* Label */}
                <span className="text-[13px] text-muted-foreground whitespace-nowrap flex-shrink-0">
                    Find what&#39;s you need:
                </span>

                {/* Suggestions */}
                <div className="flex items-center gap-2 flex-1 overflow-x-auto scrollbar-none hide-scrollbar">
                    {suggestions.map((s) => (
                        <Link href={s.link} key={s.subMenu_key}>
                            <button
                                className={cn(
                                    "flex-shrink-0 px-3 py-1 rounded-full text-[12px] border transition-all whitespace-nowrap",

                                    // light
                                    "bg-muted text-muted-foreground border-border hover:bg-accent hover:text-foreground",

                                    // dark override (your style)
                                    "dark:bg-gradient-to-r dark:from-[#0b0b0b] dark:from-[33%] dark:to-[#131212]",
                                    "dark:text-[#a89cc8] dark:border-[#2e2550]",
                                    "dark:hover:border-[#7c3aed]/60 dark:hover:text-[#c084fc] dark:hover:bg-[#261d42]"
                                )}
                            >
                                {s.title}
                            </button>
                        </Link>
                    ))}


                </div>

                {/* Search button */}
                <div onClick={handleClicked} className=''>
                    <SearchIcon size={14} />
                </div>

                <CommandDialog open={open} onOpenChange={setOpen}>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        {searchableComponents
                            .filter((c) =>
                                c.name.toLowerCase().includes(query.toLowerCase())
                            )
                            .map((c) => (
                                <CommandItem key={c.path} asChild>
                                    <Link href={c.path} onClick={() => setOpen(false)}>
                                        <div className="flex flex-col">
                                            <span>{c.name}</span>
                                            <span className="text-xs text-muted-foreground">
                                                {c.section}
                                            </span>
                                        </div>
                                    </Link>
                                </CommandItem>
                            ))}
                    </CommandList>
                </CommandDialog>
            </motion.div>
        </div>
    )
}

export default FindComponents