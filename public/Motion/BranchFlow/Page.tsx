import React from 'react'
import BranchFlow from './BranchFlow'

function Page() {
    return (
        <div>
            <BranchFlow
                curve={120}                 // Controls the sweep/arch of the bezier curve
                topGap={0}                  // Gap between the top block and the curve start
                bottomGap={0}               // Gap between the bottom blocks and the curve end
                curveColor=""               // Leaves adaptive styling, or override with hex (e.g., "#d1d5db")
                particleSpeed={2.5}         // Seconds it takes for a particle to travel the path
                particleColor="#f97316"     // Particle color (defaults to orange)
                particleLength={12}         // Length of the moving particle dash
                particleRadius={1.25}       // Border radius of the moving particle dash
                particleWeight={2.5}        // Thickness/weight of the moving particle dash
            />
        </div>
    )
}

export default Page