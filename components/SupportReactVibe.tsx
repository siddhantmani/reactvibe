"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { PreviewCanvas } from "./PreviewCanvas";
import BranchFlow from "@/public/Motion/BranchFlow/Preview";
import Waveform from "@/public/Motion/Waveform/Preview";
import WaveCTA from "@/public/Motion/Wave-CTA/Preview";

const HIDDEN_UNTIL_KEY = "rv-support-hidden-until";
const SUPPORTER_KEY = "rv-supporter";
const DAY = 24 * 60 * 60 * 1000;

function readNumber(key: string) {
    try {
        return Number(localStorage.getItem(key)) || 0;
    } catch {
        return 0;
    }
}

function writeNumber(key: string, value: number) {
    try {
        localStorage.setItem(key, String(value));
    } catch {
        
    }
}

/* Calling this after a purchase — the popup never shows again in this browser. */
export function markAsSupporter() {
    try {
        localStorage.setItem(SUPPORTER_KEY, "1");
    } catch {
       
    }
}

function isSupporter() {
    try {
        return localStorage.getItem(SUPPORTER_KEY) === "1";
    } catch {
        return false;
    }
}

interface UseSupportPopupOptions {
    /*Wait this long after landing before opening, in ms. Default: 1200. */
    delay?: number;
    /* Hide for this many days after closing. Default: 10. */
    hideDays?: number;
}

export function useSupportPopup({ delay = 1200, hideDays = 10 }: UseSupportPopupOptions = {}) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (isSupporter()) return;
        if (Date.now() < readNumber(HIDDEN_UNTIL_KEY)) return;

        const timer = setTimeout(() => setOpen(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    const close = () => {
        writeNumber(HIDDEN_UNTIL_KEY, Date.now() + hideDays * DAY);
        setOpen(false);
    };

    return { open, close };
}

function MiniPreview({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={`relative min-h-0 overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-white/[0.06] dark:bg-[#131316] ${className}`}>
            <div className="absolute inset-x-0 top-1/2 aspect-video -translate-y-1/2">
                <PreviewCanvas>
                    <div className="h-full w-full">{children}</div>
                </PreviewCanvas>
            </div>
        </div>
    );
}

interface SupportReactVibeProps {
    storeHref?: string;
    onMaybeLater?: () => void;
    onVisitStore?: () => void;
    titleId?: string;
    className?: string;
}

function SupportReactVibe({
    storeHref = "/docs/templates/overview",
    onMaybeLater,
    onVisitStore,
    titleId = "rv-support-title",
    className = "",
}: SupportReactVibeProps) {
    return (
        <div className={`flex flex-col gap-5 ${className}`}>
            {/* Badge */}
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-800 dark:border-violet-500/30 dark:bg-violet-500/15 dark:text-violet-300">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-violet-600" />
                Community support
            </span>

            {/* Title */}
            <div className="space-y-1.5">
                <h2
                    id={titleId}
                    className="flex items-center gap-2.5 text-[28px] font-extrabold leading-tight tracking-tight text-zinc-950 sm:text-[32px] dark:text-white"
                >
                    Keep React Vibe free.
                    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" className="shrink-0 fill-violet-600 stroke-violet-600 dark:fill-violet-500 dark:stroke-violet-500" strokeWidth="1.5" strokeLinejoin="round">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    A personal note from the creator
                </p>
            </div>

            {/* Illustration */}
            <div aria-hidden="true" className="relative grid h-[200px] grid-cols-3 grid-rows-2 gap-2.5 rounded-2xl border border-zinc-200 bg-zinc-50 p-3 dark:border-white/[0.07] dark:bg-[#09090b]">
                {/* Big tile */}
                <MiniPreview className="col-span-2 row-span-2">
                    <BranchFlow preview />
                </MiniPreview>

                {/* Small tiles */}
                <MiniPreview>
                    <Waveform preview />
                </MiniPreview>

                <MiniPreview>
                    <WaveCTA preview />
                </MiniPreview>

                <span className="absolute bottom-5 left-5 rounded-lg border border-zinc-200 bg-white/90 px-2 py-1 text-[11px] font-semibold text-zinc-800 dark:border-white/10 dark:bg-[#09090b]/85 dark:text-zinc-200">
                    reactvibe.com
                </span>
            </div>

            {/* Message */}
            <div className="space-y-2.5">
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    I've been building and maintaining React Vibe on my own since January 1, 2026. As more developers use it, the infrastructure costs continue to grow, and covering them independently is becoming increasingly difficult.
                </p>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    I want to keep React Vibe free and ad-free, without putting essential features behind a paywall. If React Vibe has saved you time or helped with your projects, purchasing something from the store is a great way to support its continued development.
                </p>
            </div>

            {/* Support card */}
            <div className="flex items-center gap-3.5 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 dark:border-white/[0.07] dark:bg-[#141416]">
                <div aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                        <path d="M3 6h18" />
                        <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                </div>
                <div className="min-w-0 space-y-0.5">
                    <p className="text-sm font-bold text-zinc-950 dark:text-white">Support React Vibe</p>
                    <p className="text-[12.5px] text-zinc-600 dark:text-zinc-400">
                        Every purchase helps cover hosting costs and gives me more room to build new components and improve the library.
                    </p>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2.5 sm:flex-row">
                <Link
                    href={storeHref}
                    onClick={onVisitStore}
                    className="flex h-[46px] flex-1 items-center justify-center gap-2 rounded-xl bg-violet-700 text-sm font-bold text-white transition-colors hover:bg-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0f0f10]"
                >
                    Visit the store
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                    </svg>
                </Link>
                <button
                    type="button"
                    onClick={onMaybeLater}
                    className="h-[46px] rounded-xl border border-zinc-300 px-5 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:border-white/15 dark:text-zinc-200 dark:hover:bg-white/5"
                >
                    Maybe later
                </button>
            </div>
        </div>
    );
}

export default SupportReactVibe;