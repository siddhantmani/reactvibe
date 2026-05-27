import InsightRecommendationCardItems from '@/components/Docs/UI-Blocks/InsightRecommendationCard/InsightRecommendationCardItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Insight Recommendation Card UI for React & Next.js | React Vibe",
    description:
        "Responsive insight recommendation card UI for React with smart suggestions, finance insights, and modern dashboard layouts.",
}


function InsightRecommendationCard() {
    return (
        <div>
            <RenderOnRoute path="/docs/ui-blocks/insight-recommendation-card" withTransition>
                <InsightRecommendationCardItems />
            </RenderOnRoute>
        </div>
    )
}

export default InsightRecommendationCard