import React from 'react'
import FramerMotionGlobalInstalation from '../../FramerMotionGlobalInstalation'
import ZenithOpenCode from './ZenithOpenCode'

function ZenithPreviewSourceCode() {
    return (
        <div className='space-y-4'>
            <FramerMotionGlobalInstalation />
            <div>
                <ZenithOpenCode />
            </div>
        </div>
    )
}

export default ZenithPreviewSourceCode