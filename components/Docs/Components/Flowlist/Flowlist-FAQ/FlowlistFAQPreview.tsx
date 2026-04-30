"use client"

import { Manrope } from "next/font/google";
import { motion } from 'framer-motion';
import OrbitBorder from "@/public/Components/TheOrbitBorderCode/OrbitBorder";
import Flowlist from "@/public/Components/Flowlist/Flowlist";

const FeaturesBTN = Manrope({
    weight: '400', // Specify the font weight if needed  
    subsets: ['latin']
});

const FeaturesTagline = Manrope({
    weight: '600', // Specify the font weight if needed  
    subsets: ['latin']
});

function FlowlistFAQPreview() {

    const faqItems = [
        {
            id: 1,
            title: 'What is React Vibe?',
            description: 'React Vibe is a collection of production-ready React components designed to help developers ship high-quality, interactive user interfaces faster without spending time building everything from scratch.'
        },
        {
            id: 2,
            title: 'How is React Vibe different from other UI libraries?',
            description: 'Unlike traditional UI libraries that provide static components, React Vibe focuses on delivering components with built-in animations and polished interactions, making them feel closer to final product UI.'
        },
        {
            id: 3,
            title: 'Do I need to install any package to use React Vibe?',
            description: 'No, React Vibe does not require a dedicated package installation. You can directly copy and use components, as long as your project includes required dependencies like Framer Motion.'
        },
        {
            id: 4,
            title: 'Is React Vibe beginner-friendly?',
            description: 'React Vibe is best suited for developers who already understand React basics. It is designed to help you move faster, not to teach core concepts from scratch.'
        },
        {
            id: 5,
            title: 'Can I customize the components?',
            description: 'Yes, all components are fully customizable since you are working with real code. You can modify styles, structure, and behavior based on your project requirements.'
        },
        {
            id: 6,
            title: 'Is React Vibe suitable for production use?',
            description: 'Yes, React Vibe components are built for real-world applications and can be used in production projects, provided they are properly integrated and tested within your system.'
        },
        {
            id: 7,
            title: 'Does React Vibe work with Next.js?',
            description: 'Yes, React Vibe works seamlessly with Next.js and other modern React frameworks, making it easy to integrate into both client-side and server-rendered applications.'
        },
        {
            id: 8,
            title: 'Will animations affect performance?',
            description: 'Animations are optimized, but performance depends on usage. When applied properly, they enhance user experience, but excessive animations can negatively impact performance.'
        },
        {
            id: 9,
            title: 'Is React Vibe better than building components from scratch?',
            description: 'React Vibe is better for speed and efficiency, allowing you to ship faster. However, building from scratch is more beneficial if your goal is to deeply learn UI development and animation systems.'
        },
        {
            id: 10,
            title: 'Who should use React Vibe?',
            description: 'React Vibe is ideal for SaaS founders, indie hackers, and developers who want to build polished, production-ready interfaces quickly without compromising on quality.'
        }
    ];
    return (

        <div className="xl:mt-[100px] mt-[50px] flex flex-col gap-5 md:flex-row md:px-[20px] lg:px-[2px] md:items-center max-w-4xl mx-auto">
            <div className='flex flex-col justify-center items-center md:justify-start md:items-start'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{
                        once: true,
                        amount: 0.2, // Trigger when 20% visible
                        margin: "50px"
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                        delay: 0.4

                    }}
                >
                    <OrbitBorder
                        rotate={0}
                        padding={1}
                        rounded={120}
                        className='bg-[#ffffff] rounded-[120px] p-2 text-black px-2 text-[11px]'
                        RingColors={["#edeef0", "#ffffff", "#ffffff", "#edeef0"]} // Custom colors for the orbit
                        style={{
                            boxShadow: `
                        0px 12px 40px rgba(60, 80, 180, 0.08),
                        0px 20px 60px rgba(0, 0, 0, 0.05)
                     `,
                        }}
                    >
                        The FAQ
                    </OrbitBorder>
                </motion.div>
                <div className='flex flex-col items-center justify-center md:items-start md:justify-start px-0 gap-2 '>
                    <motion.div
                        initial={{ opacity: 0 }}
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
                    >
                        <h1 className={`${FeaturesTagline.className} text-black xl:text-5xl xl:max-w-xl md:max-w-[500px] md:text-[26px] lg:text-[29px] max-w-[400px] text-4xl text-center md:text-start min-[320px]:text-[31px] min-[375px]:text-[36px] min-[425px]:text-[39px] px-2`}>Got Questions? We’ve Got Answers</h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
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
                        <p className={`${FeaturesBTN.className} text-black/70 md:text-[16px] xl:text-lg text-center md:text-start md:max-w-[400px] text-lg max-w-[400px] min-[320px]:text-[15px] min-[375px]:text-[18px] min-[425px]:text-[20px] px-2`}>Everything you need to know, explained clearly and simply.</p>
                    </motion.div>

                </div>
            </div>

            <div className='border-[0px] border-[#131925] p-4 rounded-[10px] bg-[#fbfbfb] max-w-sm mx-auto'>
                <Flowlist
                    items={faqItems}
                    onItemSelect={(item, index) => console.log(item, index)}
                    showGradients={true}
                    enableArrowNavigation={true}
                />
            </div>
        </div>

    )
}

export default FlowlistFAQPreview