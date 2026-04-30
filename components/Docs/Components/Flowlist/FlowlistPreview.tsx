import React from 'react'
import FlowlistCard from './FlowlistCard';

function FlowlistPreview() {
    const faqItems = [
        {
            id: 1,
            title: 'List 1',
            description: 'List 1 explanation.'
        },
        {
            id: 2,
            title: 'List 2',
            description: 'List 2 explanation.'
        },
        {
            id: 3,
            title: 'List 3',
            description: 'List 3 explanation.'
        },
        {
            id: 4,
            title: 'List 4',
            description: 'List 4 explanation.'
        },
        {
            id: 5,
            title: 'List 5',
            description: 'List 5 explanation.'
        },
        {
            id: 6,
            title: 'List 6',
            description: 'List 6 explanation.'
        },
        {
            id: 7,
            title: 'List 7',
            description: 'List 7 explanation.'
        },
        {
            id: 8,
            title: 'List 8',
            description: 'List 8 explanation.'
        },
        {
            id: 9,
            title: 'List 9',
            description: 'List 9 explanation.'
        },
        {
            id: 10,
            title: 'List 10',
            description: 'List 10 explanation.'
        }
    ];
    return (
        <div className='border-[0px] border-[#131925] p-4 rounded-[10px] bg-[#fbfbfb] max-w-sm mx-auto'>
            <FlowlistCard
                items={faqItems}
                onItemSelect={(item, index) => console.log(item, index)}
                showGradients={true}
                enableArrowNavigation={true}
            />
        </div>
    )
}

export default FlowlistPreview