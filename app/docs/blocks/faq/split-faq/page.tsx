import SplitFAQItems from '@/components/Docs/Blocks/FAQ/SplitFAQ/SplitFAQItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Split FAQ Section | React Vibe",
    description:
        "Build a responsive React split FAQ section with questions and answers side by side, clean layouts, and built-in dark mode support.",
}

function SplitFAQ() {
    return (
        <div>
            <RenderOnRoute path="/docs/blocks/faq/split-faq" withTransition>
                <SplitFAQItems />
            </RenderOnRoute>
        </div>
    )
}

export default SplitFAQ