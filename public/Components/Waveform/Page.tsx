"use client"

import { motion } from "framer-motion"
import Waveform from "./Waveform"

function Page() {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{
                once: true,       // Run only once
                amount: 0.2,      // 20% of the component in view triggers it
                margin: "-50px",  // Negative to trigger slightly earlier
            }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.5,       // Optional slight delay
            }}
        >
            <Waveform />
        </motion.div>
    )
}

export default Page