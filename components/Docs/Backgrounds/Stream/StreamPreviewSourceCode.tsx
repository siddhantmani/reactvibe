import React from 'react'
import FramerMotionIconsGlobalInstalation from '../../FramerMotionIconsGlobalInstalation'
import Separator from '../../Separator'
import StreamOpenCode from './StreamOpenCode'

function StreamPreviewSourceCode() {
    return (
        <div>
            <FramerMotionIconsGlobalInstalation />
            <div className='py-5'>
                <Separator
                    direction='horizontal'
                    className='bg-black/15 dark:bg-white/15 w-full'
                />
            </div>

            <div>
                <StreamOpenCode />
            </div>

        </div>
    )
}

export default StreamPreviewSourceCode