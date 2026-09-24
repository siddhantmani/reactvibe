import React from 'react'
import Signal from './Signal'

function Page() {
    return (
        <div>
            <Signal
                leftGap={5}
                rightGap={10}

                // left
                leftpathColor="#4b5563"
                leftparticleColor="#ef4444"
                leftparticleSpeed={3}
                leftpathWidth={0.3}
                leftparticleSize={2}
                leftParticleDelay={0}

                // right
                rightpathColor="#4b5563"
                rightparticleColor="#10b981"
                rightparticleSpeed={3}
                rightpathWidth={0.3}
                rightparticleSize={2}
                rightParticleDelay={3} 
            />
        </div>
    )
}

export default Page