"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GripVertical } from "lucide-react";

interface ResizablePreviewProps {
    /** The actual component being previewed */
    children: React.ReactNode;
    /** The current controlled width of the preview */
    width: number;
    /** Function to update the width when dragging */
    onWidthChange: (width: number) => void;
    /** Minimum width the user can drag to */
    minWidth?: number;
    /** Maximum width the user can drag to */
    maxWidth?: number;
    /** Optional standard Tailwind classes applied to the wrapper */
    className?: string;
}

export default function ResizablePreview({
    children,
    width,
    onWidthChange,
    minWidth = 360,
    maxWidth = 1440,
    className = "",
}: ResizablePreviewProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new ResizeObserver((entries) => {
            // Subtract 32px to give a small visual padding so it doesn't touch the exact edges
            setContainerWidth(entries[0].contentRect.width - 32);
        });
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    // If the preview width is bigger than the available screen width, zoom out
    const scale =
        containerWidth > 0 && width > containerWidth
            ? containerWidth / width
            : 1;

    return (
        <div
            ref={containerRef}
            className={`relative w-full h-full flex justify-center items-center overflow-hidden pointer-events-none ${className}`}
        >
            <motion.div
                animate={{
                    width: width,
                    scale: scale,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 28 }}
                className="relative h-full shrink-0 flex flex-col bg-white dark:bg-[#0b0b0b] rounded-2xl @container border origin-center pointer-events-auto"
            >
                <div className="flex-1 overflow-auto rounded-lg">
                    {children}
                </div>

                {/* Drag Handle */}
                <div
                    onMouseDown={(e) => {
                        e.preventDefault();
                        const startX = e.clientX;
                        const startWidth = width;

                        const onMouseMove = (moveEvent: MouseEvent) => {
                            // DIVIDE BY SCALE: Ensures the mouse cursor stays perfectly glued to the handle even when scaled down.
                            const delta = ((moveEvent.clientX - startX) * 2) / scale;
                            const newWidth = Math.max(
                                minWidth,
                                Math.min(maxWidth, startWidth + delta)
                            );

                            // Update the parent state instead of local state
                            onWidthChange(newWidth);
                        };

                        const onMouseUp = () => {
                            window.removeEventListener("mousemove", onMouseMove);
                            window.removeEventListener("mouseup", onMouseUp);
                        };

                        window.addEventListener("mousemove", onMouseMove);
                        window.addEventListener("mouseup", onMouseUp);
                    }}
                    className="absolute top-0 -right-4 bottom-0 w-8 cursor-col-resize flex items-center justify-center z-50 group"
                >
                    <div className="h-14 w-4 rounded-full border bg-background shadow-md flex items-center justify-center transition-transform group-hover:scale-105">
                        <GripVertical className="text-muted-foreground" size={16} />
                    </div>
                </div>
            </motion.div>


        </div>
    );
}