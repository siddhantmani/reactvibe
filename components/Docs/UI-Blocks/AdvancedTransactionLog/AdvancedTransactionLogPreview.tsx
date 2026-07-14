"use client"

import React from 'react'
import {
    Calendar,
    ChevronDown,
    Ellipsis,
    Filter,
    Download
} from 'lucide-react'
import { Manrope } from 'next/font/google';
import LinearReveal from '@/components/LinearReveal';

const boldFont = Manrope({
    weight: "500",
    subsets: ["latin"],
});


function AdvancedTransactionLogPreview() {
    const transactions = [
        {
            date: "May 31, 2024",
            time: "10:42 AM",
            name: "Amazon.com",
            desc: "Online Shopping",
            category: "Shopping",
            categoryColor: "bg-purple-100 text-purple-600",
            account: "Chase Checking",
            accountNo: "•••• 4521",
            amount: "-$89.99",
            amountColor: "text-red-500",
            image: "a",
            imageBg: "bg-white border",
        },
        {
            date: "May 31, 2024",
            time: "9:15 AM",
            name: "Starbucks",
            desc: "Coffee & Drinks",
            category: "Food & Dining",
            categoryColor: "bg-green-100 text-green-600",
            account: "Chase Checking",
            accountNo: "•••• 4521",
            amount: "-$6.45",
            amountColor: "text-red-500",
            image: "☕",
            imageBg: "bg-green-100",
        },
        {
            date: "May 31, 2024",
            time: "8:00 AM",
            name: "Direct Deposit",
            desc: "Salary Payment",
            category: "Income",
            categoryColor: "bg-green-100 text-green-600",
            account: "Chase Checking",
            accountNo: "•••• 4521",
            amount: "+$4,250.00",
            amountColor: "text-green-500",
            image: "↓",
            imageBg: "bg-green-100",
        },
        {
            date: "May 30, 2024",
            time: "7:30 PM",
            name: "Netflix",
            desc: "Entertainment",
            category: "Entertainment",
            categoryColor: "bg-purple-100 text-purple-600",
            account: "Wells Fargo Card",
            accountNo: "•••• 1234",
            amount: "-$15.99",
            amountColor: "text-red-500",
            image: "N",
            imageBg: "bg-red-600 text-white",
        },
        {
            date: "May 30, 2024",
            time: "6:12 PM",
            name: "Uber Ride",
            desc: "Transportation",
            category: "Transport",
            categoryColor: "bg-blue-100 text-blue-600",
            account: "Chase Checking",
            accountNo: "•••• 4521",
            amount: "-$24.50",
            amountColor: "text-red-500",
            image: "U",
            imageBg: "bg-black text-white",
        },
        {
            date: "May 30, 2024",
            time: "5:08 PM",
            name: "Whole Foods Market",
            desc: "Groceries",
            category: "Groceries",
            categoryColor: "bg-green-100 text-green-600",
            account: "Chase Checking",
            accountNo: "•••• 4521",
            amount: "-$72.18",
            amountColor: "text-red-500",
            image: "W",
            imageBg: "bg-green-700 text-white",
        },
        {
            date: "May 29, 2024",
            time: "11:20 AM",
            name: "Figma Inc.",
            desc: "Software Subscription",
            category: "Subscriptions",
            categoryColor: "bg-yellow-100 text-yellow-700",
            account: "AMEX Platinum",
            accountNo: "•••• 5678",
            amount: "-$12.00",
            amountColor: "text-red-500",
            image: "F",
            imageBg: "bg-pink-100",
        },
        {
            date: "May 29, 2024",
            time: "9:45 AM",
            name: "Apple Store",
            desc: "Electronics",
            category: "Shopping",
            categoryColor: "bg-purple-100 text-purple-600",
            account: "AMEX Platinum",
            accountNo: "•••• 5678",
            amount: "-$129.00",
            amountColor: "text-red-500",
            image: "",
            imageBg: "bg-gray-100",
        },
    ]

    return (
        <div className='bg-white border border-black/5 dark:border-white/10 dark:bg-[#0c0c0c] rounded-[15px] p-3 px-3 aspect-video'>

            {/* top actions */}
            <div className='flex items-center justify-between gap-4'>

                {/* filters */}
                <div className='flex items-center gap-3'>
                    <button className={`${boldFont.className} px-2 py-2 rounded-[6px] bg-[#DDF8D3] text-[#2C9B4B] text-[12px]`}>
                        All Transactions
                    </button>

                    <button className={`${boldFont.className} px-2 py-2 rounded-[6px] border border-black/10 text-black/70 dark:border-white/10 dark:text-white/70 dark:hover:text-white text-[12px]`}>
                        Income
                    </button>

                    <button className={`${boldFont.className} px-2 py-2 rounded-[6px] border border-black/10 text-black/70 dark:border-white/10 dark:text-white/70 dark:hover:text-white text-[12px]`}>
                        Expenses
                    </button>

                    <button className={`${boldFont.className} px-2 py-2 rounded-[6px] border border-black/10 text-black/70 dark:border-white/10 dark:text-white/70 dark:hover:text-white text-[12px]`}>
                        Transfers
                    </button>
                </div>

                {/* right controls */}
                <div className='flex items-center gap-3'>

                    <button className={`${boldFont.className} flex items-center gap-2 px-2 py-2 rounded-[5px] border border-black/10 text-black/70 dark:hover:text-white dark:border-white/10 dark:text-white/70 text-[12px]`}>
                        <span>May 1 — May 31, 2024</span>
                        <Calendar size={16} />
                    </button>

                    <button className={`${boldFont.className} relative flex items-center gap-2 px-2 py-2 rounded-[5px] border border-black/10 text-black/70 dark:hover:text-white dark:border-white/10 dark:text-white/70 text-[12px]`}>
                        <Filter size={16} />
                        Filters

                        <div className='w-4 h-4 rounded-full bg-[#5BC46B] text-white text-[10px] flex items-center justify-center absolute -top-1 -right-1'>
                            3
                        </div>
                    </button>

                    <button className={`${boldFont.className} flex items-center gap-2 px-2 py-2 rounded-[5px] border border-black/10 text-black/70 dark:hover:text-white dark:border-white/10 dark:text-white/70 text-[12px]`}>
                        <Download size={16} />
                        Export
                    </button>

                </div>

            </div>

            {/* table */}
            <div className='mt-4'>

                <table className='w-full'>

                    <thead>
                        <tr className='border-b border-black/5 text-left text-black/40 dark:border-white/5 dark:text-white/80 text-sm'>
                            <th className='pb-5 font-medium w-[150px]'>Date</th>
                            <th className='pb-5 font-medium'>Description</th>
                            <th className='pb-5 font-medium'>Category</th>
                            <th className='pb-5 font-medium'>Account</th>
                            <th className='pb-5 font-medium'>Amount</th>
                            <th className='pb-5 font-medium'>Status</th>
                        </tr>
                    </thead>

                    <tbody>

                        {/* today */}
                        <tr>
                            <td
                                colSpan={7}
                                className={`${boldFont.className} pt-2 pb-2 text-[13px] text-black dark:text-white/90`}
                            >
                                Today — May 31, 2024
                            </td>
                        </tr>

                        {transactions.slice(0, 3).map((item, index) => (
                            <tr
                                key={index}
                                className='border-b border-black/5 dark:border-white/5'
                            >

                                {/* date */}
                                <td className='py-2'>
                                    <div className='flex items-center gap-4'>

                                        <div className={`flex h-8 w-8 items-center justify-center rounded-[8px] text-[18px] font-bold ${item.imageBg}`}>
                                            {item.image}
                                        </div>

                                        <div>
                                            <h1 className={`${boldFont.className} text-[12px] text-[#111827] dark:text-white`}>
                                                {item.date}
                                            </h1>

                                            <p className={`${boldFont.className} text-[10px] text-[#6B7280] dark:text-white/50`}>
                                                {item.time}
                                            </p>
                                        </div>

                                    </div>
                                </td>

                                {/* desc */}
                                <td>
                                    <h1 className={`${boldFont.className} text-[12px] text-[#111827] dark:text-white`}>
                                        {item.name}
                                    </h1>

                                    <p className={`${boldFont.className} text-[10px] text-[#6B7280] dark:text-white/50`}>
                                        {item.desc}
                                    </p>
                                </td>

                                {/* category */}
                                <td>
                                    <div className={`inline-flex px-2 py-1 ${boldFont.className} text-[10px] text-[#111827] rounded-[5px] items-center ${item.categoryColor}`}>
                                        {item.category}
                                    </div>
                                </td>

                                {/* account */}
                                <td>
                                    <h1 className={`${boldFont.className} text-[12px] text-[#111827] dark:text-white`}>
                                        {item.account}
                                    </h1>

                                    <p className={`${boldFont.className} text-[10px] text-[#6B7280] dark:text-white/50`}>
                                        {item.accountNo}
                                    </p>
                                </td>

                                {/* amount */}
                                <td>
                                    <LinearReveal
                                        as='h1'
                                        delay={0.2}
                                        Text={item.amount}
                                        className={`${boldFont.className} text-[13px] text-[#111827] ${item.amountColor}`}
                                    />
                                </td>

                                {/* status */}
                                <td>
                                    <div className='inline-flex px-2 py-1 ${boldFont.className} text-[10px] rounded-[5px] items-center bg-[#E8F9EA] text-[#2C9B4B]'>
                                        Completed
                                    </div>
                                </td>

                                <td>
                                    <button className='text-black/60 dark:text-white/60 dark:hover:text-white cursor-pointer'>
                                        <Ellipsis size={12} />
                                    </button>
                                </td>

                            </tr>
                        ))}

                        {/* yesterday */}
                        <tr>
                            <td
                                colSpan={7}
                                className={`${boldFont.className} pt-2 pb-2 text-[13px] text-black dark:text-white/90`}
                            >
                                Yesterday — May 30, 2024
                            </td>
                        </tr>

                        {transactions.slice(3, 6).map((item, index) => (
                            <tr
                                key={index}
                                className='border-b border-black/5 dark:border-white/5 '
                            >

                                <td className='py-2'>
                                    <div className='flex items-center gap-4'>

                                        <div className={`flex h-8 w-8 items-center justify-center rounded-[8px] text-[18px] font-bold ${item.imageBg}`}>
                                            {item.image}
                                        </div>

                                        <div>
                                            <h1 className={`${boldFont.className} text-[12px] text-[#111827] dark:text-white`}>
                                                {item.date}
                                            </h1>

                                            <p className={`${boldFont.className} text-[10px] text-[#6B7280] dark:text-white/50`}>
                                                {item.time}
                                            </p>
                                        </div>

                                    </div>
                                </td>

                                <td>
                                    <h1 className={`${boldFont.className} text-[12px] text-[#111827] dark:text-white`}>
                                        {item.name}
                                    </h1>

                                    <p className={`${boldFont.className} text-[10px] text-[#6B7280] dark:text-white/50`}>
                                        {item.desc}
                                    </p>
                                </td>

                                <td>
                                    <div className={`inline-flex px-2 py-1 ${boldFont.className} text-[10px] text-[#111827] rounded-[5px] items-center ${item.categoryColor}`}>
                                        {item.category}
                                    </div>
                                </td>

                                <td>
                                    <h1 className={`${boldFont.className} text-[12px] text-[#111827] dark:text-white`}>
                                        {item.account}
                                    </h1>

                                    <p className={`${boldFont.className} text-[10px] text-[#6B7280] dark:text-white/50`}>
                                        {item.accountNo}
                                    </p>
                                </td>

                                <td>
                                    <h1 >

                                    </h1>

                                    <LinearReveal
                                        as='h1'
                                        delay={0.2}
                                        Text={item.amount}
                                        className={`${boldFont.className} text-[13px] text-[#111827] ${item.amountColor}`}
                                    />
                                </td>

                                <td>
                                    <div className='inline-flex px-2 py-1 ${boldFont.className} text-[10px] rounded-[5px] items-center bg-[#E8F9EA] text-[#2C9B4B]'>
                                        Completed
                                    </div>
                                </td>

                                <td>
                                    <button className='text-black/60 dark:text-white/60 dark:hover:text-white cursor-pointer'>
                                        <Ellipsis size={12} />
                                    </button>
                                </td>

                            </tr>
                        ))}

                        {/* may 29 */}
                        <tr>
                            <td
                                colSpan={7}
                                className={`${boldFont.className} pt-2 pb-2 text-[13px] text-black dark:text-white`}
                            >
                                May 29, 2024
                            </td>
                        </tr>

                        {transactions.slice(6, 8).map((item, index) => (
                            <tr
                                key={index}
                                className='border-b border-black/5 dark:border-white/5'
                            >

                                <td className='py-2'>
                                    <div className='flex items-center gap-4'>

                                        <div className={`flex h-8 w-8 items-center justify-center rounded-[8px] text-[18px] font-bold ${item.imageBg}`}>
                                            {item.image}
                                        </div>

                                        <div>
                                            <h1 className={`${boldFont.className} text-[12px] text-[#111827] dark:text-white`}>
                                                {item.date}
                                            </h1>

                                            <p className={`${boldFont.className} text-[10px] text-[#6B7280] dark:text-white/50`}>
                                                {item.time}
                                            </p>
                                        </div>

                                    </div>
                                </td>

                                <td>
                                    <h1 className={`${boldFont.className} text-[12px] text-[#111827] dark:text-white`}>
                                        {item.name}
                                    </h1>

                                    <p className={`${boldFont.className} text-[10px] text-[#6B7280] dark:text-white/50`}>
                                        {item.desc}
                                    </p>
                                </td>

                                <td>
                                    <div className={`inline-flex px-2 py-1 ${boldFont.className} text-[10px] text-[#111827]  rounded-[5px] items-center ${item.categoryColor}`}>
                                        {item.category}
                                    </div>
                                </td>

                                <td>
                                    <h1 className={`${boldFont.className} text-[12px] text-[#111827] dark:text-white`}>
                                        {item.account}
                                    </h1>

                                    <p className={`${boldFont.className} text-[10px] text-[#6B7280] dark:text-white/50`}>
                                        {item.accountNo}
                                    </p>
                                </td>

                                {/* amount */}
                                <td>
                                    <LinearReveal
                                        as='h1'
                                        delay={0.2}
                                        Text={item.amount}
                                        className={`${boldFont.className} text-[13px] text-[#111827] ${item.amountColor}`}
                                    />
                                </td>

                                {/* status */}
                                <td>
                                    <div className='inline-flex px-2 py-1 ${boldFont.className} text-[10px] rounded-[5px] items-center bg-[#E8F9EA] text-[#2C9B4B]'>
                                        Completed
                                    </div>
                                </td>

                                <td>
                                    <button className='text-black/60 dark:text-white/50 dark:hover:text-white cursor-pointer'>
                                        <Ellipsis size={12} />
                                    </button>
                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

            {/* load more */}
            <div className='flex items-center justify-center pt-5'>
                <button className={`${boldFont.className} text-[12px] flex items-center gap-2 text-black/60 dark:text-white/60 dark:hover:text-white cursor-pointer`}>
                    Load more transactions
                    <ChevronDown size={12} />
                </button>
            </div>

        </div>
    )
}

export default AdvancedTransactionLogPreview