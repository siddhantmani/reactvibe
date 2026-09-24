import React from 'react'
import Nexus from './Nexus'

function NexusPreview() {
    return (
        <div className="bg-gray-50 dark:bg-black p-4 @md:p-10 flex items-center justify-center">

            <div className="w-full max-w-5xl">
                <Nexus
                    // To use images, pass them like this:
                    // icons={[
                    //    <Image key="zap" src={zAPIERimg} alt="Zapier" width={48} height={48} />,
                    //    <Image key="slack" src={SlacIMG} alt="Slack" width={48} height={48} />,
                    //    ... 4 more images
                    // ]}

                    curve={150}                 // Controls the bezier curve sweep for the 4 corner lines
                    centerGapX={70}             // How far the side lines stop from the center
                    centerGapY={30}             // How far the top/bottom lines stop from the center
                    nodeGap={40}                // How far the lines start from the outer nodes
                    curveColor="#ffffff"        // Color of the background bezier curves
                    particleSpeed={3}           // Duration of one particle loop
                    particleColor="#ffffff"     // Color of the traveling particle
                    particleLength={12}         // Length of the dash (use 4-8 for dots)
                    particleRadius={2}          // Border radius of the particle
                    particleWeight={2}          // Thickness of the particle
                    strokeWidth={1.5}           // Thickness of the background lines
                />
            </div>

        </div>
    )
}

export default NexusPreview