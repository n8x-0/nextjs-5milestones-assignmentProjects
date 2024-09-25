import Link from "next/link";

const header = () => {
    return (
        <div className="xl:w-[80%] w-full md:p-5 p-3 border-b-2 border-slate-600 absolute top-0 z-20 flex justify-between items-center">
            <h1 className="md:text-5xl text-2xl tracking-tighter">n8x mart.</h1>
            <div className="gap-6 items-center font-medium flex">
                <Link href={'/cart'}><div className="cursor-pointer md:block hidden">Cart</div></Link>
                <Link href={'/cart'}><div className="sm:px-5 px-3 md:py-2 py-1 bg-slate-800 text-white font-semibold rounded-md md:hidden visible">Cart</div></Link>
                <div className="cursor-not-allowed md:block hidden">Notification</div>
                <div className="px-5 md:py-2 py-1 md:block hidden bg-slate-800 text-white font-semibold rounded-md cursor-not-allowed">Sell</div>
            </div>
        </div>
    )
}

export default header