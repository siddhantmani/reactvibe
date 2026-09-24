
import FramerMotionGlobalInstalation from '@/components/Docs/FramerMotionGlobalInstalation'
import FluxCTAOpenCode from './FluxCTAOpenCode'
import Separator from '@/components/Docs/Separator'


function FluxCTAItemsPreviewSourceCode() {
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
                <FluxCTAOpenCode />
            </div>

        </div>
    )
}

export default FluxCTAItemsPreviewSourceCode