"use client"

import { GitPullRequest, Link, Mail, Settings, Sparkles } from 'lucide-react'
import React from 'react'

import { motion } from "framer-motion"
const steps = [
    {
        icon: <Link size={15} />,
        title: 'Copy Paste React Components',
        subtitle: 'No React Vibe install',
    },
    {
        icon: <Sparkles size={15} />,
        title: 'React Animation Library',
        subtitle: 'Built with motion',
    },
    {
        icon: <Settings size={15} />,
        title: 'Customizable React Components',
        subtitle: 'Full code control',
    },
    {
        icon: <Mail size={15} />,
        title: 'Production Ready React UI',
        subtitle: 'Built for real apps',
    },
    {
        icon: <GitPullRequest size={15} />,
        title: 'Open Source React Library',
        subtitle: 'Free & extensible',
    },
]

function USPSteps() {
    return (
        <div className="w-full py-4 xl:mt-10">
            <div className="flex items-center flex-wrap gap-2">
                {steps.map((step, index) => (
                    <React.Fragment key={step.title}>
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
                                delay: 0.2 * index
                            }}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-full 
                            dark:bg-gradient-to-r from-[#0b0b0b] from-[33%] to-[#131212] border border-border 
                            hover:bg-accent hover:border-primary/40
                            transition-all duration-300 group cursor-default">

                            {/* Icon bubble */}
                            <div className="flex items-center justify-center w-8 h-8 rounded-full 
                                bg-background text-primary 
                                group-hover:bg-primary/10 group-hover:text-primary 
                                transition-all duration-300">
                                {step.icon}
                            </div>

                            {/* Text */}
                            <div className="flex flex-col">
                                <span className="text-[13px] font-semibold text-foreground leading-tight tracking-tight">
                                    {step.title}
                                </span>
                                <span className="text-[11px] text-muted-foreground leading-tight">
                                    {step.subtitle}
                                </span>
                            </div>
                        </motion.div>

                        {index < steps.length - 1 && (
                            <span className="w-1 h-1 rounded-full bg-border hidden sm:block" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default USPSteps