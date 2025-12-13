"use client"
import AuroraPricingOpenCode from './AuroraPricingOpenCode'
import FramerMotionGlobalInstalation from '../../FramerMotionGlobalInstalation'
import Separator from '../../Separator'

function AuroraPricingItemsPreviewSourceCode() {
    return (
        <div>
            <FramerMotionGlobalInstalation />
     
            <div className='py-5'>
                <Separator
                    direction='horizontal'
                    className='bg-black/20 dark:bg-white/20 w-full'
                />
            </div>
            <div>
                <AuroraPricingOpenCode />
            </div>
        </div>
    )
}

export default AuroraPricingItemsPreviewSourceCode