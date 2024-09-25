import React from 'react'

const productCard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='sm:bg-slate-300 sm:rounded-md sm:shadow-md sm:w-64 sm:h-72 w-full h-fit sm:border-y-0 border-b-[0.5px] border-slate-300 overflow-hidden sm:block flex items-center'>{children}</div>
    )
}

export default productCard