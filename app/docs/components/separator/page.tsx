import RenderOnRoute from '@/components/RenderOnRoute'
import SeparatorItems from '@/components/Docs/Components/Separator/SeparatorItems'
import React from 'react'

function Separator() {
    return (
        <div>
            <RenderOnRoute path="/docs/components/separator" withTransition>
                <SeparatorItems />
            </RenderOnRoute>
        </div>
    )
}

export default Separator