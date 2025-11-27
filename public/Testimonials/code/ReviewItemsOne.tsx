"use client"

import { Star } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'

function ReviewItemsOne() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isPaused = useRef(false);
    const scrollPosition = useRef(0);

    const items = [
        {
            icons: <Star className="w-4 h-4 fill-current" />,
            rating: "4.9",
            review: "This product completely transformed our workflow. The intuitive design and powerful features made it an instant favorite.",
            imageURL:
                "https://images.unsplash.com/photo-1714750977930-e7a7f4611257?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000",
            name: "Michael Lee",
            position: "Product Manager at Acme Inc.",
        },
        {
            icons: <Star className="w-4 h-4 fill-current" />,
            rating: "4.8",
            review: "Absolutely amazing! The attention to detail and user experience is unmatched. Highly recommend to anyone.",
            imageURL:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
            name: "Sarah Johnson",
            position: "CEO at TechStart",
        },
        {
            icons: <Star className="w-4 h-4 fill-current" />,
            rating: "4.9",
            review: "This product completely transformed our workflow. The intuitive design and powerful features made it an instant favorite.",
            imageURL:
                "https://images.unsplash.com/photo-1714750977930-e7a7f4611257?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000",
            name: "Siddhant Mani",
            position: "Product Manager at Acme Inc.",
        },
        {
            icons: <Star className="w-4 h-4 fill-current" />,
            rating: "4.8",
            review: "Absolutely amazing! The attention to detail and user experience is unmatched. Highly recommend to anyone.",
            imageURL:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
            name: "Hemant Mani",
            position: "CEO at TechStart",
        },
    ];

    // Continuous scroll effect
    useEffect(() => {
        const speed = 0.5; // pixels per frame
        const container = containerRef.current;
        if (!container) return;

        const firstChild = container.firstElementChild as HTMLElement;
        if (!firstChild) return;

        const cardHeight = firstChild.offsetHeight + 8; // card height + gap
        const totalHeight = cardHeight * items.length;

        // Start one full set above
        scrollPosition.current = totalHeight;

        const loop = () => {
            if (!isPaused.current) {
                scrollPosition.current -= speed;

                // When fully moved upward by one set, reset back
                if (scrollPosition.current <= 0) {
                    scrollPosition.current = totalHeight;
                }

                container.style.transform = `translateY(-${scrollPosition.current}px)`;
            }
            requestAnimationFrame(loop);
        };

        requestAnimationFrame(loop);
    }, [items.length]);



    const handleMouseEnter = () => {
        isPaused.current = true;
    };

    const handleMouseLeave = () => {
        isPaused.current = false;
    };
    return (
        <div className="overflow-hidden max-h-[600px] relative"

        >
            <div
                ref={containerRef}
                className="space-y-2 max-w-xs"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}

            >
                {/* First set of cards */}
                {items.map((item, index) => (
                    <div
                        key={`first-${index}`}
                        className="bg-white p-3 rounded-xl space-y-2 mx-2 transition-all duration-300"
                        style={{
                            boxShadow: `
      0px 12px 40px rgba(60, 80, 180, 0.08),
      0px 20px 60px rgba(0, 0, 0, 0.05)
    `,
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="text-yellow-500">{item.icons}</div>
                            <p className="font-semibold">{item.rating}</p>
                        </div>
                        <p className="text-sm text-gray-700 font-medium">
                            {item.review}
                        </p>
                        <div className="border-t pt-2">
                            <div className="flex items-center gap-2">
                                <Image
                                    height={1000}
                                    width={1000}
                                    src={item.imageURL}
                                    alt="reviewer"
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                                <div>
                                    <h1 className="text-base font-semibold dark:text-black">
                                        {item.name}
                                    </h1>
                                    <p className="text-xs text-gray-500 font-medium">
                                        {item.position}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {items.map((item, index) => (
                    <div
                        key={`second-${index}`}
                        className="bg-white p-3 rounded-xl mx-2 space-y-2 shadow-md hover:shadow-xl transition-all duration-300"
                        style={{
                            boxShadow: `
      0px 12px 40px rgba(60, 80, 180, 0.08),
      0px 20px 60px rgba(0, 0, 0, 0.05)
    `,
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="text-yellow-500">{item.icons}</div>
                            <p className="font-semibold">{item.rating}</p>
                        </div>
                        <p className="text-sm text-gray-700 font-medium">
                            {item.review}
                        </p>
                        <div className="border-t pt-2">
                            <div className="flex items-center gap-2">
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={item.imageURL}
                                    alt="reviewer"
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                                <div>
                                    <h1 className="text-base font-semibold dark:text-black">
                                        {item.name}
                                    </h1>
                                    <p className="text-xs text-gray-500 font-medium">
                                        {item.position}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReviewItemsOne