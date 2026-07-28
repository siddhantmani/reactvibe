"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { RiDashboardHorizontalFill } from 'react-icons/ri';
import { SiReact } from 'react-icons/si';
import { BsInputCursorText } from 'react-icons/bs';
import { TbBackground, TbTableHeart } from "react-icons/tb";
import { PiChartDonutFill } from "react-icons/pi";

function VibeHeroAnimation() {
    return (
        <div className='max-w-7xl mx-auto z-50'>
            <div className='2xl:-ml-32'>
                <div className=''>
                    <div>
                        <svg
                            viewBox="0 0 800 400"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute lg:right-24 xl:left-55 w-full lg:w-[80%] xl:w-[70%] 2xl:w-[80%] h-full"
                        >

                            {/* Static curved lines */}
                            <motion.path
                                d={"\n    M 40 120\n    Q 120 200 250 200\n    L 550 200\n    Q 680 200 760 120\n  "}
                                stroke="rgba(20, 20, 20.1)"
                                strokeWidth="1"
                                fill="none"
                            />

                            <g className='scale-[200%] md:scale-[150%] xl:scale-[130%] 2xl:scale-[100%]'>
                                <animateMotion
                                    dur="5s"
                                    repeatCount="indefinite"
                                    rotate="auto"
                                    path={"\n    M 40 120\n    Q 120 200 250 200\n    L 550 200\n    Q 680 200 760 120\n  "}
                                />
                                {/* We shift the entire group so the exact center of the 180x48 pill rides the line */}
                                <g transform="translate(-60, -15)">

                                    {/* 1. The White Pill Background */}
                                    <rect
                                        width="86"
                                        height="28"
                                        rx="14"
                                        fill="white"
                                        stroke="#e5e7eb"
                                        strokeWidth="1"
                                        filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.05))"
                                    />

                                    {/* 2. Left Icon (Green Circle + Your Icon) */}
                                    <g transform="translate(8, 8)">
                                        {/* Green circle background */}
                                        <circle cx="6" cy="6" r="10" fill="#0f0f0f" />

                                        {/* Icon centered inside the circle */}
                                        <g transform="translate(-1.5, -1.5)">
                                            <SiReact size={15} className="text-white" />
                                        </g>
                                    </g>

                                    {/* 3. The Text (Centered vertically using y="29") */}
                                    <text
                                        x="30"
                                        y="17"
                                        fill="#374151"
                                        className="text-[8px] "
                                    >
                                        Hero Sections
                                    </text>
                                </g>
                            </g>
                        </svg>
                    </div>

                    <div className='pt-33 md:pt-32 xl:pt-48 2xl:pt-55'>
                        <svg
                            viewBox="0 0 800 400"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute lg:right-24 xl:left-55 w-full lg:w-[80%] xl:w-[70%] 2xl:w-[80%] h-full"
                        >

                            {/* Static curved lines */}
                            <motion.path
                                d={"\n    M 40 120\n    Q 120 200 250 200\n    L 550 200\n    Q 680 200 760 120\n  "}
                                stroke="rgba(20, 20, 20.1)"
                                strokeWidth="1"
                                fill="none"
                            />

                            <g className='scale-[200%] md:scale-[150%] xl:scale-[130%] 2xl:scale-[100%]'>
                                <animateMotion
                                    dur="6s"
                                    repeatCount="indefinite"
                                    rotate="auto"
                                    path={"\n    M 40 120\n    Q 120 200 250 200\n    L 550 200\n    Q 680 200 760 120\n  "}
                                />
                                {/* We shift the entire group so the exact center of the 180x48 pill rides the line */}
                                <g transform="translate(-60, -15)">

                                    {/* 1. The White Pill Background */}
                                    <rect
                                        width="98"
                                        height="28"
                                        rx="14"
                                        fill="white"
                                        stroke="#e5e7eb"
                                        strokeWidth="1"
                                        filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.05))"
                                    />

                                    {/* 2. Left Icon (Green Circle + Your Icon) */}
                                    <g transform="translate(8, 8)">
                                        {/* Green circle background */}
                                        <circle cx="6" cy="6" r="10" fill="#0f0f0f" />

                                        {/* Icon centered inside the circle */}
                                        <g transform="translate(-1.5, -1.5)">
                                            <RiDashboardHorizontalFill size={15} className="text-white" />
                                        </g>
                                    </g>

                                    {/* 3. The Text (Centered vertically using y="29") */}
                                    <text
                                        x="30"
                                        y="17"
                                        fill="#374151"
                                        className="text-[8px] "
                                    >
                                        SaaS Dashboards
                                    </text>
                                </g>
                            </g>
                        </svg>
                    </div>
                    
                    {/* <div className='pt-24 md:pt-32 xl:pt-32 2xl:pt-44'>
                        <svg
                            viewBox="0 0 800 400"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute lg:right-24 xl:left-55 w-full lg:w-[80%] xl:w-[70%] 2xl:w-[80%] h-full"
                        >

                     
                            <motion.path
                                d={"\n    M 40 120\n    Q 120 200 250 200\n    L 550 200\n    Q 680 200 760 120\n  "}
                                stroke="rgba(20, 20, 20.1)"
                                strokeWidth="1"
                                fill="none"
                            />

                            <g className='scale-[200%] md:scale-[150%] xl:scale-[130%] 2xl:scale-[100%]'>
                                <animateMotion
                                    dur="6s"
                                    repeatCount="indefinite"
                                    rotate="auto"
                                    path={"\n    M 40 120\n    Q 120 200 250 200\n    L 550 200\n    Q 680 200 760 120\n  "}
                                />
                            
                                <g transform="translate(-60, -15)">

                                    <rect
                                        width="77"
                                        height="28"
                                        rx="14"
                                        fill="white"
                                        stroke="#e5e7eb"
                                        strokeWidth="1"
                                        filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.05))"
                                    />

                                    <g transform="translate(8, 8)">
                                        <circle cx="6" cy="6" r="10" fill="#0f0f0f" />

                                        <g transform="translate(-1.5, -1.5)">
                                            <TbTableHeart size={15} className="text-white" />
                                        </g>
                                    </g>

                                    <text
                                        x="30"
                                        y="17"
                                        fill="#374151"
                                        className="text-[8px] "
                                    >
                                        Data Tables
                                    </text>
                                </g>
                            </g>
                        </svg>
                    </div> */}

                </div>


                <div className='pt-30 md:pt-44 xl:pt-51 2xl:pt-65'>
                    <div>
                        <svg
                            viewBox="0 0 800 400"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute lg:right-24 xl:left-55 w-full lg:w-[80%] xl:w-[70%] 2xl:w-[80%] h-full"
                        >

                            {/* Static curved lines */}
                            <motion.path
                                // d={"\n    M 40 120\n    Q 120 200 250 200\n    L 550 200\n    Q 680 200 760 120\n  "}
                                d="M 760 200 Q 680 120 550 120 L 250 120 Q 120 120 40 200"
                                stroke="rgba(20, 20, 20.1)"
                                strokeWidth="1"
                                fill="none"
                            />

                            <g className='scale-[200%] md:scale-[150%] xl:scale-[130%] 2xl:scale-[100%]'>
                                <animateMotion
                                    dur="7s"
                                    repeatCount="indefinite"
                                    rotate="auto-reverse"
                                    path="M 760 200 Q 680 120 550 120 L 250 120 Q 120 120 40 200"
                                />
                                {/* We shift the entire group so the exact center of the 180x48 pill rides the line */}
                                <g transform="translate(-60, -15)">

                                    {/* 1. The White Pill Background */}
                                    <rect
                                        width="93"
                                        height="28"
                                        rx="14"
                                        fill="white"
                                        stroke="#e5e7eb"
                                        strokeWidth="1"
                                        filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.05))"
                                    />

                                    {/* 2. Left Icon (Green Circle + Your Icon) */}
                                    <g transform="translate(8, 8)">
                                        {/* Green circle background */}
                                        <circle cx="6" cy="6" r="10" fill="#0f0f0f" />

                                        {/* Icon centered inside the circle */}
                                        <g transform="translate(-1.5, -1.5)">
                                            <PiChartDonutFill size={15} className="text-white" />
                                        </g>
                                    </g>

                                    {/* 3. The Text (Centered vertically using y="29") */}
                                    <text
                                        x="30"
                                        y="17"
                                        fill="#374151"
                                        className="text-[8px] "
                                    >
                                        Analytics Charts
                                    </text>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className='pt-20 md:pt-24 2xl:pt-30'>
                        <svg
                            viewBox="0 0 800 400"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute lg:right-24 xl:left-55 w-full lg:w-[80%] xl:w-[70%] 2xl:w-[80%] h-full"
                        >

                            {/* Static curved lines */}
                            <motion.path
                                d="M 760 200 Q 680 120 550 120 L 250 120 Q 120 120 40 200"
                                stroke="rgba(20, 20, 20.1)"
                                strokeWidth="1"
                                fill="none"
                            />

                            <g className='scale-[200%] md:scale-[150%] xl:scale-[130%] 2xl:scale-[100%]'>
                                <animateMotion
                                    dur="4s"
                                    repeatCount="indefinite"
                                    rotate="auto-reverse"
                                    path="M 760 200 Q 680 120 550 120 L 250 120 Q 120 120 40 200"
                                />
                                {/* We shift the entire group so the exact center of the 180x48 pill rides the line */}
                                <g transform="translate(-60, -15)">

                                    {/* 1. The White Pill Background */}
                                    <rect
                                        width="105"
                                        height="28"
                                        rx="14"
                                        fill="white"
                                        stroke="#e5e7eb"
                                        strokeWidth="1"
                                        filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.05))"
                                    />

                                    {/* 2. Left Icon (Green Circle + Your Icon) */}
                                    <g transform="translate(8, 8)">
                                        {/* Green circle background */}
                                        <circle cx="6" cy="6" r="10" fill="#0f0f0f" />

                                        {/* Icon centered inside the circle */}
                                        <g transform="translate(-1.5, -1.5)">
                                            <TbBackground size={15} className="text-white" />
                                        </g>
                                    </g>

                                    {/* 3. The Text (Centered vertically using y="29") */}
                                    <text
                                        x="30"
                                        y="17"
                                        fill="#374151"
                                        className="text-[8px]"
                                    >
                                        Background Effects
                                    </text>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className='pt-20 md:pt-24 2xl:pt-30'>
                        <svg
                            viewBox="0 0 800 400"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute lg:right-24 xl:left-55 w-full lg:w-[80%] xl:w-[70%] 2xl:w-[80%] h-full"
                        >

                            {/* Static curved lines */}
                            <motion.path
                                d="M 760 200 Q 680 120 550 120 L 250 120 Q 120 120 40 200"
                                stroke="rgba(20, 20, 20.1)"
                                strokeWidth="1"
                                fill="none"
                            />

                            <g className='scale-[200%] md:scale-[150%] xl:scale-[130%] 2xl:scale-[100%]'>
                                <animateMotion
                                    dur="4s"
                                    repeatCount="indefinite"
                                    rotate="auto-reverse"
                                    path="M 760 200 Q 680 120 550 120 L 250 120 Q 120 120 40 200"
                                />
                                {/* We shift the entire group so the exact center of the 180x48 pill rides the line */}
                                <g transform="translate(-60, -15)">

                                    {/* 1. The White Pill Background */}
                                    <rect
                                        width="95"
                                        height="28"
                                        rx="14"
                                        fill="white"
                                        stroke="#e5e7eb"
                                        strokeWidth="1"
                                        filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.05))"
                                    />

                                    {/* 2. Left Icon (Green Circle + Your Icon) */}
                                    <g transform="translate(8, 8)">
                                        {/* Green circle background */}
                                        <circle cx="6" cy="6" r="10" fill="#0f0f0f" />

                                        {/* Icon centered inside the circle */}
                                        <g transform="translate(-1.5, -1.5)">
                                            <BsInputCursorText size={15} className="text-white" />
                                        </g>
                                    </g>

                                    {/* 3. The Text (Centered vertically using y="29") */}
                                    <text
                                        x="30"
                                        y="17"
                                        fill="#374151"
                                        className="text-[8px]"
                                    >
                                        Text Animations
                                    </text>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default VibeHeroAnimation