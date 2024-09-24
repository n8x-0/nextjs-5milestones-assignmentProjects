import Link from "next/link"

const header = () => {
  return (
    <div className="w-full flex justify-between items-center p-6 bg-blue-500 text-white">
      <h1 className="font-[geist] text-lg">n8x</h1>
      <div className="w-fit flex sm:gap-10 gap-6 font-medium tracking-tight">
        <Link href="/"><div>Home</div></Link>
        <Link href="/projects"><div>Projects</div></Link>
        <Link href="/skills"><div>Skills</div></Link>
      </div>
      <div className="sm:block hidden"></div>
    </div>
  )
}

export default header