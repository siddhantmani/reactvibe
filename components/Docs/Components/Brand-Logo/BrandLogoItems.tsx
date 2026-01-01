import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import BrandLogoItemsPreview from './BrandLogoItemsPreview';

const OrbitFontFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function BrandLogoItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl'>
            <LinearReveal
                as={'h1'}
                className={`${OrbitFontFont.className} text-5xl py-10`}
                text='Brand Loop'
            />
            <div className='border-black rounded-2xl'>
                <BrandLogoItemsPreview />
            </div>
        </div>
    )
}

export default BrandLogoItems