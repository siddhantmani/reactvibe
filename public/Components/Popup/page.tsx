"use client"

import React, { useRef, useState } from 'react'
import Popup from './Popup';

function Page() {
    const [open, setOpen] = useState(false);
    const btnRef = useRef<HTMLButtonElement>(null);

    return (
        <div>
            <button ref={btnRef} onClick={() => setOpen(true)} className='border dark:border-white/10 rounded-md border-black/10 p-2'>Popup</button>
            <Popup
                open={open}
                onClose={() => setOpen(false)}
                animation="origin"
                originRef={btnRef}
                labelledBy="support-title"
            >
                <h1>An open-source popup component from React Vibe.</h1>
            </Popup>
        </div>
    )
}

export default Page