"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/productCard";
import { Prod } from "@/utils/addTocart";
import Link from "next/link";

const Cart = () => {
    const [cart, setCart] = useState<Prod[]>([]);

    const removeFromCart = (id: number) => {
        const lclStorageCart = localStorage.getItem("cartData");
        let storedCart = lclStorageCart ? JSON.parse(lclStorageCart) : [];

        const filteredItem = storedCart.filter((data: Prod) => data.id !== id);
        console.log(filteredItem);
        setCart(filteredItem);
        storedCart = filteredItem;
        localStorage.setItem("cartData", JSON.stringify(storedCart));
    }

    useEffect(() => {
        const lclStorageCart = localStorage.getItem("cartData");
        const storedCart = lclStorageCart ? JSON.parse(lclStorageCart) : [];

        if (storedCart) {
            setCart(storedCart)
        }
    }, [])

    return (
        <div className="flex flex-col justify-center items-center text-slate-800 w-full h-full">
            <div className="products sm:pt-6 mt-20 xl:w-[80%] w-full h-full sm:flex flex-wrap sm:gap-x-4 sm:gap-y-4 justify-center">
                {cart.length > 0 ?
                    cart.map((data: Prod) => {
                        return (
                            <div key={data.id}>
                                <ProductCard>
                                    <div className="sm:w-full sm:h-32 h-20 bg-black w-[30%] overflow-hidden">
                                        <img src={data.image} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="sm:p-2 sm:block flex sm:ml-0 ml-1 items-center relative sm:w-full w-[70%]">
                                        <Link href={`product/${data.id}`}>
                                            <div>
                                                <div className="leading-4 sm:mb-2 sm:my-0 my-1 w-fit">
                                                    <h2 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis relative w-60 sm:text-md text-sm">{data.title}
                                                        <span className="w-12 h-full bg-gradient-to-l sm:from-slate-300 from-white to-transparent absolute top-0 right-0"></span>
                                                    </h2>
                                                    <span className="text-green-700 font-bold">{data.price}$</span>
                                                    <h3 className="text-xs">Rating: <span className="text-yellow-600">{data.rating.rate}</span></h3>
                                                </div>
                                                <p className="text-[12px] leading-3 h-[34px] overflow-hidden relative w-fit">
                                                    {data.description}
                                                    <span className="w-full h-1/2 absolute bottom-0 left-0 bg-gradient-to-t sm:from-slate-300 from-white to-transparent"></span>
                                                </p>
                                            </div>
                                        </Link>
                                        <Link href={`product/${data.id}`} className="text-blue-600 text-sm sm:block hidden">Read more...</Link>
                                        <div className="mt-1 gap-1 sm:flex hidden">
                                            <button className="px-3 py-1 bg-blue-600 text-white font-medium rounded-sm text-sm cursor-not-allowed">Order</button>
                                            <button className="px-3 py-1 bg-blue-600 text-white font-medium rounded-sm text-sm" onClick={() => removeFromCart(data.id)}>Remove</button>
                                        </div>
                                        <div onClick={() => removeFromCart(data.id)} className="bg-zinc-300 text-white flex sm:hidden justify-center items-center w-8 h-8 absolute top-0 right-0 rounded-full mr-2 mt-1 cursor-pointer">
                                            d
                                        </div>
                                    </div>
                                </ProductCard>
                            </div>
                        )
                    })
                    :
                    <div className="w-full h-[50vh] flex justify-center items-center font-medium">
                        <h1 className="animate-bounce tracking-tighter text-sm">your cart is empty</h1>
                    </div>}
            </div>
        </div>
    )
}

export default Cart