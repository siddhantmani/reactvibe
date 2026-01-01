import React from 'react'

import { Manrope } from 'next/font/google';
import Image from 'next/image';

const NavLogo = Manrope({
    weight: '800',
    subsets: ['latin']
});
const NavMenu = Manrope({
    weight: '600',
    subsets: ['latin']
});
const NavContact = Manrope({
    weight: '600',
    subsets: ['latin']
});


import LogoImage from "@/images/logo.svg"
import Link from 'next/link';

function NavBarGradientHalo() {
    return (
        <div className=''>
            <div className='flex md:flex-row items-center justify-between p-2 py-8 xl:max-w-6xl lg:px-[60px] md:px-[50px] px-[50px] mx-auto'>
                <div className='flex items-center gap-2'>
                    <Image
                        src={LogoImage}
                        height={1000}
                        width={1000}
                        alt='logo image'
                        className='h-[29px] w-auto'
                    />
                    <h1 className={`${NavLogo.className} text-white text-xl opacity-90`}>Loop</h1>
                </div>
                <div className='hidden md:inline-block'>
                    <ul
                        className={`${NavMenu.className} flex items-center md:gap-7 lg:gap-5 text-base opacity-100`}
                        style={{
                            background: 'linear-gradient(90deg, #fff 0%, #bbb 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}
                    >
                        <Link href="#home">
                            <li>Home</li>
                        </Link>
                        <Link href="#features">
                            <li>Features</li>
                        </Link>
                        <Link href="#pricing">
                            <li>Pricing</li>
                        </Link>
                        <Link href="#faq">
                            <li>FAQ</li>
                        </Link>
                    </ul>
                </div>
                <div>
                    <button className={`${NavContact.className} bg-[#5616FF] text-white py-2 xl:px-4 px-2 text-sm rounded`}>Contact us</button>
                </div>
            </div>
        </div>
    )
}

export default NavBarGradientHalo