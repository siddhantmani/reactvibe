import NetworkPulse from "./NetworkPulse"

function Page() {
    return (
        <div>
            <NetworkPulse
                CurveRadius={70}
                TopGap={60}
                MiddleCurve={35}
                MiddleTopGap={40}
                IconsGap={53}
            />
        </div>
    )
}

export default Page