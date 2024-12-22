import Image from "next/image";
import { Poiret_One } from "next/font/google"
import { Euphoria_Script } from "next/font/google"
import Link from "next/link";
import Blogcards from "@/components/blogcards";

const poiret = Poiret_One({ weight: "400", subsets: ["latin"] })
const euphoria = Euphoria_Script({ weight: "400", subsets: ["latin"] })

export default function Home() {
  return (
    <div className="w-full min-h-[90vh] flex justify-center items-center flex-col relative">
      <div className="w-full h-screen fixed top-0 left-0 -z-10">
        <Image src={"/background.jpg"} alt="backgorund" width={1920} height={1278} className="w-full h-full object-cover opacity-70" placeholder="blur" blurDataURL="/compressedbg.jpg" />
      </div>
      <h1 className="min-h-screen flex justify-center items-center flex-col">
        <p className={`font-bold`}>BLOG SPOT</p>
        <div className="flex justify-center items-center flex-col">
          <span className={`md:text-8xl text-5xl text-center font-thin ${poiret.className}`}>Create your first blog</span>
          <span className={`${euphoria.className} md:text-[10rem] text-8xl z-10 text-[#c4ceb0]`}> Be A writer </span>
          <span className={`md:text-8xl text-5xl font-thin ${poiret.className}`}>today</span>
        </div>
        <div className="space-x-5 mt-12">
          <Link href="/blog" className="px-6 py-3 bg-[#c4ceb0] text-black rounded">Read Blogs</Link>
          <Link href="/" className="px-6 py-3 border-[#c4ceb0] border text-white rounded cursor-not-allowed">Write A blog</Link>
        </div>
      </h1>
      <div className="w-full min-h-[50vh] bg-white md:p-12 p-3 text-black">
        <h1 className="text-4xl sm:pt-20 pt-16">Blogs</h1>
        <div className="cont flex flex-wrap gap-5 py-8 justify-center">
          <Blogcards />
        </div>
      </div>
    </div>
  );
}