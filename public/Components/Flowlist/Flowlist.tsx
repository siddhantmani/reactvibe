"use client"

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

interface NotificationItem {
    id: number;
    title: string;
    description: string;
}

interface FlowlistItemProps {
    item: NotificationItem;
    index: number;
    isSelected: boolean;
    onSelect: (item: NotificationItem, index: number) => void;
}

interface FlowlistProps {
    items?: NotificationItem[];
    onItemSelect?: (item: NotificationItem, index: number) => void;
    showGradients?: boolean;
    enableArrowNavigation?: boolean;
    className?: string;
    itemClassName?: string;
    initialSelectedIndex?: number;
}

const FlowlistItem: React.FC<FlowlistItemProps> = ({ item, index, isSelected, onSelect }) => {
    const ref = useRef<HTMLDivElement>(null);

    const isInView = useInView(ref, {
        margin: "0px 0px -20px 0px",
        amount: 0.4,
    });

    return (
        <motion.div
            ref={ref}
            data-index={index}
            onClick={() => onSelect(item, index)}

            animate={{
                scale: isInView ? 1 : 0.7,
                opacity: isInView ? 1 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
                delay: 0.05,
            }}

            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.97 }}
            style={{ marginBottom: 10, cursor: 'pointer', transformOrigin: 'center' }}
        >
            <motion.div
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                whileInView={{ opacity: 1 }}
                viewport={{
                    once: true,
                    amount: 0.2, // Trigger when 20% visible
                    margin: "50px"
                }}
                transition={{
                    duration: 1,
                    ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                    delay: 0.3
                }}
                className={`
                    flex items-center gap-3 rounded-xl px-3 py-2
                    border transition-colors duration-150
                    ${isSelected
                        ? 'bg-[#f4f4f4] border-gray-300'
                        : 'bg-[#f4f4f4] border-gray-100'
                    }
                `}
            >
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline gap-1">
                        <span className="text-[10px] text-gray-400 font-medium">
                            {item.title}
                        </span>
                    </div>
                    <p className="text-[11px] text-gray-900 font-medium m-0">
                        {item.description}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Flowlist: React.FC<FlowlistProps> = ({
    items = [],
    onItemSelect,
    showGradients = true,
    enableArrowNavigation = true,
    className = '',
    initialSelectedIndex = -1,
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(initialSelectedIndex);
    const [keyboardNav, setKeyboardNav] = useState(false);
    const [topFade, setTopFade] = useState(0);
    const [bottomFade, setBottomFade] = useState(1);

    const handleScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        const { scrollTop, scrollHeight, clientHeight } = el;
        setTopFade(Math.min(scrollTop / 50, 1));
        const distFromBottom = scrollHeight - (scrollTop + clientHeight);
        setBottomFade(scrollHeight <= clientHeight ? 0 : Math.min(distFromBottom / 50, 1));
    };

    useEffect(() => {
        handleScroll();
    }, []);

    useEffect(() => {
        if (!enableArrowNavigation) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
                e.preventDefault();
                setKeyboardNav(true);
                setTimeout(() => setKeyboardNav(false), 0);
                setSelectedIndex(prev => Math.min(prev + 1, items.length - 1));
            } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
                e.preventDefault();
                setKeyboardNav(true);
                setTimeout(() => setKeyboardNav(false), 0);
                setSelectedIndex(prev => Math.max(prev - 1, 0));
            } else if (e.key === 'Enter' && selectedIndex >= 0) {
                e.preventDefault();
                onItemSelect?.(items[selectedIndex], selectedIndex);
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

    useEffect(() => {
        if (!keyboardNav || selectedIndex < 0 || !scrollRef.current) return;
        const container = scrollRef.current;
        const item = container.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement | null;
        if (item) {
            const margin = 50;
            const { scrollTop, clientHeight } = container;
            const itemTop = item.offsetTop;
            const itemBottom = itemTop + item.offsetHeight;
            if (itemTop < scrollTop + margin) {
                container.scrollTo({ top: itemTop - margin, behavior: 'smooth' });
            } else if (itemBottom > scrollTop + clientHeight - margin) {
                container.scrollTo({ top: itemBottom - clientHeight + margin, behavior: 'smooth' });
            }
        }
    }, [selectedIndex, keyboardNav]);

    const handleSelect = useCallback((item: NotificationItem, index: number) => {
        setSelectedIndex(index);
        onItemSelect?.(item, index);
    }, [onItemSelect]);

    return (
        <div className={`relative w-full ${className}`}>

            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="max-h-[300px] overflow-y-auto"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <style>{`div::-webkit-scrollbar { display: none; }`}</style>

                {items.map((item, index) => (
                    <FlowlistItem
                        key={item.id}
                        item={item}
                        index={index}
                        isSelected={selectedIndex === index}
                        onSelect={handleSelect}
                    />
                ))}
            </div>

            {showGradients && (
                <>
                    <div
                        className="absolute top-0 left-0 right-0 h-[50px] bg-gradient-to-b from-[#fbfbfb] to-transparent pointer-events-none transition-opacity duration-300"
                        style={{ opacity: topFade }}
                    />
                    <div
                        className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-t from-[#fbfbfb] to-transparent pointer-events-none transition-opacity duration-300"
                        style={{ opacity: bottomFade }}
                    />
                </>
            )}
        </div>
    );
};

export default Flowlist;