"use client"
import Image, { StaticImageData } from "next/image"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"

import { motion } from "framer-motion"

interface ComponentPreviewCardProps {
    Comp: React.ComponentType<Record<string, unknown>>
    image: string | StaticImageData
    path?: string
    title?: string
    category?: string
    index: number
}

const VIRTUAL_W = 1280
const VIRTUAL_H = 720

export default function ComponentPreviewCard({
    Comp, image, path, title, category, index
}: ComponentPreviewCardProps & { title: string; category: string }) {
    const [active, setActive] = useState(false)
    const [visible, setVisible] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const [scale, setScale] = useState(1)

    useEffect(() => {
        const update = () => {
            if (containerRef.current) {
                const { width } = containerRef.current.getBoundingClientRect()
                setScale(width / VIRTUAL_W)
            }
        }
        update()
        window.addEventListener("resize", update)
        return () => window.removeEventListener("resize", update)
    }, [])

    const handleEnter = () => { setActive(true); setVisible(true) }
    const handleLeave = () => {
        setActive(false)
        setTimeout(() => setVisible(false), 150)
    }

    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{
                once: true,
                amount: 0.2, // Trigger when 20% visible
                margin: "50px"
            }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                delay: 0.1 * index,
            }}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="w-full border rounded-xl p-2"
        >
            <div
                ref={containerRef}
                className="relative w-full border rounded-xl overflow-hidden"
                style={{ aspectRatio: "16 / 9" }}
            >
                <Link href={path || "#"} className="block w-full h-full">
                    {visible ? (
                        <div className="absolute inset-0">
                            <div
                                className="absolute top-0 left-0 origin-top-left pointer-events-none"
                                style={{
                                    width: `${VIRTUAL_W}px`,
                                    height: `${VIRTUAL_H}px`,
                                    transform: `scale(${scale})`,
                                }}
                            >
                                <Comp active={active} />
                            </div>
                        </div>
                    ) : (
                        <Image
                            src={image}
                            alt="preview"
                            fill
                            className="object-cover"
                        />
                    )}
                </Link>
            </div>
            <div>
                <h3 className="text-sm font-semibold mt-2">{title}</h3>
                <p className="text-xs text-gray-500">{category}</p>
            </div>
        </motion.div>
    )
}