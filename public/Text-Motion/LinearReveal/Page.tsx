import React from 'react'
import LinearReveal from './LinearReveal'

function Page() {
    return (
        <div>
            <LinearReveal
                Text='The Linear Reveal'
                as={'h1'} 
                delay={0.2}
                className='text-4xl'
            />
        </div>
    )
}

export default Page