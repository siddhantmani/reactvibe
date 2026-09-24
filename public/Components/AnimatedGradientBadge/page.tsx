import React from 'react'
import OrbitBorder from '../TheOrbitBorderCode/OrbitBorder'
import AnimatedGradientBadge from './AnimatedGradientBadge'

function page() {
    return (
        <div className='flex justify-center items-center h-full border'>
            <OrbitBorder
                as="div"
                rotate={0}
                padding={2} 
                rounded={50}
                className='bg-white rounded-full p-[2px] text-slate-900'
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
                    gradients={[
                        ["#ffffff", "#e9d5ff", "#fce7f3"],
                        ["#ffffff", "#bae6fd", "#e0f2fe"],
                        ["#ffffff", "#fef08a", "#ffedd5"],
                    ]}
                    className='flex items-center gap-3 justify-center rounded-full px-6 py-3 bg-white'
                >
                    <h1 className="font-semibold text-[15px] text-slate-800 whitespace-nowrap">
                        Schedule Demo
                    </h1>
                </AnimatedGradientBadge>
            </OrbitBorder>
        </div>
    )
}

export default page