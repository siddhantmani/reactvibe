import GlideAccordionItems from '@/components/Docs/Sections/GlideAccordion/GlideAccordionItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import React from 'react'

function GlideAccordion() {
    return (
        <div>
            <RenderOnRoute path="/docs/sections/glide-accordion" withTransition>
                <GlideAccordionItems />
            </RenderOnRoute>
        </div>
    )
}

export default GlideAccordion