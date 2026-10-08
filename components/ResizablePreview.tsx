"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GripVertical } from "lucide-react";

import { PREVIEW_BREAKPOINTS, PREVIEW_WIDTHS } from "./previewBreakpoints";

// Re-export so any existing `import { PREVIEW_WIDTHS } from "./ResizablePreview"` keeps working
export { PREVIEW_WIDTHS };

interface ResizablePreviewProps {
    children: React.ReactNode;
    width: number;
    onWidthChange: (width: number) => void;
    minWidth?: number;
    maxWidth?: number;
    className?: string;
}

const SPRING = { type: "spring", stiffness: 220, damping: 28 } as const;

/**
 * Returns the largest breakpoint whose min-width the current width meets,
 * mirroring how Tailwind's min-width variants (and @ container variants) apply.
 */
function breakpointLabel(w: number) {
    const active = (
        Object.entries(PREVIEW_BREAKPOINTS) as [string, number][]
    )
        .filter(([, min]) => w >= min)
        .pop();

    return active ? active[0] : "base";
}

export default function ResizablePreview({
    children,
    width,
    onWidthChange,
    minWidth = 320,
    maxWidth = 1440,
    className = "",
}: ResizablePreviewProps) {
    // The width the container actually renders at (drives container queries)
    const [liveWidth, setLiveWidth] = useState(width);
    const [isDragging, setIsDragging] = useState(false);

    const dragRef = useRef<{ startX: number; startWidth: number } | null>(null);
    const liveWidthRef = useRef(width);

    // Toggle buttons changed the width -> follow it (with spring)
    useEffect(() => {
        if (!dragRef.current) {
            setLiveWidth(width);
            liveWidthRef.current = width;
        }
    }, [width]);

    const clamp = (v: number) =>
        Math.round(Math.max(minWidth, Math.min(maxWidth, v)));

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.currentTarget.setPointerCapture(e.pointerId);
        dragRef.current = { startX: e.clientX, startWidth: liveWidthRef.current };
        setIsDragging(true);
        document.body.style.cursor = "col-resize";
        document.body.style.userSelect = "none";
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!dragRef.current) return;
        // Preview is left-aligned, so the right edge moves 1:1 with the cursor.
        // (Use * 2 only if the preview is centered with mx-auto.)
        const delta = e.clientX - dragRef.current.startX;
        const next = clamp(dragRef.current.startWidth + delta);
        liveWidthRef.current = next;
        setLiveWidth(next);
    };

    const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!dragRef.current) return;
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            e.currentTarget.releasePointerCapture(e.pointerId);
        }
        dragRef.current = null;
        setIsDragging(false);
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
        onWidthChange(liveWidthRef.current); // commit final width to parent
    };

    return (
        /*
            OUTER WRAPPER (horizontal scroll only)
            - overflow-x-auto: if the preview (e.g. 1440px) is wider than the
              available space, scroll sideways to see all of it.
            - overflow-y-hidden: vertical scrolling happens INSIDE the frame.
            - No pointer-events-none: the wrapper must receive pointer events,
              otherwise its scrollbar can't be dragged or swiped.
            - preview-scrollbar: thin, theme-aware scrollbar (see globals.css).
        */
        <div
            className={`preview-scrollbar relative w-full h-full overflow-x-auto overflow-y-hidden ${className}`}
        >
            <div className="flex h-full w-max">
                {/* RESPONSIVE VIEWPORT */}
                <motion.div
                    initial={false}
                    animate={{ width: liveWidth }}
                    transition={isDragging ? { duration: 0 } : SPRING}
                    className="relative h-full shrink-0"
                >
                    {/*
                        CONTAINER QUERY ROOT (vertical scroll only)
                        - No border, so its width is exactly liveWidth.
                        - overflow-y-auto: tall previews scroll like a browser viewport.
                        - overflow-x-hidden: no nested horizontal scroller to
                          swallow sideways swipes meant for the outer wrapper.
                        - hide-scrollbar: a visible scrollbar would take ~15px
                          of width on Windows and shift every breakpoint.
                        - overscroll-contain: reaching the top/bottom of the
                          preview doesn't start scrolling the docs page.
                    */}
                    <div
                        style={{ containerType: "inline-size" }}
                        className="hide-scrollbar relative w-full min-w-0 h-full overflow-x-hidden overflow-y-auto overscroll-y-contain bg-white dark:bg-[#0b0b0b] rounded-2xl"
                    >
                        {children}
                    </div>

                    {/* Border drawn on top, doesn't affect the container's size */}
                    <div className="pointer-events-none absolute inset-0 z-30 rounded-2xl border" />

                    {/* Shield so children (links, charts, iframes) don't steal the drag */}
                    {isDragging && (
                        <div className="absolute inset-0 z-40 cursor-col-resize" />
                    )}

                    {/* Devtools-style size badge */}
                    {isDragging && (
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-50 rounded-md bg-black/80 px-2 py-1 font-mono text-xs text-white shadow">
                            {liveWidth}px · {breakpointLabel(liveWidth)}
                        </div>
                    )}
                </motion.div>

                {/* RESIZE HANDLE (sits beside the preview, not on top of it) */}
                <div
                    role="separator"
                    aria-orientation="vertical"
                    aria-valuenow={liveWidth}
                    aria-valuemin={minWidth}
                    aria-valuemax={maxWidth}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={endDrag}
                    onPointerCancel={endDrag}
                    className="group flex w-5 shrink-0 cursor-col-resize touch-none items-center justify-center"
                >
                    <div
                        className={`flex h-14 w-4 items-center justify-center rounded-full border bg-background shadow-md transition-transform group-hover:scale-105 ${isDragging ? "scale-105 border-primary" : ""
                            }`}
                    >
                        <GripVertical className="text-muted-foreground" size={16} />
                    </div>
                </div>
            </div>
        </div>
    );
}