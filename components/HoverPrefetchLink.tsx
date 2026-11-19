"use client";

import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useRef, type ComponentProps } from "react";

type Props = ComponentProps<typeof NextLink>;

export default function Link({ prefetch, href, onMouseEnter, onFocus, onTouchStart, ...props }: Props) {
    const router = useRouter();
    const done = useRef(false);

    if (prefetch !== undefined) {
        return <NextLink href={href} prefetch={prefetch} onMouseEnter={onMouseEnter} onFocus={onFocus} onTouchStart={onTouchStart} {...props} />;
    }

    const prefetchOnIntent = () => {
        if (done.current) return;
        const url = typeof href === "string" ? href : href.pathname ?? "";
        if (!url.startsWith("/")) return;
        done.current = true;
        router.prefetch(url);
    };

    return (
        <NextLink
            {...props}
            href={href}
            prefetch={false}
            onMouseEnter={(e) => { prefetchOnIntent(); onMouseEnter?.(e); }}
            onFocus={(e) => { prefetchOnIntent(); onFocus?.(e); }}
            onTouchStart={(e) => { prefetchOnIntent(); onTouchStart?.(e); }}
        />
    );
}