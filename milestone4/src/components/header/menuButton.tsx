"use client"

import Link from "next/link";
import { ReactNode, useState } from "react";
import { IoSearch } from "react-icons/io5";

const MenuButton = ({authBtns}: {authBtns: ReactNode}) => {
    const [active, setActive] = useState<boolean>(false);
    
    return (
            <div className="flex items-center gap-2">
                <div className="p-3 rounded-full bg-black sm:flex hidden cursor-not-allowed">
                    <IoSearch className="text-white text-2xl" />
                </div>
                <div className="sm:py-2 sm:px-6 px-4 py-1 rounded-full border-[1px] border-black cursor-pointer text-lg" onClick={() => active ? setActive(false) : setActive(true)}>Menu</div>
                {
                    active &&
                    <div className="h-fit bg-black rounded-l-xl fixed top-24 right-0 px-20 py-6 text-white text-center text-2xl flex flex-col gap-2">
                        <Link href="/" className="">Home</Link>
                        <Link href="articles" className="">Article</Link>
                        {authBtns}
                    </div>
                }
            </div>
    )
}

export default MenuButton