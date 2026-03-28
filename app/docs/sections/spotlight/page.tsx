import SpotlightItems from '@/components/Docs/Sections/Spotlight/SpotlightItems'
import RenderOnRoute from '@/components/RenderOnRoute'

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