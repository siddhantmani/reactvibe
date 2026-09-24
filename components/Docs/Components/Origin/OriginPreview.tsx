import { motion } from "framer-motion"

import React from 'react'
import OriginCode from "./OriginCode"


// import TopIconIMG from "@/images/services/firstcard/topIcons.svg";
// import paypalIMG from "@/images/services/firstcard/paypal.svg";
// import CardIMG from "@/images/services/firstcard/card.svg";
// import BankBitcoin from "@/images/services/firstcard/bank.svg";
// import Bitcoin from "@/images/services/firstcard/bitcoin.svg";
import Image from "next/image";


function OriginPreview() {
    return (
        <div className=" bg-white dark:bg-[#0b0b0b] p-10 flex items-center justify-center">

            <div className="w-full max-w-3xl">
                <OriginCode
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

export default OriginPreview