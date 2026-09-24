"use client"

import { Battery, Signal, Wifi } from 'lucide-react';
import React, { useState } from 'react'
import Flowlist from '../../Flowlist/Flowlist';

const notifications = [
    {
        id: 1,
        icon: '💳',
        title: 'Payment due tomorrow',
        description: 'Spotify - $10.99 will be charged tomorrow',
        time: '4:11 PM'
    },
    {
        id: 2,
        icon: '📈',
        title: 'Subscription price increased',
        description: 'Netflix increased from $15.49 to $15.99/month',
        time: '1:04 PM'
    },
    {
        id: 3,
        icon: '🔄',
        title: 'Subscriptions refreshed',
        description: 'Your subscription data was updated successfully',
        time: '12:18 PM'
    },
    {
        id: 4,
        icon: '💡',
        title: 'You could save $8/month',
        description: 'Apple One and YouTube Premium may overlap',
        time: '11:42 AM'
    },
    {
        id: 5,
        icon: '⏳',
        title: 'Trial ending soon',
        description: 'Xbox Game Pass trial ends in 3 days',
        time: '10:26 AM'
    },
    {
        id: 6,
        icon: '✅',
        title: 'Payment successful',
        description: 'Disney+ - $7.99 was charged successfully',
        time: '9:14 AM'
    },
    {
        id: 7,
        icon: '⚠️',
        title: 'Payment failed',
        description: 'Adobe Creative Cloud payment needs your attention',
        time: '8:47 AM'
    },
    {
        id: 8,
        icon: '📅',
        title: 'Renewal coming up',
        description: 'Notion Plus renews in 5 days for $10/month',
        time: 'Yesterday'
    },
    {
        id: 9,
        icon: '💰',
        title: 'Monthly spending is down',
        description: 'You spent $24 less on subscriptions this month',
        time: 'Yesterday'
    },
    {
        id: 10,
        icon: '🔔',
        title: 'Renewal reminder',
        description: 'Canva Pro renews tomorrow for $14.99',
        time: 'Yesterday'
    },
    {
        id: 11,
        icon: '📊',
        title: 'Subscription spending updated',
        description: 'You now spend $86.47/month across 9 services',
        time: 'Yesterday'
    },
    {
        id: 12,
        icon: '🎁',
        title: 'Free trial activated',
        description: 'YouTube Premium trial has started',
        time: 'Yesterday'
    },
    {
        id: 13,
        icon: '📉',
        title: 'Potential savings found',
        description: 'Downgrading Spotify could save $36/year',
        time: 'Yesterday'
    },
    {
        id: 14,
        icon: '🔐',
        title: 'Subscription account updated',
        description: 'Your payment method was updated successfully',
        time: 'Yesterday'
    },
    {
        id: 15,
        icon: '🧾',
        title: 'New invoice available',
        description: 'Figma invoice for $15.00 is ready to view',
        time: 'Yesterday'
    },
    {
        id: 16,
        icon: '🚨',
        title: 'Unusual subscription charge',
        description: 'A new $29.99 recurring charge was detected',
        time: 'Yesterday'
    },
    {
        id: 17,
        icon: '🎯',
        title: 'Budget alert',
        description: 'You are 90% of the way to your monthly limit',
        time: 'Yesterday'
    },
    {
        id: 18,
        icon: '📌',
        title: 'Subscription added',
        description: 'ChatGPT Plus was added to your subscriptions',
        time: 'Yesterday'
    },
    {
        id: 19,
        icon: '🗓️',
        title: 'Annual renewal approaching',
        description: '1Password renews in 14 days for $35.88',
        time: 'Yesterday'
    },
    {
        id: 20,
        icon: '✨',
        title: 'Monthly report is ready',
        description: 'Review your subscription spending for August',
        time: 'Yesterday'
    }
];

export default function NotificationScreenIphoneDUOPreview() {
    // 0 = completely flat, 90 = folded closed
    const [foldAngle, setFoldAngle] = useState(0)

    const now = new Date()

    const statusBarTime = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    })

    const date = now.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    })

    const displayTime = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    })

    // Calculate dynamic lighting based on the fold angle to give 3D depth
    const shadowOpacity = foldAngle / 180;

    return (
        <div className=' bg-white dark:bg-[#070809] flex flex-col justify-center items-center p-6 @md:p-12 overflow-x-hidden'>

            {/* Slider Control */}
            <div className="flex flex-col items-center w-full max-w-md mx-auto mb-16 z-50">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 bg-white dark:bg-[#111] px-4 py-2 rounded-full shadow-sm ring-1 ring-black/5 dark:ring-white/10">
                    Fold Device: {foldAngle}°
                </label>
                <input
                    type="range"
                    min="0"
                    max="90"
                    value={foldAngle}
                    onChange={(e) => setFoldAngle(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-800 accent-black dark:accent-white"
                />
            </div>

            {/* 3D Perspective Scene Container */}
            <div
                className='relative w-full max-w-[1000px] h-[600px] flex justify-center'
                style={{ perspective: '2000px' }}
            >
                {/* --- LEFT HALF --- */}
                <div
                    className="w-1/2 h-full relative z-10"
                    style={{
                        transformOrigin: 'right center',
                        transform: `rotateY(${foldAngle}deg)`,
                        transition: 'transform 0.1s ease-out' // Removed preserve-3d
                    }}
                >
                    {/* Left Hardware Button */}
                    <div className='absolute -left-[5px] top-[150px] h-14 w-[5px] bg-[#1e2530] dark:bg-[#181d26] rounded-l-[3px] border-l border-y border-[#333d4e] shadow-sm z-0' />

                    {/* Left Chassis Screen */}
                    <div className="absolute inset-0 border-y-[10px] @md:border-y-[14px] border-l-[10px] @md:border-l-[14px] border-r-0 border-[#181e28] dark:border-[#12161f] rounded-l-[46px] bg-white dark:bg-[#050505] flex flex-col justify-center items-center p-8 overflow-hidden">

                        {/* Dynamic Island - Left Split */}
                        <div className="absolute top-3 right-0 w-[115px] h-[35px] bg-black dark:bg-white/5 rounded-l-full z-30 flex items-center justify-between pl-5 pr-3 text-white border-r border-[#1a1a1a]">
                            <span className="font-semibold text-[13px] tracking-tight">{statusBarTime}</span>
                        </div>

                        {/* Content */}
                        <p className='text-lg @md:text-xl opacity-50 font-semibold dark:text-white/70 mb-2 tracking-wide'>{date}</p>
                        <h1 className='text-[65px] @lg:text-[80px] opacity-90 font-extrabold leading-none dark:text-white tracking-tighter'>{displayTime}</h1>

                        {/* Left Hinge Crease Shadow */}
                        <div className="absolute right-0 top-0 bottom-0 w-[6px] bg-gradient-to-l from-black/30 to-transparent dark:from-white/10 z-20 pointer-events-none" />

                        {/* 3D Dynamic Lighting Overlay */}
                        <div className="absolute inset-0 bg-black pointer-events-none z-40 transition-opacity duration-100" style={{ opacity: shadowOpacity }} />
                    </div>
                </div>

                {/* --- RIGHT HALF --- */}
                <div
                    className="w-1/2 h-full relative z-10"
                    style={{
                        transformOrigin: 'left center',
                        transform: `rotateY(${-foldAngle}deg)`,
                        transition: 'transform 0.1s ease-out' // Removed preserve-3d
                    }}
                >
                    {/* Right Hardware Buttons */}
                    <div className='absolute -top-[5px] right-[135px] w-12 h-[5px] bg-[#1e2530] dark:bg-[#181d26] rounded-t-[3px] border-t border-x border-[#333d4e] shadow-sm z-0' />
                    <div className='absolute -top-[5px] right-[75px] w-12 h-[5px] bg-[#1e2530] dark:bg-[#181d26] rounded-t-[3px] border-t border-x border-[#333d4e] shadow-sm z-0' />
                    <div className='absolute -right-[5px] top-[140px] h-16 w-[5px] bg-[#1e2530] dark:bg-[#181d26] rounded-r-[3px] border-r border-y border-[#333d4e] shadow-sm z-0' />

                    {/* Antenna Bands */}
                    <div className='absolute top-20 right-[14px] h-[2px] w-[18px] bg-[#0c1015]/60 dark:bg-white/20 z-30 pointer-events-none' />
                    <div className='absolute top-5 rotate-90 right-[55px] h-[2px] w-[18px] bg-[#0c1015]/60 dark:bg-white/20 z-30 pointer-events-none' />

                    {/* Right Chassis Screen */}
                    <div className="absolute inset-0 border-y-[10px] @md:border-y-[14px] border-r-[10px] @md:border-r-[14px] border-l-0 border-[#181e28] dark:border-[#12161f] rounded-r-[46px] bg-white dark:bg-[#090909] flex flex-col pt-20 pb-10 px-6 @lg:px-10 overflow-hidden">

                        {/* Dynamic Island - Right Split */}
                        <div className="absolute top-3 left-0 w-[115px] h-[35px] bg-black dark:bg-white/5 rounded-r-full z-30 flex items-center justify-between pr-5 pl-2 text-white border-l border-[#1a1a1a] ">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#0a0d13] ring-1 ring-[#393a3b] ml-1" />
                            <div className="flex items-center gap-1.5 opacity-90">
                                <Signal size={12} className="text-white" fill="currentColor" />
                                <Wifi size={12} className="text-white" />
                                <Battery size={14} className="text-white" fill="currentColor" />
                            </div>
                        </div>

                        {/* Notifications - Forced hardware acceleration for scrolling stability */}
                        <div
                            className="flex-1 overflow-hidden rounded-2xl w-full max-w-[390px] mx-auto relative z-10"
                            style={{ transform: 'translateZ(0)' }}
                        >
                            <Flowlist
                                items={notifications}
                                onItemSelect={(item, index) => console.log(item, index)}
                                showGradients={true}
                                enableArrowNavigation={true}
                                listClassName="max-h-[500px]"
                            />
                        </div>

                        {/* Right Hinge Crease Shadow */}
                        <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-gradient-to-r from-black/30 to-transparent dark:from-white/10 z-20 pointer-events-none" />

                        {/* 3D Dynamic Lighting Overlay */}
                        <div className="absolute inset-0 bg-black pointer-events-none z-40 transition-opacity duration-100" style={{ opacity: shadowOpacity }} />
                    </div>
                </div>

            </div>
        </div>
    )
}