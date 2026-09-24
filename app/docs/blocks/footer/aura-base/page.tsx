
import AuraBaseItems from '@/components/Docs/Blocks/Footer/AuraBase/AuraBaseItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "React Footer with App Download Buttons | React Vibe",

    description:
        "Build a React footer with App Store and Google Play buttons, social links, navigation, and built-in dark mode for SaaS and landing pages.",
}

function AuraBase() {
    return (
        <div>
            <RenderOnRoute path="/docs/blocks/footer/aura-base" withTransition>
                <AuraBaseItems />
            </RenderOnRoute>
        </div>
    )
}

export default AuraBase