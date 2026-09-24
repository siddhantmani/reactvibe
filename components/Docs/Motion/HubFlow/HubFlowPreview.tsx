import React from 'react'
import HubFlow from './HubFlow'

function HubFlowPreview() {
    return (
        <div>
            <HubFlow
                curveTopGap={8}        // Space between the top outer pills and the start of the curves
                curveBottomGap={8}     // Space between the bottom outer pills and the end of the curves
                gap={0}                // Adjust this to pull paths away from or overlap with the central pill
                pillGap={130}          // The horizontal spacing between the top pills
                pillRadius={10}       // Make it 16 for a rounded rectangle, 999 for fully rounded
                topCurve={120}         // The vertical drop distance before the lines sweep to the center
                bottomCurve={120}      // The vertical drop distance after the lines leave the center
                particleColor="#eb1c2d" // E.g., Red
                bottomParticleColor="#10b981" //E.g., Cyan
                particleSpeed={2.5}     // Seconds it takes for a particle to travel the path
                particleLength={16}    // The width of the moving dash
                particleWeight={2}     // The thickness of the moving dash
                particleCurve={1.5}    // Border radius of the moving dash
            />
        </div>
    )
}

export default HubFlowPreview