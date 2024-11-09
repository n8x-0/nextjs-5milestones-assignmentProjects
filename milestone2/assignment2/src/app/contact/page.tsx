const Page3 = () => {
  return (
    <div className="w-full min-h-screen pt-20 bg-[#2C0E5E]">
      <form className="flex flex-col lg:w-1/2 w-full md:p-12 p-5 gap-5">
        <legend className="sm:text-7xl text-5xl font-sans font-bold tracking-tighter text-[#C096F1] shd mb-2">Contact Us</legend>
        <div className="grid grid-cols-2 gap-5">
          <input type="text" placeholder="Your name" className="px-6 py-3 rounded-lg bg-[#F1ECF5] focus:outline-none" />
          <input type="email" placeholder="Email" className="px-6 py-3 rounded-lg bg-[#F1ECF5] focus:outline-none" />
        </div>
        <input type="text" placeholder="Your subject" className="px-6 py-3 rounded-lg bg-[#F1ECF5] focus:outline-none" />
        <textarea rows={5} placeholder="Your message" className="px-6 py-3 rounded-lg bg-[#F1ECF5] focus:outline-none"></textarea>
        <button className='px-10 py-4 text-white border-[1px] border-[#C096F1] rounded-md text-lg'>sumbit</button>
      </form>
    </div>
  )
}

export default Page3