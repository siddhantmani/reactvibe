"use client"

import ComponentPreviewCard from "@/components/Docs/ExploreComponents/ComponentPreviewCard";
import { componentsData } from "@/lib/componentsData";
import { Manrope } from "next/font/google";

const exploreHeading = Manrope({
    weight: '700',
    subsets: ['vietnamese']
});
const explorePara = Manrope({
    weight: '400',
    subsets: ['vietnamese']
});

import { motion } from "framer-motion";


export default function ExploreComponents() {
    return (
        <>
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
                    delay: 0.2
                }}
                className="mb-10 px-2 space-y-2">
                <h1 className={`${exploreHeading.className} text-4xl xl:text-5xl xl:max-w-[60%] md:max-w-[60%]`}>
                    React Animation Components & UI Blocks
                </h1>
                <p className={`${explorePara.className} text-[12px] md:text-[10px] text-black/70 dark:text-white/70`}>
                    Browse copy-paste React components, Framer Motion animations, and production-ready UI sections.
                </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 px-2">
                {componentsData.map((item, index) => (
                    <ComponentPreviewCard
                        key={item.id}
                        index={index}
                        Comp={item.component}
                        image={item.image}
                        path={item.path}
                        title={item.title}
                        category={item.category}
                    />
                ))}
            </div>
        </>
    )
}