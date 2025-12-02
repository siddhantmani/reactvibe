import React from 'react'
import LinearReveal from './LinearReveal'

function Page() {
    return (
        <div>
            <LinearReveal
                as={'h2'} //You can select heading from h1-h6
                text='The Linear Reveal'
                className='text-4xl'
            />
        </div>
    )
}

export default Page