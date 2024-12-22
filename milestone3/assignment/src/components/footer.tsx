import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full py-6 border-t bg-[#0a0a0a] text-center text-zinc-800 text-sm flex justify-center items-center flex-col gap-1'>
            Author: n8x urf Syed Shayan ☺
            <div className="flex flex-col md:items-end space-y-5 text-2xl">
                <div className="flex space-x-4">
                    <Link href="https://www.linkedin.com/in/syed-shayan-3a48202b3/" className="hover:opacity-75">
                        <FaLinkedin />
                    </Link>
                    <Link href="https://github.com/n8x-0" className="hover:opacity-75">
                        <FaGithub />
                    </Link>
                    <Link href="https://www.youtube.com/@n8xeditz561" className="hover:opacity-75">
                        <FaYoutube />
                    </Link>
                    <Link href="/" className="hover:opacity-75">
                        <FaInstagram />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer