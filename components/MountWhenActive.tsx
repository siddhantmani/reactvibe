"use client";

interface MountWhenActiveProps {
    active: boolean;
    children: React.ReactNode;
}

export default function MountWhenActive({ active, children }: MountWhenActiveProps) {
    if (!active) return null;  // 🔥 clean unmount
    return <>{children}</>;
}
