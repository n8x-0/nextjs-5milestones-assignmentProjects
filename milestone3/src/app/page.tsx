"use client";

import ProductCard from "@/components/productCard";
import Header from "@/components/header";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navproducts from "@/components/navproducts";

interface Prod {
  category: string;
  descirption: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number, count: number };
  title: string
}

export default function Home() {

  const [products, setProducts] = useState<Prod[]>();
  const [cart, setCart] = useState<Prod[]>([]);

  function addToCart(cartData: Prod) {
    setCart((prev) => [...prev, cartData]);
    localStorage.setItem("myCart", JSON.stringify(cart));
  }

  const loadProd = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products')
      const json = await res.json();

      if (res.ok) {
        setProducts(json)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadProd()
    const storedCart = localStorage.getItem("myCart")

    if (storedCart) {
      setCart(JSON.parse(storedCart))
      console.log(cart);
    }
  }, [])

  return (
    <>
      <div className="flex flex-col justify-center items-center text-slate-800 w-full h-full">
        <Header />
        <div className="sm:pt-6 mt-20  xl:w-[80%] w-full">
          <Navproducts />
        </div>
        <div className="products xl:w-[80%] w-full h-full sm:flex flex-wrap sm:gap-x-4 sm:gap-y-4 justify-center">
          {
            products ?
              products.map((data: any) => {
                return (
                  <div key={data.id}>
                    <ProductCard>
                      <div className="sm:w-full sm:h-32 h-20 bg-black w-[30%] overflow-hidden">
                        <img src={data.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="sm:p-2 sm:block flex sm:ml-0 ml-1 items-center relative sm:w-full w-[70%]">
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
                        <Link href={`product/${data.id}`} className="text-blue-600 text-sm sm:block hidden">Read more...</Link>
                        <div className="mt-2 gap-1 sm:flex hidden">
                          <button className="px-3 py-1 bg-blue-600 text-white font-medium rounded-sm text-sm cursor-not-allowed">Order</button>
                          <button className="px-3 py-1 bg-blue-600 text-white font-medium rounded-sm text-sm" onClick={() => addToCart(data)}>Add to cart</button>
                        </div>
                        <div className="bg-zinc-300 text-white flex sm:hidden justify-center items-center w-8 h-8 absolute top-0 right-0 rounded-full mr-2 mt-1 cursor-pointer">
                          +
                        </div>
                      </div>
                    </ProductCard>
                  </div>
                )
              })
              : "loading"
          }
        </div>
      </div>
    </>
  );
}
