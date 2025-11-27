import TestimonialsCode from './TestimonialsCode';
import { Separator } from '@/components/ui/separator';
import FramerMotionGlobalInstalation from '../../FramerMotionGlobalInstalation';


function TestimonialsItemsPreviewSourceCode() {

    return (
        <div>
            <FramerMotionGlobalInstalation />

            <div className='py-5'>
                <Separator className='' />
            </div>

            <div>
                <TestimonialsCode />
            </div>
        </div>
    )
}

export default TestimonialsItemsPreviewSourceCode