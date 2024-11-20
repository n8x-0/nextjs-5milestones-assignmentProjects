import Link from "next/link";
import { auth } from "@/auth";
import MenuButton from "./menuButton";
import Image from "next/image";
import SignIn from "../auth/sign-in";
import SignOut from "../auth/sign-out";

const Header = async () => {

    const session = await auth();

    return (
        <div className="w-full flex justify-between items-center md:px-14 sm:px-8 px-4 md:py-5 py-3 tracking-tighter absolute top-0 bg-white moveDown z-10">
            <div className="flex items-end gap-12">
                <h1 className="font-bold sm:text-4xl text-[1.8rem] italic">Blog Spot.</h1>
                <ul className="md:flex hidden gap-8 items-center text-[15px] p-1">
                    <Link href={"/articles"}><li>Articles</li></Link>
                    <Link href={"/"}><li>Home</li></Link>
                    {session ?
                        <Link href="/dashboard" className="flex items-center gap-1">
                            <div className="imgCont sm:w-8 sm:h-8 w-6 h-6 rounded-full overflow-hidden bg-black border-2 border-zinc-400">
                                <Image src={session?.user?.image as string} alt={'profileImage'} width={1920} height={1920} className="w-full h-full object-cover" />
                            </div>
                            Dashobard
                        </Link>
                        :
                        <SignIn>Be A writer</SignIn>
                    }
                    <li>Talk to us</li>
                </ul>
            </div>
            <div className="flex items-center gap-2">
                <MenuButton authBtns={session ?
                    <>
                        <Link href="/dashboard">Dashobard</Link>
                        <SignOut>Sign Out</SignOut>
                    </>
                    : <SignIn>Sign in</SignIn>} />
            </div>
        </div>
    )
}

export default Header