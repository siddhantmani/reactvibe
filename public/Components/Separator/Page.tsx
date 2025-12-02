import React from 'react'
import Separator from './Separator'

function Page() {
    return (
        <div className="flex flex-col items-start gap-1">
            <span>React Vibe</span>
            <Separator
                direction="horizontal"
                className='bg-black'
            />
            <span>An open-source UI platform.</span>
        </div>
    )
}

export default Page