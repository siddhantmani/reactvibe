import InsightRecommendationCardItems from '@/components/Docs/UI-Blocks/InsightRecommendationCard/InsightRecommendationCardItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "React Recommendation & Insight Card | React Vibe",
    description:
        "Build responsive React Recommendation & Insight Cards for dashboards. Perfect for Dashboard Recommendation Cards, Analytics Recommendation Cards, Budget Recommendation Cards, and smart insights.",
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