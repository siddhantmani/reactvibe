import Image from 'next/image'
import React from 'react'

import HeroLeftIMG from "@/images/hero/HeroLeft.svg"
import HeroCenterIMG from "@/images/hero/HeroCenter.svg"
import HeroRightIMG from "@/images/hero/HeroRight.svg"

function Hero3ImagesGradientHalo() {
    return (
        <div className='w-full'>
            <div className='flex items-center justify-center gap-6 xl:mt-[70px] lg:mt-[54px] md:mt-[57px] mt-[60px] px-10 max-w-xl mx-auto relative z-10 xl:pb-[100px]'>
                <Image
                    src={HeroLeftIMG}
                    height={1000}
                    width={1000}
                    alt='hero left image'
                    className='xl:h-[400px] md:h-[280px] h-[200px] w-auto'
                />
                <div className="absolute mt-[100px] left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none z-0">
                    <div className="bg-blue-800 blur-2xl h-[400px] w-[350px] xl:w-[500px] xl:h-[420px] rounded-full opacity-60">

                    </div>
                </div>
                <Image
                    src={HeroCenterIMG}
                    height={1000}
                    width={1000}
                    alt='hero center image'
                    className='xl:h-[500px] md:h-[400px] h-[300px] w-auto absolute z-10 xl:mt-[70px]'
                />

                <Image
                    src={HeroRightIMG}
                    height={1000}
                    width={1000}
                    alt='hero right image'
                    className='xl:h-[400px] md:h-[280px] h-[200px] w-auto'
                />
            </div>
        </div>

    )
}

export default Hero3ImagesGradientHalo