"use client";

import { useEffect, useState } from "react";
import { Prod, addToCart } from "@/utils/addTocart";
import Popup from "@/components/popup";

const Product = ({ params }: { params: { productid: number } }) => {

  const [product, setProducts] = useState<Prod>();
  const [error, setError] = useState<string | boolean>(false);

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
      const res = await fetch('http://localhost:3000/api/products', { method: "POST", body: JSON.stringify(params.productid) })
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

  if (product)
    return (
      <div className="w-full flex justify-center">
        {error && <Popup message={error} />}
        <div className="xl:w-[80%] w-full sm:pt-6 mt-20 md:flex block">
          <div className="md:w-[60%] w-full flex flex-col gap-4 md:px-0 px-2">
            <div className="w-full h-96 overflow-hidden bg-black rounded-md shadow-md">
              <img src={product.image} alt="" className="w-full h-full object-contain" />
            </div>
            <div className="w-full rounded-md border-[1px] border-zinc-300 p-2 tracking-tight shadow-md">
              <h1 className="font-semibold text-2xl">{product.title}</h1>
              <span className="text-green-700 font-bold">{product.price}</span><br />
              <span className="text-yellow-500 font-bold">⭐{product.rating.rate}</span>
            </div>
            <div className="w-full rounded-md border-[1px] border-zinc-300 p-2 tracking-tight shadow-md">
              <h1 className="text-xl font-semibold">Description</h1>
              {product.description}
            </div>
          </div>
          <div className="md:w-[40%] w-full p-2">
            <div className="w-full rounded-md border-[1px] border-zinc-300 p-2 tracking-tight shadow-md">
              <div className="flex">
                <div className="w-20 h-20 bg-black rounded-full">
                  <img src="" alt="" />
                </div>
                <div className="p-2 leading-3">
                  <h1 className="font-medium text-xl">Seller name</h1>
                  <h2 className="text-sm">Seller Location, address</h2>
                </div>
              </div>
              <div className="flex flex-col gap-1 pt-2">
                <button className="px-5 py-2 bg-slate-600 text-white font-medium rounded-full text-xl cursor-not-allowed">Contact</button>
                <button onClick={() => handleCart(product)} className="px-5 py-2 bg-slate-500 text-white font-medium rounded-full text-xl">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Product