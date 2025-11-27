import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import LinearReveal from '../LinearReveal';
import { Star } from 'lucide-react';

const LinearRevealFont = Bricolage_Grotesque({
    weight: "400",
    subsets: ["latin"],
})


function GitHubStars() {
    return (
        <div className='flex items-center gap-4'>
            <IoLogoGithub className='text-lg' />
            <div className='flex items-center gap-1'>
                <Star className='stroke-yellow-500 fill-yellow-500 h-3 w-3' />
                <LinearReveal
                    text='Coming soon'
                    as={'h2'}
                    className={`${LinearRevealFont.className} text-[11px]`}
                />
            </div>
        </div>
    )
}

export default GitHubStars