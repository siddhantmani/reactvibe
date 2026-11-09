
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
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const element = containerRef.current;

        if (!element || hasLoaded) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasLoaded(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: "300px 0px",
                threshold: 0,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [hasLoaded]);

    return (
        <div ref={containerRef} className="w-full h-full min-h-0">
            {hasLoaded && (
                <ClientPreview
                    name={name}
                    preview={preview}
                />
            )}
        </div>
    );
}
