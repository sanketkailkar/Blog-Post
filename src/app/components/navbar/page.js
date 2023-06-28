'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import supabase from '../../../../utils/supabaseClient';

export default function Navbar() {
    return (
        <nav className='text-center w-full bg-gradient-to-r from-[#432371] to-[#103783] fixed top-0 left-0 z-50 flex justify-between items-center flex-row lg:px-5' id='navbar'>
            <div className='text-white font-[600] text-2xl space-x-2 py-3 sm:pl-[1em] pl-[1em]'>
                <Link href="/">Blog</Link>
            </div>
            <div className=''>
                <ul className='flex justify-center items-center flex-wrap'>
                    <Link href="/" className='lg:mr-8 mr-3 list-none no-underline text-white uppercase hover:underline active:underline'>Home</Link>
                    <Link href="/components/navbar/about" className='lg:mr-8 mr-3 list-none no-underline text-white uppercase hover:underline'>About</Link>
                    <Link href="/components/navbar/docs" className='lg:mr-8 mr-3 list-none no-underline text-white uppercase hover:underline'>Docs</Link>
                    <Link href="/components/navbar/blog" className='list-none no-underline text-white uppercase hover:underline'>Blog</Link>
                </ul>
            </div>
            <div>
                <button
                    type="submit"
                    className='mr-[3px] bg-[#fff] text-[#6317fb] py-1 px-5 rounded-sm hover:bg-[#6317fb] hover:text-[#fff] border-[#fff]-500 transition ease-in duration-100'>
                    <Link href="/components//navbar/login"
                    >Sign In
                    </Link>
                </button>
            </div>
        </nav>
    )
}

