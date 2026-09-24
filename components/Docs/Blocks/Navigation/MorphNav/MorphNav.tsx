"use client"

import { motion } from 'framer-motion'

import { useEffect, useState } from "react";
import Link from 'next/link';
import { manrope } from '@/lib/fonts';
import OrbitBorderGlobalPreview from '@/components/Docs/Components/Orbit-Border/OrbitBorder';
import AnimatedGradientBadge from '@/components/AnimatedGradientBadge';

const menuItems = [
    { subMenu: 'Platform', subMenu_key: 'platform', link: '#' },
    { subMenu: 'Solutions', subMenu_key: 'solutions', link: '#' },
    { subMenu: 'Ethics', subMenu_key: 'ethics', link: '#' },
    { subMenu: 'Enterprise', subMenu_key: 'enterprise', link: '#' },
];

export const fadeInUp = (delay = 0) => ({
    hidden: {
        opacity: 0,
        y: 20,
        filter: "blur(2px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.50,
            delay,
        },
    },
});

function MorphNav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        onScroll();
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        e.preventDefault();
        const targetId = link.replace('#', '');
        const el = document.getElementById(targetId);
        if (el) {
            const offset = 80;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <nav className='dark:bg-[#0c0c0c]'>
            <motion.div
                animate={{
                    width: scrolled ? "900px" : "100%",
                    y: scrolled ? 12 : 0,
                }}
                transition={{
                    duration: 0.35,
                    ease: "easeOut",
                }}
                className={`
        mx-auto
        flex items-center justify-between
        px-6 py-3
        rounded-full
        transition-all duration-300 max-w-[70%] w-full
        ${scrolled
                        ? "bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl"
                        : "bg-transparent border border-transparent"
                    }
    `}
            >
                <motion.div
                    variants={fadeInUp(0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                >
                    <div className='flex items-center gap-3'>
                        <h1 className={`${manrope.className} font-medium text-[21px] dark:text-white text-black`}>Cognito AI</h1>
                    </div>
                </motion.div>

                <div>
                    <ul className={`${manrope.className} dark:text-white text-black font-normal flex-row flex items-center gap-10 @xl:gap-7 @md:text-[13px] @xl:text-[14px]`}>
                        {menuItems.map((item) => (
                            <motion.li
                                key={item.subMenu_key}
                                className="cursor-pointer @md:text-xs @lg:text-[12px] @xl:text-[14px]"
                                variants={fadeInUp(0.1)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                            >
                                <Link href={item.link} onClick={(e) => handleScroll(e, item.link)}>
                                    {item.subMenu}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </div>


                <motion.div
                    variants={fadeInUp(0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    className='space-x-2 flex items-center'
                >
                    <Link href="#">
                        <div className=' max-w-36 mx-auto mr-2'>
                            <OrbitBorderGlobalPreview
                                as="div"
                                rotate={0}
                                padding={2} // Keep the border thin and elegant
                                rounded={50}
                                className='bg-white rounded-full p-[2px] text-slate-900' // Changed to white background
                                // Rotating ring uses the pastel palette + white for a shining effect
                                RingColors={["#c4b5fd", "#ffffff", "#bae6fd", "#fbcfe8", "#ffffff", "#fef08a"]}
                                style={{
                                    boxShadow: `
            0px 12px 40px rgba(196, 181, 253, 0.15),
            0px 20px 60px rgba(0, 0, 0, 0.05)
        `,
                                }}
                            >
                                <AnimatedGradientBadge
                                    duration={3}
                                    rotationDuration={7}
                                    // Very subtle, pearlescent inner gradients to keep it clean but not entirely flat
                                    gradients={[
                                        ["#ffffff", "#e9d5ff", "#fce7f3"],
                                        ["#ffffff", "#bae6fd", "#e0f2fe"],
                                        ["#ffffff", "#fef08a", "#ffedd5"],
                                    ]}
                                    className='flex items-center gap-3 justify-center rounded-full px-6 py-3 bg-white'
                                >
                                    <h1 className={`${manrope.className} font-semibold text-[15px] text-slate-800 whitespace-nowrap`}>
                                        Schedule Demo
                                    </h1>
                                </AnimatedGradientBadge>
                            </OrbitBorderGlobalPreview>
                        </div>
                    </Link>

                </motion.div>
            </motion.div>
        </nav>

    )
}

export default MorphNav