import React from 'react'
import Origin from './Origin'


// import Image from "next/image";

// import TopIconIMG from "@/images/brands/final.svg";
// import paypalIMG from "@/images/brands/nothion.svg";
// import CardIMG from "@/images/brands/sheet.svg";
// import BankBitcoin from "@/images/brands/slac-2.svg";
// import Bitcoin from "@/images/brands/zapier-1.svg";




function Page() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black p-10 flex items-center justify-center">

            <div className="w-full max-w-3xl">
                <Origin
                    // You can pass your custom imported images here like this:
                    // topIcon={<Image src={TopIconIMG} alt="Top" width={90} height={90} />}
                    // bottomIcons={[
                    //     <Image key="paypal" src={paypalIMG} alt="Paypal" width={50} height={50} />,
                    //     <Image key="card" src={CardIMG} alt="Card" width={50} height={50} />,
                    //     <Image key="bank" src={BankBitcoin} alt="Bank" width={50} height={50} />,
                    //     <Image key="bitcoin" src={Bitcoin} alt="Bitcoin" width={50} height={50} />,
                    // ]}

                    curve={100}                 // Sweep of the bezier curve 
                    curveColor=""               // Leaves adaptive styling, or override with hex
                    topGap={0}                 // Disconnects the curve from the top node
                    bottomGap={0}              // Disconnects the curve from the bottom nodes
                    particleSpeed={2.8}         // Seconds for a particle to travel the path
                    particleColor="#ffffff"     // Color of the moving dot
                    particleLength={14}         // Make it longer (e.g. 16) for a dash, or 8 for a perfect circle
                    particleWeight={2}        // Controls the thickness/height of the moving particle dash
                    particleRadius={4}          // Border radius and half-height of the particle
                    particleGlow="drop-shadow(0 0 8px #ffb6e0)" // CSS filter for the dot glow
                    strokeWidth={1.5}             // Thickness of the bezier curves
                    delay={1.4}                 // Initial animation delay
                />
            </div>

        </div>
    )
}

export default Page