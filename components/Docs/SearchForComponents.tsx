"use client"

import * as React from "react"

import {
    CommandDialog,
    CommandEmpty,
    CommandInput,
    CommandItem,
    CommandList
} from "@/components/ui/command"

import { searchableComponents } from "@/lib/searchable-components";


import { ImWindows8 } from "react-icons/im";
import Link from "next/link";
import { SearchIcon } from "lucide-react";

export default function SearchForComponents() {
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
        <>
            <div className="text-muted-foreground text-sm">
                <div className="hidden md:inline-block">
                    <div onClick={handleClicked} className=' p-[3px] rounded-md bg-[#ececec] dark:bg-gradient-to-r from-[#2c2b2b] from-[33%] to-[#222121] to-47% flex items-center gap-3 w-[220px] px-3'>
                        <span className="text-xl dark:text-white text-black flex items-center gap-1"><ImWindows8 className="text-sm text-black dark:text-white" /> J</span>
                        <input
                            type="text"
                            placeholder='Search docs...'
                            className='dark:text-white text-black placeholder:text-black outline-none dark:placeholder:text-white text-sm'
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div onClick={handleClicked} className='md:hidden mt-[6px]'>
                    <SearchIcon className='h-5 w-5' />
                </div>
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
        </>
    )
}
