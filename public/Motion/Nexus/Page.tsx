

// Note: Ensure you import your images (zAPIERimg, SlacIMG, etc.) at the top of your actual page if using `next/image`

import Nexus from "./Nexus";


export default function Page() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black p-4 md:p-10 flex items-center justify-center">

            <div className="w-full max-w-5xl">
                <Nexus
                    // To use images, pass them like this:
                    // icons={[
                    //    <Image key="zap" src={zAPIERimg} alt="Zapier" width={48} height={48} />,
                    //    <Image key="slack" src={SlacIMG} alt="Slack" width={48} height={48} />,
                    //    ... 4 more images
                    // ]}

                    curve={150}
                    centerGapX={70}
                    centerGapY={30}
                    nodeGap={40}
                    curveColor="#ffffff"
                    particleSpeed={3}
                    particleColor="#ffffff"
                    particleLength={12}
                    particleRadius={2}
                    particleWeight={2}
                    strokeWidth={1.5}
                />
            </div>

        </div>
    );
}