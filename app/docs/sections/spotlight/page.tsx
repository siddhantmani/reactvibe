import SpotlightItems from '@/components/Docs/Sections/Spotlight/SpotlightItems'
import RenderOnRoute from '@/components/RenderOnRoute'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "React Testimonial Carousel with Animation",
    description:
        "Build a React testimonial slider with animation using Framer Motion. Includes carousel UI and responsive testimonial section for landing pages.",
}

function Spotlight() {
    return (
        <div>
            <RenderOnRoute path="/docs/sections/spotlight" withTransition>
                <SpotlightItems />
            </RenderOnRoute>
        </div>
    )
}

export default Spotlight