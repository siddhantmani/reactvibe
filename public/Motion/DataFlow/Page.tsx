import React from 'react'
import DataFlow from './DataFlow'

function Page() {
    return (
        <div>
            <DataFlow
                leftGap={15}
                rightGap={15}
                // left
                leftpathColor="#4b5563"
                leftparticleColor="#ef4444"
                leftparticleSpeed={2.5}
                leftpathWidth={1.5}
                leftparticleSize={4}
                // right
                rightpathColor="#4b5563"
                rightparticleColor="#10b981"
                rightparticleSpeed={2.5}
                rightpathWidth={1.5}
                rightparticleSize={4}
            />
        </div>
    )
}

export default Page