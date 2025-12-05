import React from 'react'
import FramerMotionGlobalInstalation from '../../FramerMotionGlobalInstalation'
import Separator from '../../Separator'
import WaveCTACode from './WaveCTACode'

function WaveCTAItemsPreviewSourceCode() {
    return (
        <div>
            <FramerMotionGlobalInstalation />
            <div className='py-5'>
                <Separator direction='horizontal' className='dark:bg-white/15 bg-black/20 w-full' />
            </div>
            <div>
                <WaveCTACode />
            </div>
        </div>
    )
}

export default WaveCTAItemsPreviewSourceCode