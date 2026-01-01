"use client"

import DarkFusionBestSettingOne from './BestSettings/DarkFusionBestSettingOne'

import {
    Drawer,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import DarkFusionBestSettingOneCopyCode from './BestSettings/DarkFusionBestSettingOneCopyCode'
import DarkFusionBestSettingOneAnimation from './BestSettings/DarkFusionBestSettingOneAnimation'
import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google'

const LinearRevealFont = Bricolage_Grotesque({
    weight: "700",
    subsets: ["latin"],
})

function BestSettingsForDarkFusion() {

    return (
        <div>
            <LinearReveal
                as={'h2'}
                text='Best Settings'
                className={`${LinearRevealFont.className} text-3xl pt-10 pb-3`}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                <div className="aspect-video w-full">
                    <Drawer>
                        <DrawerTitle />
                        <DrawerTrigger className='w-full h-full'>
                            <DarkFusionBestSettingOne />
                        </DrawerTrigger>
                        <DrawerContent className=''>
                            <div className='flex flex-col md:flex md:flex-row gap-5'>
                                <div className='h-full w-[70%] scale-[100%] p-4'>
                                    <DarkFusionBestSettingOneAnimation />
                                </div>
                                <div className='overflow-y-scroll h-[calc(80vh-4rem)] pointer-events-auto px-5'>
                                    <DarkFusionBestSettingOneCopyCode />
                                </div>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </div>
    )
}

export default BestSettingsForDarkFusion