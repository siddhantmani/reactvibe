import { Battery, Signal, Wifi } from 'lucide-react';
import React from 'react'
import Flowlist from '../Flowlist/Flowlist';

const notifications = [
    {
        id: 1,
        icon: '💳',
        title: 'Payment due tomorrow',
        description: 'Spotify - $10.99 will be charged tomorrow',
        time: '4:11 PM'
    },
    {
        id: 2,
        icon: '📈',
        title: 'Subscription price increased',
        description: 'Netflix increased from $15.49 to $15.99/month',
        time: '1:04 PM'
    },
    {
        id: 3,
        icon: '🔄',
        title: 'Subscriptions refreshed',
        description: 'Your subscription data was updated successfully',
        time: '12:18 PM'
    },
    {
        id: 4,
        icon: '💡',
        title: 'You could save $8/month',
        description: 'Apple One and YouTube Premium may overlap',
        time: '11:42 AM'
    },
    {
        id: 5,
        icon: '⏳',
        title: 'Trial ending soon',
        description: 'Xbox Game Pass trial ends in 3 days',
        time: '10:26 AM'
    },
    {
        id: 6,
        icon: '✅',
        title: 'Payment successful',
        description: 'Disney+ - $7.99 was charged successfully',
        time: '9:14 AM'
    },
    {
        id: 7,
        icon: '⚠️',
        title: 'Payment failed',
        description: 'Adobe Creative Cloud payment needs your attention',
        time: '8:47 AM'
    },
    {
        id: 8,
        icon: '📅',
        title: 'Renewal coming up',
        description: 'Notion Plus renews in 5 days for $10/month',
        time: 'Yesterday'
    },
    {
        id: 9,
        icon: '💰',
        title: 'Monthly spending is down',
        description: 'You spent $24 less on subscriptions this month',
        time: 'Yesterday'
    },
    {
        id: 10,
        icon: '🔔',
        title: 'Renewal reminder',
        description: 'Canva Pro renews tomorrow for $14.99',
        time: 'Yesterday'
    },
    {
        id: 11,
        icon: '📊',
        title: 'Subscription spending updated',
        description: 'You now spend $86.47/month across 9 services',
        time: 'Yesterday'
    },
    {
        id: 12,
        icon: '🎁',
        title: 'Free trial activated',
        description: 'YouTube Premium trial has started',
        time: 'Yesterday'
    },
    {
        id: 13,
        icon: '📉',
        title: 'Potential savings found',
        description: 'Downgrading Spotify could save $36/year',
        time: 'Yesterday'
    },
    {
        id: 14,
        icon: '🔐',
        title: 'Subscription account updated',
        description: 'Your payment method was updated successfully',
        time: 'Yesterday'
    },
    {
        id: 15,
        icon: '🧾',
        title: 'New invoice available',
        description: 'Figma invoice for $15.00 is ready to view',
        time: 'Yesterday'
    },
    {
        id: 16,
        icon: '🚨',
        title: 'Unusual subscription charge',
        description: 'A new $29.99 recurring charge was detected',
        time: 'Yesterday'
    },
    {
        id: 17,
        icon: '🎯',
        title: 'Budget alert',
        description: 'You are 90% of the way to your monthly limit',
        time: 'Yesterday'
    },
    {
        id: 18,
        icon: '📌',
        title: 'Subscription added',
        description: 'ChatGPT Plus was added to your subscriptions',
        time: 'Yesterday'
    },
    {
        id: 19,
        icon: '🗓️',
        title: 'Annual renewal approaching',
        description: '1Password renews in 14 days for $35.88',
        time: 'Yesterday'
    },
    {
        id: 20,
        icon: '✨',
        title: 'Monthly report is ready',
        description: 'Review your subscription spending for August',
        time: 'Yesterday'
    }
];

function NotificationScreenPreview() {
    const now = new Date()

    const statusBarTime = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    })

    const date = now.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    })

    const displayTime = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    })
    return (
        <div className='pt-15 overflow-hidden bg-white dark:bg-[#0c0c0c] rounded-2xl @md:-mt-6 flex flex-col justify-center items-center'>
            <div className='border-[8px] border-[#131925] dark:border-[#2a2e36] p-4 rounded-[50px] bg-[#fbfbfb] dark:bg-[#0c0c0c] max-w-xs'>
                {/* Status Bar */}
                <div className='flex justify-between items-center mb-6'>
                    <p className='text-xs font-medium'>{statusBarTime}</p>
                    <div className='bg-[#131925] dark:bg-[#2a2e36] rounded-full p-3 py-3 w-full max-w-[90px]' />
                    <div className='flex items-center gap-1 text-sm'>
                        <Signal size={14} />
                        <Wifi size={14} />
                        <Battery size={14} className='fill-black' />
                    </div>
                </div>

                {/* Time Display */}
                <div className='flex flex-col justify-center items-center text-base/30 py-4 mb-4'>
                    <p className=' text-sm opacity-50 font-semibold'>{date}</p>
                    <h1 className='text-[55px] opacity-90 font-extrabold leading-none'>{displayTime}</h1>
                </div>

                {/* Notifications with AnimatedList */}
                <div className='px-2 @md:mt-22 @lg:mt-[65px]'>
                    <Flowlist
                        items={notifications}
                        onItemSelect={(item, index) => console.log(item, index)}
                        showGradients={true}
                        enableArrowNavigation={true}
                        listClassName="max-h-[350px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default NotificationScreenPreview