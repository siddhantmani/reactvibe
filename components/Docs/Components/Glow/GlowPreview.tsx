import React from 'react'
import UsingGlow from './UsingGlow'
import LinearReveal from '@/components/LinearReveal'

function GlowPreview() {
    return (
        <div className='w-full'>
            <UsingGlow
                backgroundColor="#0d0d0d"
                glowColor="#7d6e45"
                glowSize="280px"
                glowOpacity={0.3}
                glowFadeAt="100%"
                borderGlow={false}
                borderGlowColor="rgba(130,100,255,0.4)"
                borderGlowSize="200px"
                borderGlowTransparency="80%"
                className="h-[500px] text-center max-w-7xl mx-auto flex items-center justify-center"
            >

                <LinearReveal
                    as={'h1'}
                    delay={0.3}
                    className='max-[426px]:text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-white/10'
                    Text='Move the cursor...'
                />

            </UsingGlow>
        </div>
    )
}

export default GlowPreview