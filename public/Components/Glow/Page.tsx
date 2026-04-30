import React from 'react'
import Glow from './Glow'

function Page() {
    return (
        <div className='w-full py-10'>
            <Glow
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
                <h1 className='max-[426px]:text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-white/10'>Move the cursor...</h1>
            </Glow>
        </div>
    )
}

export default Page