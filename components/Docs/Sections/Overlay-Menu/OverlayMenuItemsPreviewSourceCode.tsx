import { Separator } from '@/components/ui/separator'
import OverlayMenuOpenCode from './OverlayMenuOpenCode'
import FramerMotionGlobalInstalation from '../../FramerMotionGlobalInstalation'

function OverlayMenuItemsPreviewSourceCode() {

    return (
        <div>
            <FramerMotionGlobalInstalation />
            <div className='py-5'>
                <Separator />
            </div>

            <div>
                <OverlayMenuOpenCode />
            </div>
        </div>
    )
}

export default OverlayMenuItemsPreviewSourceCode