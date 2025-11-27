import { RotateCw } from 'lucide-react'
import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

function RefrashContent() {
    const handleRefresh = () => {
        window.location.reload(); // reloads the current page
    };

    return (
        <div
            onClick={handleRefresh}
            className='flex items-center p-2 rounded-md bg-[#efeded] cursor-pointer dark:bg-gradient-to-r from-[#2c2b2b] from-[33%] to-[#222121] to-47%'
        >
            <Tooltip>
                <TooltipTrigger>
                    <RotateCw className='h-5 w-5' />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Refresh</p>
                </TooltipContent>
            </Tooltip>
        </div>
    )
}

export default RefrashContent
