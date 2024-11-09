import Link from "next/link"

const header = () => {
  return (
    <div className="w-full flex justify-between items-center p-6 bg-[#7124CD] text-white absolute top-0 z-10">
      <h1 className="font-[geist] text-3xl tracking-tighter font-medium">n8x</h1>
      <div className="w-fit flex sm:gap-10 gap-6 font-medium tracking-tight">
        <Link href="/"><div>Home</div></Link>
        <Link href="/blog"><div>Blog</div></Link>
        <Link href="/contact"><div>Contact</div></Link>
      </div>
      <div className="sm:block hidden"></div>
    </div>
  )
}

export default header