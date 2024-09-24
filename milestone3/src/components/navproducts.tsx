const navproducts = () => {
  return (
    <div className="w-full flex items-center sm:py-5 sm:px-12 px-2 py-2">
        <ul className="w-fit flex gap-3">
            <li className="px-4 py-1 rounded-full bg-slate-300 shadow-md text-sm text-slate-600 font-medium cursor-pointer">Jewelry</li>
            <li className="px-4 py-1 rounded-full bg-slate-300 shadow-md text-sm text-slate-600 font-medium cursor-pointer">Clothing</li>
            <li className="px-4 py-1 rounded-full bg-slate-300 shadow-md text-sm text-slate-600 font-medium cursor-pointer">Electronics</li>
        </ul>
    </div>
  )
}

export default navproducts