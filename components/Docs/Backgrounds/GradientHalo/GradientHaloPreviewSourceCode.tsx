import { Separator } from '@/components/ui/separator';
import TheHeroAnimationCode from './TheGradientHaloCode';
import ThreejsInstallationWithTypeDef from '../../ThreejsInstallationWithTypeDef';

function GradientHaloPreviewSourceCode() {
    return (
        <div className='mt-5'>
            <ThreejsInstallationWithTypeDef />
            <div className='py-5'>
                <Separator />
            </div>
            <div>
                <TheHeroAnimationCode />
            </div>

        </div >
    )
}

export default GradientHaloPreviewSourceCode