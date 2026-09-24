import React from 'react'

interface PreviewWrapperProps {
    preview?: boolean;
    className?: string; // Add this prop for custom spacing/scaling
    children: React.ReactNode;
}

export default function PreviewWrapper({ preview, className = "", children }: PreviewWrapperProps) {
    return (
        <div
            className={
                preview
                    // Overview grid: Memory optimizations (forces filter removal and stops transform caching)
                    ? 'w-full h-full flex items-center justify-center p-2 [&_[filter]]:!filter-none [&_*]:!will-change-auto'
                    // Dedicated route: Apply the custom classes passed from Preview.tsx
                    : className
            }
        >
            {children}
        </div>
    )
}