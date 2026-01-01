import { Separator } from '@/components/ui/separator';
import TheDarkFusionCode from './TheDarkFusionCode';
import ThreejsInstallationWithTypeDef from '../../ThreejsInstallationWithTypeDef';

function DarkFusionItemsPreviewSourceCode() {
    return (
        <div className='mt-5'>
            <ThreejsInstallationWithTypeDef />
            <div className='py-5'>
                <Separator />
            </div>
            <div>
                <TheDarkFusionCode />
            </div>
        </div>
    )
}

export default DarkFusionItemsPreviewSourceCode