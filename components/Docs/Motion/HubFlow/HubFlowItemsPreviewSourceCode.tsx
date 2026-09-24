"use client"

import React from 'react'
import FramerMotionGlobalInstalation from '../../FramerMotionGlobalInstalation'
import Separator from '../../Separator'

import SupportingDarkmode from "@/components/SupportingDarkmode"
import HubFlowItemsOpenCode from './HubFlowItemsOpenCode'

function HubFlowItemsPreviewSourceCode() {
    return (
        <div>
            <FramerMotionGlobalInstalation />
            <div className='py-5'>
                <Separator
                    direction='horizontal'
                    className='bg-black/15 dark:bg-white/15 w-full'
                />
            </div>

            <div>
                <HubFlowItemsOpenCode />
            </div>

            <SupportingDarkmode />
        </div>
    )
}

export default HubFlowItemsPreviewSourceCode