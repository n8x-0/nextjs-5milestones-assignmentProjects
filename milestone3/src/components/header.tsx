import Link from "next/link"

const header = () => {
    return (
        <div className="xl:w-[80%] w-full md:p-5 p-3 border-b-2 border-slate-600 flex justify-between items-center absolute top-0">
            <h1 className="md:text-5xl text-2xl tracking-tighter">n8x mart.</h1>
            <input type="text" className="bg-slate-300 px-5 md:py-2 py-1 rounded-md focus:outline-none placeholder:text-slate-500 placeholder:tracking-tighter w-1/2" placeholder="search item" />
            <div className="gap-6 items-center font-medium md:flex hidden">
                <Link href={'/cart'}>
                    <div className="cursor-pointer">Cart</div>
                </Link>
                <div>Notification</div>
                <div className="px-5 md:py-2 py-1 bg-slate-800 text-white font-semibold rounded-md">Sell</div>
            </div>
            <div className="sm:px-5 px-3 md:py-2 py-1 bg-slate-800 text-white font-semibold rounded-md md:hidden visible">Sell</div>
        </div>
    )
}

export default header