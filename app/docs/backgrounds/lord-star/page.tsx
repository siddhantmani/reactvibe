import RenderOnRoute from '@/components/RenderOnRoute'
import LordStarItems from '@/components/Docs/Backgrounds/LordStar/LordStarItems'

function LordStar() {
    return (
        <div>
            <RenderOnRoute path="/docs/backgrounds/lord-star" withTransition>
                <LordStarItems />
            </RenderOnRoute>
        </div>
    )
}

export default LordStar