"use client"

import React from 'react'

import {
    motion
} from "framer-motion"

const CTAButton = Manrope({
    weight: "700",
    subsets: ["latin"],
})

const MainHeading = Manrope({
    weight: "500",
    subsets: ["latin"],
})

const miniPara = Manrope({
    weight: "500",
    subsets: ["latin"],
})


const labelName = Manrope({
    weight: '400', // Specify the font weight if needed  
    subsets: ['latin']
});


const heading = Inter_Tight({
    weight: "600",
    subsets: ["latin"],
});

const letsChat = Manjari({
    weight: "700",
    subsets: ["latin"],
});

import { Inter_Tight, Manjari, Manrope } from 'next/font/google'
import Image from 'next/image'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'
import Link from 'next/link'
import { HiCheckBadge } from 'react-icons/hi2'
import OrbitBorder from '@/public/Components/TheOrbitBorderCode/OrbitBorder'
import LinearReveal from '@/components/LinearReveal'

function MonthlyYearly({ yearly, setYearly }: { yearly: boolean; setYearly: (value: boolean) => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{
                once: true,
                amount: 0.2,
                margin: "50px"
            }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.7
            }}

        >
            <div className="flex w-full justify-start">
                <div
                    className="relative flex items-center bg-[#E0E3E8] rounded-full p-1
               w-full max-w-[430px] h-[48px] overflow-hidden"
                    style={{
                        boxShadow: `
        0px 12px 40px rgba(60, 80, 180, 0.08),
        0px 20px 60px rgba(0, 0, 0, 0.05)
      `,
                    }}
                >
                    {/* Sliding background */}
                    <motion.div
                        layout
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="absolute top-1 left-1 h-[40px] w-1/2 rounded-full bg-white"
                        style={{
                            backgroundImage: `repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 2px,
          #D1D5DB 6px,
          #D1D5DB 6px
        )`,
                        }}
                        animate={{
                            x: yearly ? "96%" : "0%",
                        }}
                    />

                    {/* Monthly */}
                    <button
                        onClick={() => setYearly(false)}
                        className={`${letsChat.className}
        relative z-10 flex-1 h-[32px]
        flex items-center justify-center
        text-md text-black`}
                    >
                        Monthly
                    </button>

                    {/* Yearly */}
                    <button
                        onClick={() => setYearly(true)}
                        className={`${letsChat.className}
        relative z-10 flex-1 h-[32px]
        flex items-center justify-center
        text-md text-black`}
                    >
                        Yearly
                        <span
                            className="ml-2 text-[10px] whitespace-nowrap
                   px-2 py-1 rounded bg-[#d7dade] text-black"
                        >
                            SAVE 25%
                        </span>
                    </button>
                </div>
            </div>

        </motion.div>
    )
}


function PrimePreview() {
    const [yearly, setYearly] = React.useState(false)

    const plans = [
        {
            name: "Basic",
            price: yearly ? "$0/yr" : "$0/mo",
            subtitle: "Only essentials plan",
            features: [
                "Unlimited tracked subscriptions",
                "Flexible payment options",
                "Monthly spending summary",
                "Real-time analytics and reporting",
                "Advanced data analytics"
            ],
            button: "Get Start for Free",
        },
        {
            name: "Pro",
            price: yearly ? "$891/yr" : "$99/mo",
            subtitle: "For large teams and enterprises",
            features: [
                "Everything in Pro",
                "AI cancellation assistant",
                "Renewal predictions",
                "Multi-currency support",
                "Export and integrations",
            ],
            button: "Get Started"
        },
    ]
    return (

        <div className='flex flex-col xl:flex xl:flex-row justify-center xl:px-2 lg:px-5 md:px-3 space-y-10'>
            <div className='lg:max-w-[100%] flex flex-col md:flex-row md:items-center lg:flex-col lg:items-start xl:flex-col xl:items-start justify-between px-3 space-y-16 md:space-y-0'>
                <div className='space-y-2'>
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(8px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        whileInView={{ opacity: 1 }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                            margin: "50px"
                        }}
                        transition={{
                            duration: 1.2,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            delay: 0.6
                        }}
                        className="" // Add width and centering here
                    >
                        <OrbitBorder
                            rotate={0}
                            padding={2}
                            rounded={50}
                            className='bg-[#e6ebe7] rounded-full p-1 text-white'
                            RingColors={["#d2d6d3, #ffffff, #ffffff, #ffffff, #d2d6d3"]}
                            style={{
                                boxShadow: `
                                                                  0px 12px 40px rgba(60, 80, 180, 0.08),
                                                                  0px 20px 60px rgba(0, 0, 0, 0.05)
                                                                `,
                            }}
                        >
                            <div
                                style={{
                                    background: `
                          linear-gradient(
                            180deg,
                            #e6ebe7 100%,
                            #e6ebe7 100%,
                            #e6ebe7 100%
                            )
                        `,
                                    boxShadow: `
                            0px 24px 48px rgba(13, 12, 12 0.45),
                            inset 7px 7px 31px rgba(18, 17, 17, 0.35),
                            inset 2px 2px 20px rgba(13, 12, 12, 0.25)
                          `,
                                    borderImage: "linear-gradient(180deg, #141414, #121111) 1"
                                }}
                                className='flex items-center gap-3 rounded-full px-2 py-1'
                            >
                                <h1 className={`${labelName.className} text-[10px] text-black whitespace-nowrap`}>PRICING</h1>
                            </div>
                        </OrbitBorder>
                    </motion.div>
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
                            delay: 0.6
                        }}
                        className='flex flex-col justify-start items-start'
                    >
                        <h1 className={`${heading.className} text-[#454B57] xl:text-5xl lg:text-5xl md:text-5xl text-5xl md:max-w-[70%] lg:max-w-[100%] xl:max-w-[100%] pb-2`}>Simple pricing. Real value.</h1>
                    </motion.div>
                    <MonthlyYearly yearly={yearly} setYearly={setYearly} />
                </div>

                <Link href="https://x.com/_siddhantmani" target='_blank' className='hidden xl:inline-block xl:scale-[93%]'>

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
                            delay: 0.6
                        }}
                        className=' relative flex items-center lg:w-[130%] gap-3 bg-white p-2 rounded-2xl cursor-pointer'
                        whileHover="hover"
                    >
                        <motion.div
                            className='absolute right-2 top-2'
                            initial={{ opacity: 0, rotate: 45 }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                    rotate: -10,
                                    transition: {
                                        duration: 0.30,
                                        ease: "easeInOut"
                                    }
                                }
                            }}
                        >
                            <BsArrowUpRightCircleFill className='xl:size-[30px]' />
                        </motion.div>
                        <div className='flex items-center gap-2'>
                            <Image
                                src="https://pbs.twimg.com/profile_images/1995720538011189248/ZwLlyovt_400x400.jpg"
                                height={1000}
                                width={1000}
                                alt='alt image'
                                className='h-[60px] md:h-[50px] lg:h-[60px] xl:h-[70px] w-full rounded-lg'
                            />
                        </div>
                        <div>
                            <h1 className={`${letsChat.className} md:text-[14px] xl:text-[18px] text-[#454B57]`}>Needed a custom plan?</h1>
                            <p className={`${letsChat.className} md:text-[12px] xl:text-[14px] text-[#707681]`}>Let&#39;s talk</p>
                        </div>
                    </motion.div>
                </Link>
            </div>
            <div className="w-full flex flex-col items-center justify-center px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
                    {plans.map((plan, index) => {
                        const isBasic = plan.name === "Basic"
                        const isPro = plan.name === "Pro"

                        if (isBasic) {
                            // Basic plans
                            return (
                                <motion.div
                                    key={plan.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative rounded-2xl border border-gray-200 bg-white text-gray-900 p-3 flex flex-col shadow-sm"
                                >

                                    <div className='bg-[#F4F4F6] p-3 px-5 rounded-2xl relative overflow-hidden'>
                                        <motion.div
                                            initial={{ opacity: 0, filter: "blur(8px)" }}
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
                                        >
                                            <LinearReveal
                                                text={plan.name}
                                                as={'h3'}
                                                className={`${MainHeading.className} text-2xl text-[#454B57]`}
                                            />
                                        </motion.div>


                                        <motion.div
                                            initial={{ opacity: 0, filter: "blur(8px)" }}
                                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                            viewport={{
                                                once: true,
                                                amount: 0.2,
                                                margin: "50px"
                                            }}
                                            transition={{
                                                duration: 1.2,
                                                ease: [0.25, 0.46, 0.45, 0.94],
                                                delay: 0.3
                                            }}
                                        >
                                            <p className={`${miniPara.className} md:text-[13px] xl:text-[12px] lg:text-sm text-[#454B5780]`}>
                                                {plan.subtitle}
                                            </p>
                                        </motion.div>

                                        <motion.p
                                            key={plan.price}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className={` ${MainHeading.className} text-3xl mt-2 text-[#454B57]`}
                                        >
                                            <LinearReveal
                                                text={plan.price}
                                                as="span"
                                            />
                                        </motion.p>



                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, filter: "blur(8px)" }}
                                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                        viewport={{
                                            once: true,
                                            amount: 0.2,
                                            margin: "50px"
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            ease: [0.25, 0.46, 0.45, 0.94],
                                            delay: 0.4
                                        }}
                                    >
                                        <ul className="mt-3 md:px-0 lg:px-3 xl:px-3 space-y-5 text-sm text-gray-700 py-5">
                                            {plan.features.map((f, i) => (
                                                <li key={i} className={`${miniPara.className} flex items-center`}>
                                                    <span className="mr-2 text-lg">
                                                        <HiCheckBadge
                                                            style={{
                                                                boxShadow: `
                                           0px 12px 40px rgba(60, 80, 180, 0.08),
                                           0px 20px 60px rgba(0, 0, 0, 0.05)
                                      `,
                                                            }}
                                                            className="h-4 w-4 text-[#454B57]"
                                                        />
                                                    </span>
                                                    <span className={`${miniPara.className} md:text-[13px] lg:text-[13px] xl:text-sm text-[#454B57]`}>{f}</span>


                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    {/* button */}
                                    <motion.div
                                        initial={{ opacity: 0, filter: "blur(8px)" }}
                                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                        viewport={{
                                            once: true,
                                            amount: 0.2,
                                            margin: "50px"
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            ease: [0.25, 0.46, 0.45, 0.94],
                                            delay: 0.5
                                        }}
                                    >
                                        <motion.div
                                            initial={{ width: "100%" }}
                                            variants={{
                                                hover: {
                                                    width: "85%",
                                                    transition: {
                                                        duration: 0.3,
                                                        ease: "easeInOut"
                                                    }
                                                }
                                            }}
                                            whileHover="hover"
                                            className="mt-2 xl:px-4"
                                        >
                                            <motion.button
                                                whileHover="hover"
                                                style={{
                                                    boxShadow: `
                                           0px 12px 40px rgba(60, 80, 180, 0.08),
                                           0px 20px 60px rgba(0, 0, 0, 0.05)
                                      `,
                                                }}
                                                className={`${CTAButton.className} text-[#454B57] flex items-center justify-center p-3 gap-1 rounded-full cursor-pointer hover:scale-110 transition-transform duration-150 ease-in-out px-5 w-full text-center border border-[#e4e4e6] whitespace-nowrap`}>
                                                {plan.button} →
                                            </motion.button>

                                            <motion.div
                                                className='absolute right-2 top-2'
                                                initial={{ opacity: 0, rotate: 45 }}
                                                variants={{
                                                    hover: {
                                                        opacity: 1,
                                                        rotate: -10,
                                                        transition: {
                                                            duration: 0.50,
                                                            // ease: "easeInOut"
                                                        }
                                                    }
                                                }}
                                            >

                                                <BsArrowUpRightCircleFill className='xl:size-[45px] fill-black' />
                                            </motion.div>

                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            )
                        }

                        // Enterprice

                        if (isPro) {
                            return (
                                <motion.div
                                    style={{
                                        background: `
                  radial-gradient(
                    circle at 50% 80%,
                    rgba(255,255,255,0.45),
                    rgba(160,160,160,0.25) 0%,
                    rgba(40,40,40,0.6) 0%,
                    #0a0a0a 78%
                  )
                `,
                                        boxShadow: `
                  0 40px 80px rgba(0,0,0,0.9),
                  inset 0 3px 6px rgba(255,255,255,0.35),
                  inset 0 -20px 30px rgba(0,0,0,0.95)
                `
                                    }}
                                    key={plan.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative rounded-2xl border border-gray-200 bg-white text-gray-900 p-3 flex flex-col shadow-sm"
                                >
                                    {/* Diagonal lines background */}
                                    <div
                                        style={{
                                            background: `
                  radial-gradient(
                    circle at 50% 80%,
                    rgba(255,255,255,0.45),
                    rgba(160,160,160,0.25) 0%,
                    rgba(40,40,40,0.6) 0%,
                    #0a0a0a 78%
                  )
                `,
                                            boxShadow: `
                  0 40px 80px rgba(0,0,0,0.9),
                  inset 0 3px 6px rgba(255,255,255,0.35),
                  inset 0 -20px 30px rgba(0,0,0,0.95)
                `
                                        }}
                                        className=' p-3 px-5 rounded-2xl relative overflow-hidden'>
                                        {/* Diagonal lines background */}
                                        <div
                                            className="absolute inset-0 opacity-[0.15] border-white "
                                            style={{
                                                backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 10px,
                #D1D5DB 10px,
                #D1D5DB 11px
            )`
                                            }}
                                        />

                                        {/* Content with relative positioning to appear above lines */}
                                        <div className="relative z-10">
                                            <motion.div
                                                initial={{ opacity: 0, filter: "blur(8px)" }}
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
                                            >
                                                <LinearReveal
                                                    text={plan.name}
                                                    as={'h3'}
                                                    className={`${MainHeading.className} text-2xl text-[#ffffff]`}
                                                />
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                                viewport={{
                                                    once: true,
                                                    amount: 0.2,
                                                    margin: "50px"
                                                }}
                                                transition={{
                                                    duration: 1.2,
                                                    ease: [0.25, 0.46, 0.45, 0.94],
                                                    delay: 0.3
                                                }}
                                            >
                                                <p className={`${miniPara.className} md:text-[13px] xl:text-sm lg:text-sm text-[#ffffff]`}>
                                                    {plan.subtitle}
                                                </p>
                                            </motion.div>


                                            <motion.p
                                                key={plan.price}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.3 }}
                                                className={` ${MainHeading.className} mt-2 text-3xl text-white`}
                                            >
                                                <LinearReveal
                                                    text={plan.price}
                                                    as="span"
                                                />
                                            </motion.p>

                                        </div>
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0, filter: "blur(8px)" }}
                                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                        viewport={{
                                            once: true,
                                            amount: 0.2,
                                            margin: "50px"
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            ease: [0.25, 0.46, 0.45, 0.94],
                                            delay: 0.4
                                        }}
                                    >
                                        <ul className="mt-3 space-y-3 text-sm text-gray-700 py-5 md:px-2 xl:px-4 lg:px-4">
                                            {plan.features.map((f, i) => (
                                                <li key={i} className={`${miniPara.className} flex items-center items-start text-[#454B57]`}>
                                                    <span className="mr-2 text-lg">
                                                        <HiCheckBadge
                                                            style={{
                                                                boxShadow: `
                                           10px 22px 140px rgba(60, 80, 180, 0.08),
                                           10px 30px 160px rgba(0, 0, 0, 0.05)
                                      `,
                                                            }}
                                                            className="h-5 w-5 shadow-2xl md:size-[25px]  p-1 rounded-full fill-white"
                                                        />
                                                    </span>
                                                    <span className={`${miniPara.className} md:text-[13px] lg:text-[13px] xl:text-sm text-[#ffffff]`}>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>


                                    {/* button */}
                                    <motion.div
                                        initial={{ opacity: 0, filter: "blur(8px)" }}
                                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                        viewport={{
                                            once: true,
                                            amount: 0.2,
                                            margin: "50px"
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            ease: [0.25, 0.46, 0.45, 0.94],
                                            delay: 0.5
                                        }}
                                    >
                                        <motion.div
                                            className="mt-2 px-4 flex justify-items-center items-center"
                                            initial={{ width: "100%" }}
                                            variants={{
                                                hover: {
                                                    width: "85%",
                                                    transition: {
                                                        duration: 0.3,
                                                        ease: "easeInOut"
                                                    }
                                                }
                                            }}
                                            whileHover="hover"
                                        >
                                            <motion.button
                                                whileHover="hover"
                                                style={{
                                                    background: `
                  radial-gradient(
                    circle at 0% 0%,
                    rgba(255,255,255),
                    rgba(255, 255, 255) 100%,
                    rgba(255, 255, 255) 100%,
                    #ffffff 100%
                  )
                `,
                                                    boxShadow: `
                  0 40px 80px rgba(0,0,0,0.9),
                  inset 0 3px 6px rgba(255,255,255,0.35),
                  inset 0 -20px 30px rgba(255, 255, 255)
                `
                                                }}
                                                className={`${CTAButton.className} text-black flex items-center justify-center p-3 gap-1 rounded-full cursor-pointer hover:scale-110 transition-transform duration-150 ease-in-out px-5 w-full text-center`}>
                                                {plan.button} →
                                            </motion.button>

                                            <motion.div
                                                className='absolute right-2 top-2'
                                                initial={{ opacity: 0, rotate: 45 }}
                                                variants={{
                                                    hover: {
                                                        opacity: 1,
                                                        rotate: -10,
                                                        transition: {
                                                            duration: 0.50,
                                                            // ease: "easeInOut"
                                                        }
                                                    }
                                                }}
                                            >

                                                <BsArrowUpRightCircleFill className='xl:size-[45px] fill-white' />
                                            </motion.div>

                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            )
                        }
                    })}
                </div >
            </div>

            <Link href="https://x.com/_siddhantmani" target='_blank' className='xl:hidden px-4 max-w-[60%]'>

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
                        delay: 0.6
                    }}
                    className=' relative flex items-center lg:w-[130%] gap-3 bg-white p-2 rounded-2xl cursor-pointer'
                    whileHover="hover"
                >
                    <motion.div
                        className='absolute right-2 top-2'
                        initial={{ opacity: 0, rotate: 45 }}
                        variants={{
                            hover: {
                                opacity: 1,
                                rotate: -10,
                                transition: {
                                    duration: 0.30,
                                    ease: "easeInOut"
                                }
                            }
                        }}
                    >
                        <BsArrowUpRightCircleFill className='xl:size-[30px]' />
                    </motion.div>
                    <div className='flex items-center gap-2'>
                        <Image
                            src="https://pbs.twimg.com/profile_images/1995720538011189248/ZwLlyovt_400x400.jpg"
                            height={1000}
                            width={1000}
                            alt='alt image'
                            className='h-[60px] md:h-[50px] lg:h-[60px] xl:h-[70px] w-full rounded-lg'
                        />
                    </div>
                    <div>
                        <h1 className={`${letsChat.className} md:text-[14px] xl:text-[18px] text-[#454B57]`}>Needed a custom plan?</h1>
                        <p className={`${letsChat.className} md:text-[12px] xl:text-[14px] text-[#707681]`}>Let&#39;s talk</p>
                    </div>
                </motion.div>
            </Link>
        </div>

    )
}

export default PrimePreview