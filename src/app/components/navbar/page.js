'use client'
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='text-center w-full bg-gradient-to-r from-[#432371] to-[#103783] fixed top-0 left-0 z-50 flex justify-between items-center flex-row lg:px-10 lg:py-4 sm:px-5 sm:py-4' id='navbar'>
            <div className='text-white font-[600] text-2xl space-x-2 py-0 px-5'>
                <Link href="/">Blog</Link>
            </div>
            <div className=''>
                <ul className='flex justify-center items-center'>
                    <Link href="/" className='lg:mr-8 mr-3 list-none no-underline text-white uppercase hover:underline active:underline'>Home</Link>
                    <Link href="/components/navbar/about" className='lg:mr-8 mr-3 list-none no-underline text-white uppercase hover:underline'>About</Link>
                    <Link href="/components//navbar/docs" className='lg:mr-8 mr-3 list-none no-underline text-white uppercase hover:underline'>Docs</Link>
                    <Link href="/components//navbar/blog" className='list-none no-underline text-white uppercase hover:underline'>Blog</Link>
                </ul>
            </div>
            <div>
                <button type="submit" className='bg-[#fff] text-[#6317fb] py-1 px-5 rounded-sm hover:bg-[#6317fb] hover:text-[#fff] border-[#fff]-500 border-1 transition ease-in duration-100'><Link href="/components//navbar/login">Sign In</Link></button>
            </div>
        </nav>
    )
}

