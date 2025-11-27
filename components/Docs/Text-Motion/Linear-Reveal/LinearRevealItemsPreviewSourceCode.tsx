import { Separator } from '@/components/ui/separator'
import LinearRevealCode from './LinearRevealCode'
import FramerMotionGlobalInstalation from '../../FramerMotionGlobalInstalation'

function LinearRevealItemsPreviewSourceCode() {

    return (
        <div>
            <FramerMotionGlobalInstalation />
            <div className='py-5'>
                <Separator />
            </div>

            <div>
                <LinearRevealCode />
            </div>
        </div>
    )
}

export default LinearRevealItemsPreviewSourceCode