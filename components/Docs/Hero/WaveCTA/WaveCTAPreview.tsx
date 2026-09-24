"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import React, { useEffect } from "react";
import WaveCTA from "./WaveCTA";

function WaveCTAPreview() {
    const lightCircles = [
        "#c4b5fd",
        "#bae6fd",
        "#fbcfe8",
        "#fef08a",
        "#fed7aa"
    ];

    const darkerWaves = [
        "#8b5cf6",
        "#0ea5e9",
        "#ec4899",
        "#eab308",
        "#f97316"
    ];


    return (
        <div className='dark:bg-[#0c0c0c] @xl:overflow-hidden border'>
            <WaveCTA
                leftWave={darkerWaves}
                rightWave={darkerWaves}

                leftCircle={lightCircles}
                rightCircle={lightCircles}
            />
        </div>
    );
}

export default WaveCTAPreview;
