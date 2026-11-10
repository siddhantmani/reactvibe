"use client";

import SupportReactVibe, { useSupportPopup } from "@/components/SupportReactVibe";
import Popup from "./Docs/Components/Popup/Popup";

export default function SupportPopupGate() {
    const { open, close } = useSupportPopup();

    return (
        <Popup open={open} onClose={close} animation="spring" labelledBy="rv-support-title">
            <SupportReactVibe onVisitStore={close} onMaybeLater={close} />
        </Popup>
    );
}