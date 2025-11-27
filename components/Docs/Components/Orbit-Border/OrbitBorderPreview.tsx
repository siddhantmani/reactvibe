"use client"
import OrderBorderGlobalPreview from './OrbitBorderGlobalPreview'
import { motion } from "framer-motion"

function OrbitBorderPreview() {
    return (
        <div className='scale-125'>
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
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                    delay: 0.8
                }}

            >
                <OrderBorderGlobalPreview
                    className='bg-[#ffffff] rounded-full p-3 text-black px-5'
                    RingColors={["#0a52f0", "#ffffff", "#f5e2ae", "#dcd7fc"]}
                    style={{
                        boxShadow: `
                          0px 12px 40px rgba(60, 80, 180, 0.08),
                          0px 20px 60px rgba(0, 0, 0, 0.05)
                        `,
                    }}
                >
                    Orbit Border
                </OrderBorderGlobalPreview>
            </motion.div>
        </div>
    )
}

export default OrbitBorderPreview