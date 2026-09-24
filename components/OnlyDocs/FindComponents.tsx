"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import {
    CommandDialog,
    CommandEmpty,
    CommandInput,
    CommandItem,
    CommandList,
} from "../ui/command"

import { searchableComponents } from "@/lib/searchable-components"

const suggestions = [
    {
        title: "dashboard",
        subMenu_key: "dashboard",
        link: "/docs/dashboard-systems/finance-overview",
    },
    {
        title: "ui blocks",
        subMenu_key: "ui_blocks",
        link: "/docs/ui-blocks/progress-overview-list",
    },
    {
        title: "data tables",
        subMenu_key: "data_tables",
        link: "/docs/ui-blocks/advanced-transaction-log",
    },
    {
        title: "charts",
        subMenu_key: "charts",
        link: "/docs/ui-blocks/performance-trend-chart",
    },
    {
        title: "hero sections",
        subMenu_key: "hero_sections",
        link: "/docs/hero-section/launch",
    },
    {
        title: "motion",
        subMenu_key: "motion",
        link: "/docs/motion/overview",
    },
    {
        title: "text animation",
        subMenu_key: "text_animation",
        link: "/docs/text",
    },
]

function FindComponents({
    className,
}: {
    className?: string
}) {
    const [query, setQuery] = React.useState("")
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((current) => !current)
            }
        }

        document.addEventListener("keydown", down)

        return () => {
            document.removeEventListener("keydown", down)
        }
    }, [])

    const openSearch = () => {
        setOpen(true)
    }

    return (
        <div className={cn("w-full py-4", className)}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 6,
                    filter: "blur(3px)",
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                }}
                transition={{
                    duration: 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.35,
                }}
                className="
                    flex h-[54px] w-full items-center
                    rounded-2xl border border-border
                    bg-background
                    shadow-[0_2px_8px_rgba(0,0,0,0.04)]
                    dark:bg-background
                    dark:shadow-none
                "
            >
                {/* Search */}
                <button
                    type="button"
                    onClick={openSearch}
                    aria-label="Search components"
                    className="
                        flex h-full w-[38%] min-w-[220px]
                        shrink-0 items-center gap-2.5
                        rounded-l-2xl px-4
                        text-left
                        text-muted-foreground
                        transition-colors
                        hover:text-foreground
                    "
                >
                    <SearchIcon
                        size={16}
                        strokeWidth={1.8}
                        className="shrink-0"
                    />

                    <span className="truncate text-[13px]">
                        Find what you need...
                    </span>
                </button>

                {/* Suggestions */}
                <div
                    className="
                        flex h-full min-w-0 flex-1
                        items-center gap-2
                        overflow-x-auto
                        px-3
                        scrollbar-none
                        hide-scrollbar
                    "
                >
                    {suggestions.map((suggestion) => (
                        <Link
                            key={suggestion.subMenu_key}
                            href={suggestion.link}
                            className="
                                shrink-0
                                rounded-full
                                border border-border
                                bg-muted/40
                                px-3 py-1.5
                                text-[11px]
                                font-medium
                                text-muted-foreground
                                whitespace-nowrap
                                transition-all duration-200
                                hover:border-primary/20
                                hover:bg-accent
                                hover:text-foreground
                            "
                        >
                            {suggestion.title}
                        </Link>
                    ))}
                </div>

                {/* Arrow */}
                <button
                    type="button"
                    onClick={openSearch}
                    aria-label="Open search"
                    className="
                        mr-2
                        flex h-8 w-8
                        shrink-0 items-center justify-center
                        rounded-full
                        border border-border
                        bg-background
                        text-muted-foreground
                        transition-all duration-200
                        hover:border-primary/30
                        hover:bg-accent
                        hover:text-foreground
                    "
                >
                    <ArrowRight
                        size={14}
                        strokeWidth={1.8}
                    />
                </button>
            </motion.div>

            {/* Command Search */}
            <CommandDialog
                open={open}
                onOpenChange={(value) => {
                    setOpen(value)

                    if (!value) {
                        setQuery("")
                    }
                }}
            >
                <CommandInput
                    placeholder="Search React Vibe components..."
                    value={query}
                    onValueChange={setQuery}
                />

                <CommandList>
                    <CommandEmpty>
                        No components found.
                    </CommandEmpty>

                    {searchableComponents
                        .filter((component) =>
                            component.name
                                .toLowerCase()
                                .includes(query.toLowerCase())
                        )
                        .map((component) => (
                            <CommandItem
                                key={component.path}
                                asChild
                            >
                                <Link
                                    href={component.path}
                                    onClick={() => {
                                        setOpen(false)
                                        setQuery("")
                                    }}
                                >
                                    <div className="flex flex-col">
                                        <span>
                                            {component.name}
                                        </span>

                                        <span className="text-xs text-muted-foreground">
                                            {component.section}
                                        </span>
                                    </div>
                                </Link>
                            </CommandItem>
                        ))}
                </CommandList>
            </CommandDialog>
        </div>
    )
}

export default FindComponents