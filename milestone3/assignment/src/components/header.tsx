import { Euphoria_Script } from "next/font/google"
import Link from "next/link"
import { BsThreeDots } from "react-icons/bs"

const euphoria = Euphoria_Script({ weight: "400", subsets: ["latin"] })

const Header = () => {
    return (
        <div className="w-full sm:px-20 px-4 py-4 text-white flex justify-between items-center fixed top-0 z-10 mix-blend-difference">
            <h3 className={`text-5xl ${euphoria.className}`}>n8x</h3>
            <div className="md:flex hidden gap-10">
                <Link href={"/"}>Home</Link>
                <Link href={"/blog"}>Blogs</Link>
                <Link href={"/"} className="cursor-not-allowed">Create blog</Link>
            </div>
            <button className="md:block hidden px-4 py-2 bg-[#c4ceb0] text-sm rounded-sm text-black font-medium">Be A Writer</button>
            <div className="md:hidden block relative group">
                <BsThreeDots />
                <div className="hidden flex-col absolute right-0 top-full gap-4 p-8 rounded bg-zinc-500 font-medium w-[220px] group-hover:flex">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/blog"}>Blogs</Link>
                    <Link href={"/"} className="cursor-not-allowed">Create blog</Link>
                </div>
            </div>
        </div>
    )
}

export default Header