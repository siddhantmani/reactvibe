import ShadowButtonItems from '@/components/Docs/Components/Shadow-Button/ShadowButtonItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

function ShadowButton() {
    return (
        <div>
            <RenderOnRoute path="/docs/components/shadow-button" withTransition>
                <ShadowButtonItems />
            </RenderOnRoute>
        </div>
    )
}

export default ShadowButton