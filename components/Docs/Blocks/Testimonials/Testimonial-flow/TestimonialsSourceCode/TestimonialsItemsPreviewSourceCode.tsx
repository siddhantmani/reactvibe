import FramerMotionGlobalInstalation from '@/components/Docs/FramerMotionGlobalInstalation';
import TestimonialsCode from './TestimonialsCode';
import { Separator } from '@/components/ui/separator';
import SupportingDarkmode from '@/components/SupportingDarkmode';


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

            <SupportingDarkmode />
        </div>
    )
}

export default TestimonialsItemsPreviewSourceCode