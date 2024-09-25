"use client";

import ProductCard from "@/components/productCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import Popup from "@/components/popup";
import { Prod, addToCart } from "@/utils/addTocart";

export default function Home() {

  const [products, setProducts] = useState<Prod[]>();
  const [error, setError] = useState<string | boolean>(false);
  const [category, setCategory] = useState<string>('');

  const handleCart = async (data: Prod) => {
    const res = await addToCart(data);

    if (res.error) {
      setError("Already in your cart");
      setTimeout(() => {
        setError(false);
      }, 1500);
    } else if (res.message) {
      setError("Cart added");
      setTimeout(() => {
        setError(false);
      }, 1500);
    }
  }

  const loadProd = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, { method: "GET" })
      const json = await res.json();

      if (res.ok) {
        setProducts(json.json)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadProd()
  }, [])

  return (
    <>
      <div className="flex flex-col justify-center items-center text-slate-800 w-full h-full z-0">
        {error && <Popup message={error} />}
        <div className="sm:pt-6 mt-20 xl:w-[80%] w-full">
          <div className="w-full flex items-center sm:py-5 sm:px-12 px-2 py-2">
            <ul className="w-fit flex sm:gap-3 gap-1 flex-wrap">
              <li onClick={() => setCategory('')} className="px-4 py-1 rounded-full bg-slate-300 shadow-md sm:text-sm text-xs text-slate-600 font-medium cursor-pointer">All</li>
              <li onClick={() => setCategory('jewelery')} className="px-4 py-1 rounded-full bg-slate-300 shadow-md sm:text-sm text-xs text-slate-600 font-medium cursor-pointer">Jewelry</li>
              <li onClick={() => setCategory(`men's clothing`)} className="px-4 py-1 rounded-full bg-slate-300 shadow-md sm:text-sm text-xs text-slate-600 font-medium cursor-pointer">Men&apos;s Clothing</li>
              <li onClick={() => setCategory(`women's clothing`)} className="px-4 py-1 rounded-full bg-slate-300 shadow-md sm:text-sm text-xs text-slate-600 font-medium cursor-pointer">Women&apos;s Clothing</li>
              <li onClick={() => setCategory('electronics')} className="px-4 py-1 rounded-full bg-slate-300 shadow-md sm:text-sm text-xs text-slate-600 font-medium cursor-pointer">Electronics</li>
            </ul>
          </div>
        </div>
        <div className="products xl:w-[80%] w-full h-full sm:flex flex-wrap sm:gap-x-4 sm:gap-y-4 justify-center">
          {products
            ? products
              .filter((data: Prod) => category === '' || data.category === category)
              .map((data: Prod) => {
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
                              <h2 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis relative w-60 sm:text-md text-sm">
                                {data.title}
                                <span className="w-12 h-full bg-gradient-to-l sm:from-slate-300 from-white to-transparent absolute top-0 right-0"></span>
                              </h2>
                              <span className="text-green-700 font-bold">{data.price}$</span>
                              <h3 className="text-xs">
                                Rating:&nbsp;<span className="text-yellow-600">{data.rating.rate}</span>
                              </h3>
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
                          <button className="px-3 py-1 bg-blue-600 text-white font-medium rounded-sm text-sm" disabled={!!error} onClick={() => handleCart(data)}>
                            Add to cart
                          </button>
                        </div>
                        <button onClick={() => handleCart(data)} disabled={!!error} className="bg-zinc-300 text-white flex sm:hidden justify-center items-center w-8 h-8 absolute top-0 right-0 rounded-full mr-2 mt-1 cursor-pointer z-20">
                          +
                        </button>
                      </div>
                    </ProductCard>
                  </div>
                );
              })
            : "loading"}
        </div>
      </div >
    </>
  );
}
