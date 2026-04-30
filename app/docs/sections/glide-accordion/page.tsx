import GlideAccordionItems from '@/components/Docs/Sections/GlideAccordion/GlideAccordionItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "React FAQ Accordion Component for Clean UI Layouts",
    description:
        "Build a clean React FAQ section with a responsive accordion UI. Ideal for landing pages, docs, and modern website layouts.",
}

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