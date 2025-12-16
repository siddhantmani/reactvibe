"use client"

import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
    ReactNode,
} from "react"

type InteractionMode = "keyboard" | "mouse" | "none"

interface DropdownContextType {
    open: boolean
    setOpen: (v: boolean) => void
    activeIndex: number
    setActiveIndex: (v: number) => void
    registerItem: (index: number, el: HTMLLIElement | null) => void
    interaction: InteractionMode
    setInteraction: (v: InteractionMode) => void
}

const DropdownContext = createContext<DropdownContextType | null>(null)

const useDropdown = () => {
    const ctx = useContext(DropdownContext)
    if (!ctx) throw new Error("Dropdown must be inside <Dropdown />")
    return ctx
}

interface DropdownProps {
    triggerLabel: string
    children: ReactNode
}

export function Dropdown({ triggerLabel, children }: DropdownProps) {
    const [open, setOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(-1)
    const [interaction, setInteraction] =
        useState<InteractionMode>("none")
    const [openUp, setOpenUp] = useState(false)

    const buttonRef = useRef<HTMLButtonElement>(null)
    const itemsRef = useRef<HTMLLIElement[]>([])
    const containerRef = useRef<HTMLDivElement>(null)

    const registerItem = (index: number, el: HTMLLIElement | null) => {
        if (el) itemsRef.current[index] = el
    }

    /* Outside click */
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (!containerRef.current?.contains(e.target as Node)) {
                setOpen(false)
                setInteraction("none")
                setActiveIndex(-1)
            }
        }
        if (open) document.addEventListener("mousedown", handler)
        return () => document.removeEventListener("mousedown", handler)
    }, [open])

    /* Decide up/down */
    useEffect(() => {
        if (!open || !containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        const spaceBelow = window.innerHeight - rect.bottom
        const spaceAbove = rect.top

        const EST_MENU_HEIGHT = 240
        const shouldOpenUp = spaceBelow < EST_MENU_HEIGHT && spaceAbove > spaceBelow
        if (openUp !== shouldOpenUp) {
            setOpenUp(shouldOpenUp)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open])

    /* Focus first item when opened */
    useEffect(() => {
        if (!open) return
        setActiveIndex(0)
        setInteraction("keyboard")
        requestAnimationFrame(() => {
            itemsRef.current[0]?.focus()
        })
    }, [open])

    const handleKeyDown = (e: React.KeyboardEvent) => {
        const items = itemsRef.current.filter(Boolean)
        if (!items.length) return

        setInteraction("keyboard")

        if (e.key === "ArrowDown") {
            e.preventDefault()
            setActiveIndex(i => {
                const next = i === -1 ? 0 : (i + 1) % items.length
                items[next]?.focus()
                return next
            })
        }

        if (e.key === "ArrowUp") {
            e.preventDefault()
            setActiveIndex(i => {
                const prev = i === -1 ? items.length - 1 : (i === 0 ? items.length - 1 : i - 1)
                items[prev]?.focus()
                return prev
            })
        }

        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            if (activeIndex >= 0) {
                items[activeIndex]?.click()
            }
        }

        if (e.key === "Escape") {
            setOpen(false)
            setInteraction("none")
            setActiveIndex(-1)
            buttonRef.current?.focus()
        }
    }

    const handleMenuMouseEnter = () => {
        setInteraction("mouse")
        setActiveIndex(-1) // Clear keyboard selection when mouse enters menu
    }

    return (
        <DropdownContext.Provider
            value={{
                open,
                setOpen,
                activeIndex,
                setActiveIndex,
                registerItem,
                interaction,
                setInteraction,
            }}
        >
            <div ref={containerRef} className="relative w-48">
                <button
                    ref={buttonRef}
                    onClick={() => setOpen(o => !o)}
                    className="rounded-md cursor-pointer border px-3 py-2 text-left text-sm"
                >
                    {triggerLabel}
                </button>

                {open && (
                    <ul
                        role="menu"
                        tabIndex={-1}
                        onKeyDown={handleKeyDown}
                        onMouseEnter={handleMenuMouseEnter}
                        className={`
              absolute w-full rounded-md border bg-white dark:bg-[#040404] shadow-lg p-[3px] z-50
              ${openUp ? "bottom-full mb-2" : "top-full mt-2"}
            `}
                    >
                        {React.Children.map(children, (child, index) =>
                            React.isValidElement(child)
                                ? React.cloneElement(
                                    child as React.ReactElement<{ __index?: number }>,
                                    { __index: index }
                                )
                                : child
                        )}
                    </ul>
                )}
            </div>
        </DropdownContext.Provider>
    )
}

interface DropdownItemProps {
    children: ReactNode
    onClick?: () => void
    __index?: number
}

export function DropdownItem({
    children,
    onClick,
    __index = 0,
}: DropdownItemProps) {
    const {
        setOpen,
        activeIndex,
        setActiveIndex,
        registerItem,
        interaction,
        setInteraction,
    } = useDropdown()

    const ref = useRef<HTMLLIElement>(null)

    useEffect(() => {
        registerItem(__index, ref.current)
    }, [__index, registerItem])

    const handleMouseEnter = () => {
        if (interaction === "keyboard") {
            // When mouse enters after keyboard interaction, switch to mouse mode
            setInteraction("mouse")
            setActiveIndex(-1)
        }
    }

    return (
        <li
            ref={ref}
            role="menuitem"
            tabIndex={-1}
            onMouseEnter={handleMouseEnter}
            onFocus={() => {
                if (interaction === "keyboard") {
                    setActiveIndex(__index)
                }
            }}
            onClick={() => {
                onClick?.()
                setOpen(false)
                setInteraction("none")
                setActiveIndex(-1)
            }}
            className={`
        cursor-pointer px-2 py-[5px] rounded text-[13px] outline-none
        ${interaction === "keyboard" && activeIndex === __index
                    ? "bg-[#f4f4f4] dark:bg-[#1c1b1b]"
                    : ""
                }
        hover:bg-[#f4f4f4] dark:hover:bg-[#1c1b1b] transition-colors
      `}
        >
            {children}
        </li>
    )
}

interface DropdownNestedContainerProps {
    children: ReactNode
    __index?: number
}

export function DropdownNestedContainer({
    children,
    __index = 0,
}: DropdownNestedContainerProps) {
    const {
        activeIndex,
        setActiveIndex,
        registerItem,
        interaction,
        setInteraction,
    } = useDropdown()

    const [open, setOpen] = useState(false)
    const [focusFirst, setFocusFirst] = useState(false)
    const [openLeft, setOpenLeft] = useState(false)

    const ref = useRef<HTMLLIElement>(null)

    useEffect(() => {
        registerItem(__index, ref.current)
    }, [__index, registerItem])

    useEffect(() => {
        const shouldBeOpen = activeIndex === __index && interaction === "keyboard"
        if (open !== shouldBeOpen) {
            setOpen(shouldBeOpen)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIndex, __index, interaction])

    /* Decide left/right */
    useEffect(() => {
        if (!open || !ref.current) return

        const rect = ref.current.getBoundingClientRect()
        const spaceRight = window.innerWidth - rect.right
        const spaceLeft = rect.left

        const SUBMENU_WIDTH = 160
        setOpenLeft(spaceRight < SUBMENU_WIDTH && spaceLeft > spaceRight)
    }, [open])

    const heading = React.Children.toArray(children).find(
        c => React.isValidElement(c) && c.type === DropdownNestedHeading
    )

    const items = React.Children.toArray(children).filter(
        c => React.isValidElement(c) && c.type === DropdownNestedItem
    )

    const handleMouseEnter = () => {
        setInteraction("mouse")
        setActiveIndex(-1)
        setOpen(true)
    }

    const handleMouseLeave = () => {
        if (interaction === "mouse") {
            setOpen(false)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === "ArrowRight") {
            e.preventDefault()
            setInteraction("keyboard")
            setOpen(true)
            setFocusFirst(true)
        }
    }

    return (
        <li
            ref={ref}
            role="menuitem"
            tabIndex={-1}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onKeyDown={handleKeyDown}
            onFocus={() => {
                if (interaction === "keyboard") {
                    setActiveIndex(__index)
                }
            }}
            className={`
        relative outline-none
        ${interaction === "keyboard" && activeIndex === __index
                    ? "bg-[#f4f4f4] dark:bg-[#1c1b1b] rounded"
                    : ""
                }
        hover:bg-[#f4f4f4] dark:hover:bg-[#1c1b1b] rounded transition-colors
      `}
        >
            {heading}

            {open && (
                <ul
                    className={`
            absolute top-0 w-40 rounded-md border bg-white dark:bg-[#040404] shadow-lg p-[3px] z-50
            ${openLeft ? "right-full mr-0" : "left-full ml-0"}
          `}
                >
                    {items.map((item, i) =>
                        React.isValidElement(item)
                            ? React.cloneElement(
                                item as React.ReactElement<{ __autoFocus?: boolean }>,
                                { __autoFocus: focusFirst && i === 0 }
                            )
                            : item
                    )}
                </ul>
            )}
        </li>
    )
}


export function DropdownNestedHeading({ children }: { children: ReactNode }) {
    return (
        <div className="px-2 py-[5px] text-[13px] dark:hover:bg-[#1c1b1b] rounded flex items-center justify-between">
            {children}
            <span>›</span>
        </div>
    )
}

interface DropdownNestedItemProps {
    children: ReactNode
    onClick?: () => void
    __autoFocus?: boolean
}

export function DropdownNestedItem({
    children,
    onClick,
    __autoFocus,
}: DropdownNestedItemProps) {
    const { setOpen } = useDropdown()
    const ref = useRef<HTMLLIElement>(null)

    useEffect(() => {
        if (__autoFocus) {
            ref.current?.focus()
        }
    }, [__autoFocus])

    return (
        <li
            ref={ref}
            role="menuitem"
            tabIndex={-1}
            className="cursor-pointer px-2 py-[5px] rounded text-[13px] outline-none hover:bg-[#f4f4f4] focus:bg-[#f4f4f4] dark:bg-[#040404] dark:hover:bg-[#1c1b1b] transition-colors"
            onClick={() => {
                onClick?.()
                setOpen(false)
            }}
        >
            {children}
        </li>
    )
}