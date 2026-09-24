"use client";
import { motion } from "framer-motion";

const BAR_COUNT = 13;
const barScales = Array.from({ length: BAR_COUNT }, () => 0.4 + Math.random() * 0.6);

function Page() {
    const bars = Array.from({ length: BAR_COUNT });

    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(3px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{
                once: true,
                amount: 0.2,
                margin: "50px"
            }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2
            }}
            exit={{ opacity: 0, y: -10 }}
            className="aspect-video flex justify-center rounded-2xl overflow-hidden mt-10">
            <div className="flex pt-14  justify-center h-[100%] w-[80%] space-x-2 relative">
                {bars.map((_, i) => {
                    const delay = i * 0.15;
                    const baseScale = barScales[i];

                    return (
                        <motion.div
                            key={i}
                            className="w-3 h-24 bg-[#779FFF] rounded-full "
                            animate={{
                                scaleY: [baseScale, 1.5, baseScale],
                            }}
                            transition={{
                                duration: 1.7,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay,
                            }}
                        />
                    );
                })}

                {/* optional faint grid lines behind */}
                <div className="absolute inset-0 flex justify-between opacity-20">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div
                            key={i}
                            className="w-[1px] bg-gray-100 h-full"
                            style={{ marginLeft: "auto", marginRight: "auto" }}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Page;
