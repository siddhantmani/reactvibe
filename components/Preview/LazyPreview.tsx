"use client";

import { useEffect, useRef, useState } from "react";

import ClientPreview from "./ClientPreview";

import type { PreviewName } from "./previewMap";

interface LazyPreviewProps {
    name: PreviewName;
    preview?: boolean;
}

export default function LazyPreview({
    name,
    preview = false,
}: LazyPreviewProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = containerRef.current;

        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                rootMargin: "100px 0px",
                threshold: 0.01,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full h-full"
        >
            {isVisible ? (
                <ClientPreview
                    name={name}
                    preview={preview}
                />
            ) : null}
        </div>
    );
}