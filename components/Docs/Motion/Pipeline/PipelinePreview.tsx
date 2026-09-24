import React from 'react'
import Pipeline from './Pipeline'

function PipelinePreview() {
    return (
        <div className="h-full bg-white dark:bg-[#050505] flex items-center justify-center">
            <Pipeline
                particleCount={2}
                particleSpeed={3}
                particleSize={2.5}
            />
        </div>
    )
}

export default PipelinePreview