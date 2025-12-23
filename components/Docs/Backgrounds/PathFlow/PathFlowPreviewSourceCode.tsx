import React from 'react'
import FramerMotionGlobalInstalation from '../../FramerMotionGlobalInstalation'
import Separator from '../../Separator'
import PathFlowOpenCode from './PathFlowOpenCode'

function PathFlowPreviewSourceCode() {
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
                <PathFlowOpenCode />
            </div>
        </div>
    )
}

export default PathFlowPreviewSourceCode