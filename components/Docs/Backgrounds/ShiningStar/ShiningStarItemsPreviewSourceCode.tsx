import { Separator } from '@/components/ui/separator';
import TheShiningStarCode from './TheShiningStarCode';
import ThreejsInstallationWithTypeDef from '../../ThreejsInstallationWithTypeDef';

function ShiningStarItemsPreviewSourceCode() {
    return (
        <div className='mt-5'>
            <ThreejsInstallationWithTypeDef />

            <div className='py-5'>
                <Separator />
            </div>
            <div>
                <TheShiningStarCode />
            </div>
        </div>
    )
}

export default ShiningStarItemsPreviewSourceCode