"use client";
import { useEffect, useState } from "react";
import {Prod, products} from "@/_data/productsData";
import ProductCard from "@/components/productCard";
import Link from "next/link";

const Cart = () => {
    const [cart, setCart] = useState<string[]>([]);
    const [cartData, setCartData] = useState<Prod[]>([]);
    const getCartdata = async () => {
        try {
            const res = await fetch("api/addtocart", { method: "GET" });
            const json = await res.json();

            if (res.ok) {
                setCart(json.cart)
                cart.forEach((data) => {
                    const showCartData = products.filter((id) => id.price === data)
                    setCartData(showCartData)
                })
            }

        } catch (err) {
            console.log("error getting cart data");
        }
    }

    useEffect(() => {
        getCartdata();
    }, [])

    return (
        cartData.map((data, index)=> {
            return (
                <div key={index}>
                  <ProductCard>
                    <div className="sm:w-full sm:h-32 h-20 bg-black w-[30%] overflow-hidden">
                      <img src={data.prodImage} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="sm:p-2 sm:block flex sm:ml-0 ml-1 items-center relative sm:w-full w-[70%]">
                      <div>
                        <div className="leading-4 sm:my-2 my-1 w-fit">
                          <h2 className="font-bold">{data.prodName}<span className="text-green-700 ml-1">{data.price}$</span></h2>
                          <h3 className="text-xs">{data.sellerName}<span className="ml-1">{data.sellerLoc}</span></h3>
                        </div>
                        <p className="sm:text-sm text-[12px] leading-4 mt-1 h-[34px] overflow-hidden relative w-fit">
                          {data.prodDetails}
                          <span className="w-full h-1/2 absolute bottom-0 left-0 bg-gradient-to-t sm:from-slate-300 from-white to-transparent"></span>
                        </p>
                      </div>
                      <Link href={`product/${data.id}`} className="text-blue-600 text-sm sm:block hidden">Read more...</Link>
                      <div className="mt-2 gap-1 sm:flex hidden">
                        <button className="px-3 py-1 bg-blue-600 text-white font-medium rounded-sm text-sm cursor-not-allowed">Order</button>
                      </div>
                    </div>
                  </ProductCard>
                </div>
              )
        })
    )
}

export default Cart