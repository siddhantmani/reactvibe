import { Separator } from '@/components/ui/separator';
import TheLordStarCode from './TheLordStarCode';
import ThreejsInstallationWithTypeDef from '../../ThreejsInstallationWithTypeDef';

function LordStarItemsPreviewSourceCode() {
    return (
        <div className='mt-5'>
            <ThreejsInstallationWithTypeDef />
            <div className='py-5'>
                <Separator />
            </div>
            <div>
                <TheLordStarCode />
            </div>

        </div>
    )
}

export default LordStarItemsPreviewSourceCode