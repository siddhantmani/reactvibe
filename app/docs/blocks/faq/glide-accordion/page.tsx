
import GlideAccordionItems from '@/components/Docs/Blocks/FAQ/GlideAccordion/GlideAccordionItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "React FAQ Card Component | React Vibe",
    description:
        "Build a responsive React FAQ card with expandable questions, clean spacing, and built-in dark mode for SaaS and product landing pages.",
}

function GlideAccordion() {
    return (
        <div>
            <RenderOnRoute path="/docs/blocks/faq/glide-accordion" withTransition>
                <GlideAccordionItems />
            </RenderOnRoute>
        </div>
    )
}

export default GlideAccordion