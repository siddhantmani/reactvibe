import React from 'react'
import OrbitBorder from './OrbitBorder'

export default function Page() {
    return (
        <div>
            <OrbitBorder
                rotate={0}
                padding={2}
                rounded={12}
                className='bg-[#ffffff] rounded-[12px] p-3 text-black px-5'
                RingColors={["#0a52f0", "#ffffff", "#f5e2ae", "#dcd7fc"]}
                style={{
                    boxShadow: `
                        0px 12px 40px rgba(60, 80, 180, 0.08),
                        0px 20px 60px rgba(0, 0, 0, 0.05)
                     `,
                }}
            >
                The Orbit Border
            </OrbitBorder>
        </div>
    )
}