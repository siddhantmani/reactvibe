import React from 'react'
import LinearRevealPublicCode from './LinearRevealPublicCode'

function LinearRevealImport() {
    return (
        <div>
            <LinearRevealPublicCode
                as={'h2'} //You can select heading from h1-h6
                text='The Linear Reveal'
                className='text-4xl'
            />
        </div>
    )
}

export default LinearRevealImport