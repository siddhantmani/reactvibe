import React from 'react'
import FramerMotionGlobalInstalation from '../../FramerMotionGlobalInstalation'
import ResolveOpenCode from './ResolveOpenCode'

function ResolvePreviewSourceCode() {
    return (
        <div className='space-y-4'>
            <FramerMotionGlobalInstalation />
            <div>
                <ResolveOpenCode />
            </div>
        </div>
    )
}

export default ResolvePreviewSourceCode