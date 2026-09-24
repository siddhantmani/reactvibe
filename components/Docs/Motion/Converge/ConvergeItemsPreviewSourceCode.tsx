import Separator from '../../Separator'
import SupportingDarkmode from '@/components/SupportingDarkmode'
import FramerMotionIconsGlobalInstalation from '../../FramerMotionIconsGlobalInstalation'
import ConvergeItemsOpenCode from './ConvergeItemsOpenCode'

function ConvergeItemsPreviewSourceCode() {
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
                <ConvergeItemsOpenCode />
            </div>

            <SupportingDarkmode />
        </div>
    )
}

export default ConvergeItemsPreviewSourceCode