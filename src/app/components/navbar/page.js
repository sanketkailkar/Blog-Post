'use client'
import Link from 'next/link';

export default function Navbar() {
    return (
        <>

            <nav className='text-center flex justify-around m-10' id='navbar'>
                <ul>
                    <Link href="/" className='mr-4 list-none no-underline text-black uppercase hover:underline active:underline'>Home</Link>
                    <Link href="/components/navbar/about" className='mr-4 list-none no-underline text-black uppercase hover:underline'>About</Link>
                    <Link href="/components//navbar/docs" className='mr-4 list-none no-underline text-black uppercase hover:underline'>Docs</Link>
                    <Link href="/components//navbar/blog" className='mr-4 list-none no-underline text-black uppercase hover:underline'>Blog</Link>
                    <Link href="/components//navbar/login" className='list-none no-underline text-black uppercase hover:underline'>Log In</Link>
                </ul>
            </nav>
            
        </>
    )
}

