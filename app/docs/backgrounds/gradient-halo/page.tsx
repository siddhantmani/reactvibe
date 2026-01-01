import GradientHaloItem from '@/components/Docs/Backgrounds/GradientHalo/GradientHaloItem'
import RenderOnRoute from '@/components/RenderOnRoute'

function GradientHalo() {
    return (
        <div>
            <RenderOnRoute
                path="/docs/backgrounds/gradient-halo"
                withTransition
            >
                <GradientHaloItem />
            </RenderOnRoute>
        </div>
    )
}

export default GradientHalo