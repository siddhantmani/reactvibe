import React from 'react'
import HubFlow from './HubFlow'

function Page() {
    return (
        <HubFlow
            curveTopGap={8}
            curveBottomGap={8}
            gap={0}
            pillGap={130}
            pillRadius={999}
            topCurve={120}
            bottomCurve={120}
            particleColor="#eb1c2d"
            bottomParticleColor="#10b981"   
            particleSpeed={2.5}
            particleLength={16}
            particleWeight={2}
            particleCurve={1.5}
        />
    )
}

export default Page