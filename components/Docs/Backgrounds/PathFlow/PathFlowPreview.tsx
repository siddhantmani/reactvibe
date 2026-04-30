import React from 'react'
import PathFlowCode from './PathFlowCode'

type PathFlowPreviewProps = {
    active?: boolean
}

function PathFlowPreview({ active }: PathFlowPreviewProps) {
    return (
        <div className={`flex justify-center pt-20 overflow-hidden transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-70'}`}>
            <PathFlowCode />
        </div>
    )
}

export default PathFlowPreview