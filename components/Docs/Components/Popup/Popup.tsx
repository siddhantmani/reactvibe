"use client";

import {
    Children,
    isValidElement,
    useEffect,
    useRef,
    useState,
    type CSSProperties,
    type ReactNode,
    type RefObject,
} from "react";
import { createPortal } from "react-dom";
import {
    AnimatePresence,
    motion,
    useReducedMotion,
    type Variants,
} from "framer-motion";

export type PopupAnimation = "origin" | "spring" | "slide" | "fade";
export type PopupPosition = "center" | "bottom";

export interface PopupProps {
    /* Show or hide the popup. */
    open: boolean;
    /* Called on close button, Escape, or overlay click. */
    onClose: () => void;
    children: ReactNode;

    /* Entrance style. Default: "spring". */
    animation?: PopupAnimation;
    /* For animation="origin": the element the popup grows out of (usually its trigger button). */
    originRef?: RefObject<HTMLElement | null>;
    /*Where the panel sits. "bottom" becomes a sheet. Default: "center". */
    position?: PopupPosition;
    /* Reveal each direct child one after another. Default: true. */
    stagger?: boolean;
    /* Delay between staggered children, in seconds. Default: 0.06. */
    staggerDelay?: number;

    /* Max width of the panel in px. Default: 540. */
    maxWidth?: number;
    /* Corner radius in px. Default: 24. */
    radius?: number;
    /* Overlay color. Default: "rgba(0,0,0,0.6)". */
    overlayColor?: string;
    /* Blur the page behind (costly over animated pages). Default: false. */
    overlayBlur?: boolean;

    /* Close when the dim area is clicked. Default: true. */
    closeOnOverlayClick?: boolean;
    /* Close on Escape. Default: true. */
    closeOnEscape?: boolean;
    /* Show the X button. Default: true. */
    showCloseButton?: boolean;

    /* Accessible name for screen readers. Use this or `labelledBy`. */
    ariaLabel?: string;
    /* Id of a visible heading inside the popup, used as its accessible name. */
    labelledBy?: string;

    /* Extra classes for the panel. */
    className?: string;
    /* Inline styles for the panel. */
    style?: CSSProperties;
}


const join = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const FOCUSABLE =
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

function panelVariants(
    animation: PopupAnimation,
    position: PopupPosition,
    origin: { x: number; y: number } | null,
    reduce: boolean
): Variants {
    if (reduce || animation === "fade") {
        return {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.2 } },
            exit: { opacity: 0, transition: { duration: 0.15 } },
        };
    }

    if (animation === "slide" || position === "bottom") {
        return {
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 28 } },
            exit: { opacity: 0, y: 40, transition: { duration: 0.2, ease: EASE } },
        };
    }

    if (animation === "origin" && origin) {
        return {
            hidden: { opacity: 0, x: origin.x, y: origin.y, scale: 0.15, filter: "blur(6px)" },
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: { type: "spring", stiffness: 220, damping: 26, mass: 0.9 },
            },
            exit: {
                opacity: 0,
                x: origin.x,
                y: origin.y,
                scale: 0.15,
                filter: "blur(6px)",
                transition: { duration: 0.25, ease: EASE },
            },
        };
    }

    // "spring" (also the fallback for "origin" without a ref)
    return {
        hidden: { opacity: 0, scale: 0.92, y: 14, filter: "blur(8px)" },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { type: "spring", stiffness: 300, damping: 24 },
        },
        exit: { opacity: 0, scale: 0.96, y: 8, filter: "blur(4px)", transition: { duration: 0.18, ease: EASE } },
    };
}

const childVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};


export default function Popup({
    open,
    onClose,
    children,
    animation = "spring",
    originRef,
    position = "center",
    stagger = true,
    staggerDelay = 0.06,
    maxWidth = 540,
    radius = 24,
    overlayColor = "rgba(0,0,0,0.6)",
    overlayBlur = false,
    closeOnOverlayClick = true,
    closeOnEscape = true,
    showCloseButton = true,
    ariaLabel,
    labelledBy,
    className = "",
    style,
}: PopupProps) {
    const [mounted, setMounted] = useState(false);
    const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const lastFocused = useRef<HTMLElement | null>(null);
    const reduce = !!useReducedMotion();

    const onCloseRef = useRef(onClose);
    useEffect(() => {
        onCloseRef.current = onClose;
    }, [onClose]);

    useEffect(() => setMounted(true), []);

    // Measure where the trigger is, relative to the screen center, so "origin" can grow from it.
    useEffect(() => {
        if (!open || animation !== "origin" || !originRef?.current) return;
        const r = originRef.current.getBoundingClientRect();
        setOrigin({
            x: r.left + r.width / 2 - window.innerWidth / 2,
            y: r.top + r.height / 2 - window.innerHeight / 2,
        });
    }, [open, animation, originRef]);

    // Lock page scroll (without the layout jumping when the scrollbar disappears).
    useEffect(() => {
        if (!open) return;
        const body = document.body;
        const prev = { overflow: body.style.overflow, pr: body.style.paddingRight };
        const sbw = window.innerWidth - document.documentElement.clientWidth;
        body.style.overflow = "hidden";
        if (sbw > 0) body.style.paddingRight = `${sbw}px`;
        return () => {
            body.style.overflow = prev.overflow;
            body.style.paddingRight = prev.pr;
        };
    }, [open]);

    // Focus in on open, give focus back on close.
    useEffect(() => {
        if (!open) return;
        lastFocused.current = document.activeElement as HTMLElement | null;
        const id = requestAnimationFrame(() => panelRef.current?.focus());
        return () => {
            cancelAnimationFrame(id);
            lastFocused.current?.focus?.();
        };
    }, [open]);

    // Escape closes; Tab stays inside the popup.
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape" && closeOnEscape) {
                onCloseRef.current();
                return;
            }
            if (e.key !== "Tab" || !panelRef.current) return;
            const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
            if (items.length === 0) {
                e.preventDefault();
                return;
            }
            const first = items[0];
            const last = items[items.length - 1];
            if (e.shiftKey && (document.activeElement === first || document.activeElement === panelRef.current)) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open, closeOnEscape]);

    if (!mounted) return null;

    const isSheet = position === "bottom";
    const variants = panelVariants(animation, position, origin, reduce);

    const content = stagger && !reduce
        ? Children.map(children, (child, i) =>
            isValidElement(child) || typeof child === "string" ? (
                <motion.div key={i} variants={childVariants}>
                    {child}
                </motion.div>
            ) : (
                child
            )
        )
        : children;

    return createPortal(
        <AnimatePresence>
            {open && (
                <div
                    className={join(
                        "fixed inset-0 z-[100] flex justify-center",
                        isSheet ? "items-end" : "items-center p-4"
                    )}
                >
                    <motion.div
                        aria-hidden="true"
                        className={join("absolute inset-0", overlayBlur && "backdrop-blur-sm")}
                        style={{ background: overlayColor }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        onClick={closeOnOverlayClick ? () => onCloseRef.current() : undefined}
                    />

                    <motion.div
                        ref={panelRef}
                        role="dialog"
                        aria-modal="true"
                        aria-label={labelledBy ? undefined : ariaLabel ?? "Popup"}
                        aria-labelledby={labelledBy}
                        tabIndex={-1}
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ staggerChildren: staggerDelay, delayChildren: 0.08 }}
                        style={{
                            maxWidth,
                            borderRadius: isSheet ? `${radius}px ${radius}px 0 0` : radius,
                            ...style,
                        }}
                        className={join(
                            "relative w-full overflow-y-auto border p-6 outline-none",
                            isSheet ? "max-h-[90dvh] pb-[max(1.5rem,env(safe-area-inset-bottom))]" : "max-h-[calc(100dvh-2rem)]",
                            "border-black/10 bg-white text-zinc-950 shadow-2xl",
                            "dark:border-white/10 dark:bg-[#0f0f10] dark:text-zinc-50",
                            className
                        )}
                    >
                        {showCloseButton && (
                            <motion.button
                                type="button"
                                aria-label="Close"
                                onClick={() => onCloseRef.current()}
                                whileHover={reduce ? undefined : { rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                className={join(
                                    "absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-xl",
                                    "text-zinc-600 hover:bg-black/5 hover:text-zinc-950",
                                    "dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                                )}
                            >
                                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <path d="M18 6 6 18M6 6l12 12" />
                                </svg>
                            </motion.button>
                        )}

                        {content}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}