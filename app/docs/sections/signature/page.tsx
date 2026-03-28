import SignatureItems from '@/components/Docs/Sections/Signature/SignatureItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

function Signature() {
    return (
        <div>
            <RenderOnRoute path="/docs/sections/signature" withTransition>
                <SignatureItems />
            </RenderOnRoute>
        </div>
    )
}

export default Signature