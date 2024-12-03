import Link from "next/link";
import MenuButton from "./menuButton";
import Image from "next/image";
import SignOut from "../auth/sign-out";
import getUser from "@/lib/getUser";
import { auth } from "@/auth";

const Header = async () => {
    const session = await auth()
    const user = session ? await getUser() : null

    return (
        <div className="w-full flex justify-between items-center md:px-14 sm:px-8 px-4 md:py-5 py-3 tracking-tighter absolute top-0 bg-white moveDown z-10 shadow-sm">
            <div className="flex items-end gap-12">
                <h1 className="font-bold sm:text-4xl text-[1.8rem] italic">Blog Spot.</h1>
                <ul className="lg:flex hidden gap-8 items-center text-[15px] p-1">
                    <Link href={"/articles"}><li>Articles</li></Link>
                    <Link href={"/"}><li>Home</li></Link>
                    {session && user ?
                        <Link href="/dashboard" className="flex items-center gap-1">
                            <div className="imgCont sm:w-8 sm:h-8 w-6 h-6 rounded-full overflow-hidden bg-black border-2 border-zinc-400">
                                <Image src={user.image} alt={'profileImage'} width={1920} height={1920} className="w-full h-full object-cover" />
                            </div>
                            Dashobard
                        </Link>
                        :
                        <Link href={"/signup"}>Be A writer</Link>
                    }
                    <li>Talk to us</li>
                </ul>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex gap-5 sm:px-5 px-2">
                    {session ?
                        <SignOut>
                            <span className="underline underline-offset-2 text-[#222] font-medium">sign out</span>
                        </SignOut>
                        :
                        <>
                            <Link href="/login" className="underline underline-offset-2 text-[#222] font-medium">Login</Link>
                            <Link href="/signup" className="underline underline-offset-2 text-[#222] font-medium">Sing up</Link>
                        </>
                    }
                </div>
                <MenuButton authBtns={session ?
                    <>
                        <Link href="/dashboard" className="flex gap-2">
                            <div className="imgCont sm:w-8 sm:h-8 w-6 h-6 rounded-full overflow-hidden bg-black border-2 border-zinc-400">
                                <Image src={user.image as string} alt={'profileImage'} width={1920} height={1920} className="w-full h-full object-cover" />
                            </div>
                            Dashobard
                        </Link>
                        <SignOut>Sign Out</SignOut>
                    </>
                    : <Link href={"/signup"}>Sign in</Link>} />
            </div>
        </div>
    )
}

export default Header