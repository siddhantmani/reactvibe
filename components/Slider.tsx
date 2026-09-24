"use client";

import { useEffect, useRef, useState } from "react";
import { GripVertical } from "lucide-react";

interface ViewportSliderProps {
    value: number;
    onChange: (value: number) => void;

    min?: number;
    max?: number;
    className?: string;
}

export default function ViewportSlider({
    value,
    onChange,
    min = 360,
    max = 1080,
    className = "",
}: ViewportSliderProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [dragging, setDragging] = useState(false);

    function update(clientX: number) {
        if (!wrapperRef.current) return;

        const rect = wrapperRef.current.getBoundingClientRect();

        let x = clientX - rect.left;

        x = Math.max(0, Math.min(rect.width, x));

        const width = Math.round(
            min + (x / rect.width) * (max - min)
        );

        onChange(width);
    }

    function handleMouseDown(e: React.MouseEvent) {
        e.preventDefault();

        setDragging(true);

        update(e.clientX);
    }

    useEffect(() => {
        if (!dragging) return;

        const move = (e: MouseEvent) => update(e.clientX);

        const up = () => setDragging(false);

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", up);

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseup", up);
        };
    }, [dragging]);

    const percentage =
        ((value - min) / (max - min)) * 100;

    return (
        <div
            ref={wrapperRef}
            className={`relative h-full w-full ${className}`}
        >
            {/* background grid line */}

            <div className="absolute inset-y-0 left-0 right-0">
                <div className="mx-auto h-full w-px bg-border" />
            </div>

            {/* draggable */}

            <div
                onMouseDown={handleMouseDown}
                style={{
                    left: `${percentage}%`,
                }}
                className="
                    absolute
                    top-0
                    -translate-x-1/2
                    h-full
                    cursor-col-resize
                    select-none
                    flex
                    justify-center
                "
            >
                {/* vertical line */}

                <div className="w-px h-full bg-border" />

                {/* handle */}

                <div
                    className={`
                        absolute
                        top-1/2
                        -translate-y-1/2

                        h-14
                        w-4

                        rounded-full
                        border
                        bg-background
                        shadow-md

                        flex
                        items-center
                        justify-center

                        transition-all

                        ${dragging
                            ? "scale-110"
                            : "hover:scale-105"
                        }
                    `}
                >
                    <GripVertical
                        className="text-muted-foreground"
                        size={16}
                    />
                </div>
            </div>
        </div>
    );
}