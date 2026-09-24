import { Manrope } from "next/font/google";
import MorphNav from "../../Navigation/MorphNav/MorphNav";
import MorphMenu from "../../Navigation/MorphMenu/MorphMenu";
import SpotlightGrid from "@/public/Backgrounds/SpotlightGrid/SpotlightGrid";
import WaveCTA from "@/public/Motion/Wave-CTA/WaveCTA";

const font = Manrope({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

function Page() {
    const lightCircles = [
        "#c4b5fd",
        "#bae6fd",
        "#fbcfe8",
        "#fef08a",
        "#fed7aa"
    ];

    const darkerWaves = [
        "#8b5cf6",
        "#0ea5e9",
        "#ec4899",
        "#eab308",
        "#f97316"
    ];

    return (
        <div className='dark:bg-[#0c0c0c]'>
            <div>
                <SpotlightGrid spotlightSize={230} />
            </div>
            <div>
                <div className='hidden lg:inline-block w-full fixed top-0 z-50'>
                    <MorphNav />
                </div>
                <div className='lg:hidden fixed top-0 w-full z-50'>
                    <MorphMenu />
                </div>

                <div className="flex flex-col items-center justify-center text-center px-4 2xl:pt-60 md:pt-50 pt-40 max-w-5xl mx-auto font-sans transition-colors duration-300">

                    {/* Top Badge */}
                    <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 shadow-sm text-sm font-medium text-gray-800 dark:text-gray-200 backdrop-blur-sm transition-colors duration-300">
                        {/* Network/AI Node Icon */}
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-700 dark:text-gray-300 transition-colors"
                        >
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                        </svg>
                        <span className={`${font.className}`}>Federated Learning v3.1 Released</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className={`${font.className} text-4xl md:text-5xl lg:text-[54px] text-gray-900 dark:text-white transition-colors duration-300`}>
                        <span className="font-[600]">Cognito AI</span>
                        <span className="font-[400] mx-2 text-gray-400 dark:text-gray-600">|</span>
                        <span className="">The Next-Generation AI Lifecycle Platform</span>
                    </h1>

                    {/* Gradient Sub-headline */}
                    <h2 className={`${font.className} font-[400] text-3xl md:text-4xl lg:text-[46px] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#9b8bc6] via-[#7db2d8] to-[#e18db1] dark:from-[#b0a1e0] dark:via-[#91c5ed] dark:to-[#f2a3c7]`}>
                        Accelerate Innovation with Your Data
                    </h2>

                    {/* Description */}
                    <p className={`${font.className} text-lg md:text-xl text-gray-800 dark:text-gray-300 max-w-2xl transition-colors duration-300`}>
                        Integrated platform for building, training, and deploying <br className="hidden md:block" /> governed AI solutions.
                    </p>

                </div>

                <div className="2xl:-mt-80 md:-mt-80 -mt-90 pb-10">
                    <WaveCTA
                        leftWave={darkerWaves}
                        rightWave={darkerWaves}

                        leftCircle={lightCircles}
                        rightCircle={lightCircles}
                    />

                    <p className="max-w-2xl mx-auto text-center -mt-80 px-2 dark:text-white text-black">Cognito Al simplifies the complexity of deploying custom Al models. From initial data exploration and annotation to automated model retraining and monitoring, manage your entire Al workflow with full transparency and control, not confusion.</p>
                </div>
            </div>

        </div>
    )
}

export default Page