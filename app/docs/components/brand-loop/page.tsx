import BrandLogoItems from '@/components/Docs/Components/Brand-Logo/BrandLogoItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

function BrandLogo() {
    return (
        <div>
            <RenderOnRoute path="/docs/components/brand-loop" withTransition>
                <BrandLogoItems />
            </RenderOnRoute>
        </div>
    )
}

export default BrandLogo