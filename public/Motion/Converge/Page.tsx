
import React from 'react'
import Converge from './Converge'

function Page() {
    return (
        <div>
            <Converge
                CurveRadius={250}         // Adjusts how sweeping the bezier curves are
                CurveWeight={1.5}         // Adjusts the thickness of the background lines
                CurcePillColor="#10b981"  // Easily change the theme accent (e.g., Cyan)
                PillSpeed={3.5}           // Adjust the seconds it takes for a particle to cross
                PillWeight={2.5}          // Thickness of the moving pill
                PillLength={14}           // Length of the moving pill
                PillRadius={1}            // Border radius of the moving pill (use half of PillWeight for fully rounded ends)
            />
        </div>
    )
}

export default Page